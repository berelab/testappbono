'use strict'

import mcsframeModel from '../../models/juarez/mcsframe';
import mySqlMcsframeRepository from '../../infrastructure/juarez/McsframeRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.execute(); 

		return res.status(200).send({
            message: mcsframe.message,
            city: mcsframe.city,
            base0: mcsframe.base0,
            dias_sucios: mcsframe.auditoria_sol,
            $_extra_m3: mcsframe.$_extra_m3,
            dias: mcsframe.dias,
            factor_dias_laborados: mcsframe.factor_dias_laborados,
            horas_por_turno: mcsframe.horas_por_turno,
            colaboradores: mcsframe.colaboradores,
            m3_cortados: mcsframe.m3_cortados,
            equipo: mcsframe.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = mcsframe.equipo[0].horas_extra_dobles;
        let he_triples= mcsframe.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (mcsframe.asistencia + (total_horas_extra / mcsframe.horas_por_turno)); 

        const calc = new mainCalcs(
            mcsframe.dias, 
            mcsframe.m3_cortados, 
            mcsframe.colaboradores, 
            asistencia_total, 
            weekdayName, 
            mcsframe.equipo, 
            mcsframe.base0, 
            mcsframe.$_extra_m3, 
            mcsframe.auditoria_sol, 
            mcsframe.factor_dias_laborados,
            mcsframe.message,
            mcsframe.city
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

            let len = mcsframe.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: mcsframe.equipo[i].nombre,
                    depto: mcsframe.message,
                    day: weekdayName,
                    meta_semana: mcsframe.base0,
                    dias_laborados: mcsframe.base0, 
                    $_extra_m3: mcsframe.$_extra_m3,       
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
               
                depto: mcsframe.message,
                day: weekdayName,
                meta_semana: mcsframe.base0,
                dias_laborados: mcsframe.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: mcsframe.$_extra_m3,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: mcsframe.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            mcsframe
        });  
    }
};

module.exports = controller; 
