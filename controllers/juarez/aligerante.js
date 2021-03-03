'use strict'

import aligeranteModel from '../../models/juarez/aligerante';
import mySqlAligeranteRepository from '../../infrastructure/juarez/AligeranteRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.execute(); 

		return res.status(200).send({
            message: aligerante.message,
            city: aligerante.city,
            base0: aligerante.base0,
            dias_sucios: aligerante.auditoria_sol,
            $_extra_m3: aligerante.$_extra_m3,
            dias: aligerante.dias,
            factor_dias_laborados: aligerante.factor_dias_laborados,
            colaboradores: aligerante.colaboradores,
            m3_cortados: aligerante.m3_cortados,
            equipo: aligerante.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = aligerante.equipo[0].horas_extra_dobles;
        let he_triples= aligerante.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (aligerante.asistencia + (total_horas_extra / aligerante.horas_por_turno)); 

        const calc = new mainCalcs(
            aligerante.dias, 
            aligerante.m3_cortados, 
            aligerante.colaboradores, 
            asistencia_total, 
            weekdayName, 
            aligerante.equipo, 
            null, // aligerante.team_asis,
            aligerante.base0, 
            aligerante.$_extra_m3, 
            aligerante.auditoria_sol, 
            aligerante.factor_dias_laborados,
            aligerante.message,
            aligerante.city,
            aligerante.desperdicio
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

            let len = aligerante.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: aligerante.equipo[i].nombre,
                    depto: aligerante.message,
                    day: weekdayName,
                    meta_semana: aligerante.base0,
                    dias_laborados: aligerante.base0, 
                    $_extra_m3: aligerante.$_extra_m3,       
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
               
                depto: aligerante.message,
                day: weekdayName,
                meta_semana: aligerante.base0,
                dias_laborados: aligerante.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: aligerante.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: aligerante.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            aligerante
        });  
    }

};

module.exports = controller; 
