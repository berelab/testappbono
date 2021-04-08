'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import cedeiModels from '../../models/lapaz/cedeiModels';
import SQLCediRepository from '../../infrastructure/lapaz/CediRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {

	home: async(req, res) => {
        const repository = new SQLCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.execute(); 
        const cd =  new convertData(cedi.equipo, cedi.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: cedi.message,
            base0: cedi.base0,
            dias_sucios: cedi.dias_sucios,
            dias: cedi.dias,
            $_extra_m3: cedi.$_extra_m3,
            factor_dias_laborados: cedi.factor_dias_laborados,
            asistencia_total: cedi.asistencia_total,
            m3_desplazados: cedi.m3_desplazados,
            asistencia: cedi.team_asis,
            equipo_convertido: equipo
        });
    },
    calculator: async(req, res)=>{

        const repository = new SQLCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.execute(); 
        const cd =  new convertData(cedi.equipo, cedi.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, cedi.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            cedi.dias, 
            cedi.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo,
            cedi.base0, 
            cedi.$_extra_m3, 
            cedi.dias_sucios, 
            cedi.factor_dias_laborados,
            cedi.message,
            cedi.city
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, cedi.message, cedi.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, cedi.message, cedi.city); 

            let m3_cortados_totales = cedi.m3_desplazados.lunes +  cedi.m3_desplazados.martes + cedi.m3_desplazados.miercoles +  cedi.m3_desplazados.jueves + cedi.m3_desplazados.viernes + cedi.m3_desplazados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,cedi.message, cedi.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total, cedi.message, cedi.city); 
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
                    depto: cedi.message,
                    day: weekdayName,
                    meta_semana: cedi.base0,
                    dias_laborados: cedi.dias, 
                    $_extra_m3: cedi.$_extra_m3,       
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
                depto: cedi.message,
                day: weekdayName,
                meta_semana: cedi.base0,
                dias_laborados: cedi.dias,
                $_extra_m3: cedi.$_extra_m3,
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
        
        const repository = new SQLCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            cedi
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new SQLCediRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new SQLCediRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }

};


module.exports = controller; 
