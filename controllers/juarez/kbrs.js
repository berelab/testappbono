'use strict'

import kbrsModel from '../../models/juarez/kbrs';
import mySqlKbrsRepository from '../../infrastructure/juarez/KbrsRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlKbrsRepository();
        const model = new kbrsModel(repository);
        let kbrs = await model.execute(); 

		return res.status(200).send({
            message: kbrs.message,
            city: kbrs.city,
            base0: kbrs.base0,
            dias_sucios: kbrs.auditoria_sol,
            $_extra_m3: kbrs.$_extra_m3,
            dias: kbrs.dias,
            factor_dias_laborados: kbrs.factor_dias_laborados,
            colaboradores: kbrs.colaboradores,
            piezas_terminadas: kbrs.piezas_terminadas,
            equipo: kbrs.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlKbrsRepository();
        const model = new kbrsModel(repository);
        let kbrs = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            kbrs.dias, 
            kbrs.piezas_terminadas, 
            kbrs.colaboradores, 
            kbrs.asistencia, 
            weekdayName, 
            kbrs.equipo, 
            kbrs.base0, 
            kbrs.$_extra_m3, 
            kbrs.auditoria_sol, 
            kbrs.factor_dias_laborados,
            kbrs.message,
            kbrs.city
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

            let len = kbrs.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: kbrs.equipo[i].nombre,
                    depto: kbrs.message,
                    day: weekdayName,
                    meta_semana: kbrs.base0,
                    dias_laborados: kbrs.base0, 
                    $_extra_m3: kbrs.$_extra_m3,       
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
               
                depto: kbrs.message,
                day: weekdayName,
                meta_semana: kbrs.base0,
                dias_laborados: kbrs.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: kbrs.$_extra_m3,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: kbrs.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlKbrsRepository();
        const model = new kbrsModel(repository);
        let kbrs = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            kbrs
        });  
    }
};

module.exports = controller; 
