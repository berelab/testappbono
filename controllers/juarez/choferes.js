'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import oracleProduccionRepo from '../../infrastructure/juarez/produccionRepository';
import choferesModel from '../../models/juarez/choferes';
import SQLChoferesRepository from '../../infrastructure/juarez/ChoferesRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new SQLChoferesRepository();
        const produccionRepo = new oracleProduccionRepo();
        const model = new choferesModel(repository,produccionRepo);
        let choferes = await model.execute(); 
        const cd =  new convertData(choferes.equipo, choferes.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: choferes.message,
            base0: choferes.base0,
            dias_sucios: choferes.auditoria_sol,
            $_extra_m3: choferes.$_extra_m3,
            dias: choferes.dias,
            factor_dias_laborados: choferes.factor_dias_laborados,
            m3_desplazados: choferes.m3_desplazados,
            asistencia: choferes.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLChoferesRepository();
        const produccionRepo = new oracleProduccionRepo();
        const model = new choferesModel(repository,produccionRepo);
        let choferes = await model.execute(); 
        const cd =  new convertData(choferes.equipo, choferes.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, choferes.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            choferes.dias, 
            choferes.m3_desplazados, 
            colaboradores, 
            asistencia, 
            weekdayName, 
            equipo, 
            choferes.base0, 
            choferes.$_extra_m3, 
            choferes.auditoria_sol, 
            choferes.factor_dias_laborados,
            choferes.message,
            choferes.city
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, 'Chofer Local', choferes.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, 'Chofer Local', choferes.city); 
    
            let m3_cortados_totales = choferes.m3_desplazados.lunes +  choferes.m3_desplazados.martes + choferes.m3_desplazados.miercoles + choferes.m3_desplazados.jueves + choferes.m3_desplazados.viernes + choferes.m3_desplazados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Chofer Local', choferes.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Chofer Local', choferes.city); 
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
                    depto: choferes.message,
                    day: weekdayName,
                    meta_semana: choferes.base0,
                    dias_laborados: choferes.dias,
                    $_extra_m3: choferes.$_extra_m3,       
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
                depto: choferes.message,
                day: weekdayName,
                meta_semana: choferes.base0,
                dias_laborados: choferes.dias, 
                $_extra_m3: choferes.$_extra_m3,           
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
        
        const repository = new SQLChoferesRepository();
        const model = new choferesModel(repository);
        let choferes = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            choferes
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new SQLChoferesRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new SQLChoferesRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
};

module.exports = controller; 
