'use strict'

import {message, city, base0, auditoria_sol,num_quejas_cliente, rechazo_interno,dias, desperdicio, factor_dias_laborados,horas_por_turno,asistencia_total,$_extra_m3,colaboradores,m3_cortados,equipo} from '../../models/nogales/corteModel';
import mainCalcs from '../mainCalcs';
import calcsN from  '../calcsN';



const controller = {
   

	home: (req, res) => {
		return res.status(200).send({
            message: message,
            city: city,
            base0,
            auditoria_sol,
            num_quejas_cliente,
            rechazo_interno,
            dias,
            desperdicio,
            factor_dias_laborados,
            horas_por_turno,
            asistencia_total, 
            $_extra_m3,
            colaboradores,
            m3_cortados,
            equipo
        });
    },

    calculator: (req, res) =>{
        
        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];;
        let amp = desperdicio;
        const calc = new mainCalcs(
            dias, 
            m3_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            base0, 
            $_extra_m3, 
            auditoria_sol, 
            factor_dias_laborados,
            message,
            city,
            amp,
            null,
            null,
            null,
            null,
            horas_por_turno,
            num_quejas_cliente,
             rechazo_interno,
        );

        let daily_prod = calc.dailyProd;
        let m3cortados_persona = calc.m3Persona;
        let progress = calc.progress_bar;       
        let sumatoria_asistencia = calc.totalAsistencia;
        
        /** calculos especificos */
        let asistencias = sumatoria_asistencia;
        const calN = new calcsN(
            asistencias,
            factor_dias_laborados,
            equipo,
            dias,
            null,
            horas_por_turno,
            $_extra_m3,
            m3_cortados,
            base0,
            desperdicio,
            auditoria_sol,
            num_quejas_cliente,
            rechazo_interno
            );
        
     
        let pago_por_colaborador = calc.pagoTotal;
        let pago_total_sin_penalizacion = calc.pagoTotalSinPenalizacion;
        let bono_Total_con_penalizacion_por_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total= calc.bonoTotalConPenalizacion;
        let percepcion_total = calc.percepcionTotal;

        if(req.params.index){
            let i = parseInt(req.params.index); 
            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
                    
                    nombre: equipo[i].nombre,
                    depto: message,
                    day: weekdayName,
                    meta_semana: base0,
                    dias_laborados: dias,
                    progress: progress,
                    m3_persona: m3cortados_persona ,
                    bono_depto: percepcion_total,
                    pago_persona: pago_por_colaborador[i],
                    bono_persona:bono_Total_con_penalizacion_por_colaborador[i],
                    $_extra_m3: $_extra_m3,
                    asistencia: sumatoria_asistencia[i],
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    },

                });
               
            }
            
        
        }else{
            return res.status(200).send({
                
                depto: message,
                day: weekdayName,
                meta_semana: base0,
                dias_laborados: dias,
                $_extra_m3: $_extra_m3,            
                progress: progress,
                m3_persona: m3cortados_persona,
                bono_depto: percepcion_total,
                pago_persona: pago_por_colaborador,
                pago_total:pago_total_sin_penalizacion,
                bono_persona:bono_Total_con_penalizacion_por_colaborador,
                bono_total: bono_total,
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                asistencia: sumatoria_asistencia, 
                equipo
                
            });
        }

    }
    

};

module.exports = controller; 
