'use strict'

import cedeiModels from '../../models/lapaz/cedeiModels';
import mySqlCediRepository from '../../infrastructure/lapaz/CediRepository';
import mainCalcs from '../MainCalcs';

const controller = {

	home: async(req, res) => {
        const repository = new mySqlCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.execute(); 

		return res.status(200).send({
            message: cedi.message,
            base0: cedi.base0,
            dias_sucios: cedi.dias_sucios,
            dias: cedi.dias,
            $_extra_m3: cedi.$_extra_m3,
            factor_dias_laborados: cedi.factor_dias_laborados,
            asistencia_total: cedi.asistencia_total,
            colaboradores: cedi.colaboradores,
            m3_desplazados: cedi.m3_desplazados,
            equipo: cedi.equipo
        });
    },
    calculator: async(req, res)=>{

        const repository = new mySqlCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            cedi.dias, 
            cedi.m3_desplazados, 
            cedi.colaboradores, 
            cedi.asistencia_total, 
            weekdayName, 
            cedi.equipo, 
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

        if(req.params.index){
            let i = parseInt(req.params.index); 

            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = cedi.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: cedi.equipo[i].nombre,
                    depto: cedi.message,
                    day: weekdayName,
                    meta_semana: cedi.base0,
                    dias_laborados: cedi.base0, 
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
                    },
                    
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
                },
                equipo: cedi.equipo 
            });
        }
       
        
    },
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlCediRepository();
        const model = new cedeiModels(repository);
        let cedi = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            cedi
        });  
    }

};


module.exports = controller; 
