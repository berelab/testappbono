'use strict'
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import molinoModel from '../../models/tijuana/siloMolinoModel';
import molinoSQL from '../../infrastructure/tijuana/molinoRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {	
    home: async(req, res) => {
        const repository = new molinoSQL();
        const model = new molinoModel(repository);
        let molino = await model.execute(); 
        const cd =  new convertData(molino.equipo, molino.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: molino.message,
            base0: molino.base0,
            dias_sucios: molino.dias_sucios,
            $_extra_m3: molino.$_extra_m3,
            blocks_fuera_especificacion: molino.blocks_fe,           
            dias: molino.dias,
            factor_dias_laborados: molino.factor_dias_laborados,
            m3_desplazados: molino.m3_desplazados,
            asistencia: molino.team_asis,
            equipo_convertido: equipo 
        });
    },
    calculator: async(req, res)=>{
        const repository = new molinoSQL();
        const model = new molinoModel(repository);
        let molino = await model.execute(); 
        const cd =  new convertData(molino.equipo, molino.team_asis);
        let equipo = cd.convert;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        const calcAtt = new att( equipo, molino.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        const calc = new mainCalcs(
            molino.dias, 
            molino.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            molino.base0, 
            molino.$_extra_m3, 
            molino.dias_sucios, 
            molino.factor_dias_laborados,
            molino.message,
            molino.city,
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let bultos_dia = calc.m3Persona;
        let percepcion_total = calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;   
        let bono_productividad = calc.bonoProductividad;  
        let bono_metas = calc.pc_metas;    
        
        //generar reporte
        /*
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, 'Molino', molino.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, bultos_dia, 'Molino', molino.city); 
    
            let m3_cortados_totales = molino.m3_desplazados.lunes +  molino.m3_desplazados.martes + molino.m3_desplazados.miercoles + molino.m3_desplazados.jueves + molino.m3_desplazados.viernes + molino.m3_desplazados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Molino', molino.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Molino', molino.city); 
        }*/



        if(req.params.index){
            let codigo = parseInt(req.params.index); 
            let len = equipo.length;
            let i = 'no encontrado';

            for(var a=0; a<len; a++){
                equipo[a].num == codigo?  i = a: i
            }

            if(i =='no encontrado'){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({             
                    nombre: equipo[i].nombre,
                    code: equipo[i].num,
                    depto: molino.message,
                    day: weekdayName,
                    meta_semana: molino.base0,
                    dias_laborados: molino.dias, 
                    $_extra_m3: molino.$_extra_m3,       
                    progress: progress,
                    m3_persona: bultos_dia,
                    bono_depto: percepcion_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    },                    
                });               
            }
        }else{
            return res.status(200).send({      
                depto: molino.message,
                day: weekdayName,
                meta_semana: molino.base0,
                dias_laborados: molino.dias,
                $_extra_m3: molino.$_extra_m3,
                progress: progress,
                m3_persona: bultos_dia,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                }
            });
        }          
    },
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new molinoSQL();
        const model = new molinoModel(repository);
        let molino = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            molino
        });  
    }

};

 
module.exports = controller; 
