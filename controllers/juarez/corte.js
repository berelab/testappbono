'use strict'

import corteModel from '../../models/juarez/corte';
import mySqlCorteRepository from '../../infrastructure/juarez/CorteRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlCorteRepository();
        const model = new corteModel(repository);
        let corte = await model.execute(); 

		return res.status(200).send({
            message: corte.message,
            city: corte.city,
            base0: corte.base0,
            dias_sucios: corte.auditoria_sol,
            $_extra_m3: corte.$_extra_m3,
            dias: corte.dias,
            factor_dias_laborados: corte.factor_dias_laborados,
            colaboradores: corte.colaboradores,
            m3_cortados: corte.m3_cortados,
            equipo: corte.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlCorteRepository();
        const model = new corteModel(repository);
        let corte = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = corte.equipo[0].horas_extra_dobles;
        let he_triples = corte.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (corte.asistencia + (total_horas_extra / corte.horas_por_turno)); 

        const calc = new mainCalcs(
            corte.dias, 
            corte.m3_cortados, 
            corte.colaboradores, 
            asistencia_total, 
            weekdayName, 
            corte.equipo, 
            null, // corte.team_asis,
            corte.base0, 
            corte.$_extra_m3, 
            corte.auditoria_sol, 
            corte.factor_dias_laborados,
            corte.message,
            corte.city,
            corte.desperdicio
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

            let len = corte.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: corte.equipo[i].nombre,
                    depto: corte.message,
                    day: weekdayName,
                    meta_semana: corte.base0,
                    dias_laborados: corte.base0, 
                    $_extra_m3: corte.$_extra_m3,       
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
               
                depto: corte.message,
                day: weekdayName,
                meta_semana: corte.base0,
                dias_laborados: corte.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: corte.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: corte.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlCorteRepository();
        const model = new corteModel(repository);
        let corte = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            corte
        });  
    }
};

module.exports = controller; 
