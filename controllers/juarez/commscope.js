'use strict'

import commscopeModel from '../../models/juarez/commscope';
import mySqlCommscopeRepository from '../../infrastructure/juarez/CommscopeRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlCommscopeRepository();
        const model = new commscopeModel(repository);
        let commscope = await model.execute(); 

		return res.status(200).send({
            message: commscope.message,
            city: commscope.city,
            base0: commscope.base0,
            dias_sucios: commscope.auditoria_sol,
            $_extra_m3: commscope.$_extra_m3,
            dias: commscope.dias,
            factor_dias_laborados: commscope.factor_dias_laborados,
            colaboradores: commscope.colaboradores,
            m3_cortados: commscope.m3_cortados,
            equipo: commscope.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlCommscopeRepository();
        const model = new commscopeModel(repository);
        let commscope = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = commscope.equipo[0].horas_extra_dobles;
        let he_triples= commscope.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (commscope.asistencia + (total_horas_extra / commscope.horas_por_turno)); 

        const calc = new mainCalcs(
            commscope.dias, 
            commscope.m3_cortados, 
            commscope.colaboradores, 
            asistencia_total, 
            weekdayName, 
            commscope.equipo, 
            null, // commscope.team_asis,
            commscope.base0, 
            commscope.$_extra_m3, 
            commscope.auditoria_sol, 
            commscope.factor_dias_laborados,
            commscope.message,
            commscope.city
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
        
        if(req.params.index){
            let i = parseInt(req.params.index); 

            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = commscope.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: commscope.equipo[i].nombre,
                    depto: commscope.message,
                    day: weekdayName,
                    meta_semana: commscope.base0,
                    dias_laborados: commscope.base0, 
                    $_extra_m3: commscope.$_extra_m3,       
                    progress: progress,
                    m3_persona: m3_persona,
                    bono_depto: percepcion_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    },
                    
                });
               
            }
        }else{
            return res.status(200).send({
               
                depto: commscope.message,
                day: weekdayName,
                meta_semana: commscope.base0,
                dias_laborados: commscope.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: commscope.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: commscope.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlCommscopeRepository();
        const model = new commscopeModel(repository);
        let commscope = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            commscope
        });  
    }
};

module.exports = controller; 
