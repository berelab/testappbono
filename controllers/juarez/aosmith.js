'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import aosmithModel from '../../models/juarez/aosmith';
import SQLAosmithRepository from '../../infrastructure/juarez/AosmithRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new SQLAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.execute(); 
        const cd =  new convertData(aosmith.equipo, aosmith.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: aosmith.message,           
            base0: aosmith.base0,
            dias_sucios: aosmith.auditoria_sol,
            $_extra_m3: aosmith.$_extra_m3,
            dias: aosmith.dias,
            factor_dias_laborados: aosmith.factor_dias_laborados,
            piezas_terminadas: aosmith.piezas_terminadas,
            asistencia: aosmith.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.execute(); 
        const cd =  new convertData(aosmith.equipo, aosmith.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, aosmith.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let total_horas_extra = (aosmith.he_dobles *2) + (aosmith.he_triples*3);
        let asistencia_total = (asistencia + (total_horas_extra / 24)); 

        const calc = new mainCalcs(
            aosmith.dias, 
            aosmith.piezas_terminadas, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            aosmith.base0, 
            aosmith.$_extra_m3, 
            aosmith.auditoria_sol, 
            aosmith.factor_dias_laborados,
            aosmith.message,
            aosmith.city
        );

        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;   
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;
        let percepcion_total = calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;
        let bono_productividad = calc.bonoProductividad;  
        let bono_metas = calc.pc_metas; 

        
        //generar reporte
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, aosmith.message, aosmith.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, aosmith.message, aosmith.city); 

            let m3_cortados_totales = aosmith.piezas_terminadas.lunes +  aosmith.piezas_terminadas.martes + aosmith.piezas_terminadas.miercoles + aosmith.piezas_terminadas.jueves +aosmith.piezas_terminadas.viernes + aosmith.piezas_terminadass.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,aosmith.message, aosmith.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,aosmith.message, aosmith.city); 
        }

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
                    depto: aosmith.message,
                    day: weekdayName,
                    meta_semana: aosmith.base0,
                    dias_laborados: aosmith.dias,
                    $_extra_m3: aosmith.$_extra_m3,       
                    progress: progress,
                    m3_persona: m3_persona,
                    bono_depto: percepcion_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    }     
                });
               
            }
        }else{
            return res.status(200).send({              
                depto: aosmith.message,
                day: weekdayName,
                meta_semana: aosmith.base0,
                dias_laborados: aosmith.dias, 
                $_extra_m3: aosmith.$_extra_m3,           
                progress: progress,
                m3_persona: m3_persona,
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
        
        const repository = new SQLAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            aosmith
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new SQLAosmithRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new SQLAosmithRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
};

module.exports = controller; 
