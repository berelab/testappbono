'use strict'

import {message, city, base0, auditoria_sol,num_quejas_cliente, rechazo_interno,dias, desperdicio, factor_dias_laborados,horas_por_turno,asistencia_total,$_extra_m3,tiempo_extra,colaboradores,m3_cortados,equipo} from '../../models/nogales/corteModels';
import mainCalcs from '../mainCalcs';
import calcsN from  './calcsN';



const controller = {
   

	home: (req, res) => {
		return res.status(200).send({
            message: message,
            city: city,
            lenght,
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
            tiempo_extra,
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
            amp
        );

        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;       
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;

        let asistencias = sumatoria_asistencia;
        const calN = new calcsN(
            asistencias,
            factor_dias_laborados,
            equipo,
            dias,
            tiempo_extra,
            horas_por_turno
            );
        
        let asistencia_diaria = calN.asistencia;
        let asistencia_por_factor = calN.asistenciaFactor;
        let asistencia_mas_tiempo_extra = calN.asistenciaMasTiempoExtra;


        
        let percepcion_total = calc.percepcionTotal;//
        let bono_total = calc.bonoTotal;
        



        if(req.params.index){
            let i = req.params.index;

            return res.status(200).send({
                asis,
                nombre: equipo[i].nombre,
                depto: message,
                day: weekdayName,
                meta_semana: base0,
                dias_laborados: dias,
                $_extra_m3: $_extra_m3,
                progress: progress,
                m3_persona: m3_persona,
                bono_persona: bono_total,
                bono_depto: percepcion_total,
                asistencia: sumatoria_asistencia[i],
                datos_extra: {
                    m3_persona_dia: daily_prod
                }
                
            });
            
        }else{
            return res.status(200).send({
                asistencia_diaria,
                asistencia_por_factor,
                asistencia_mas_tiempo_extra,
                depto: message,
                meta_semana: base0,
                dias_laborados: dias,
                $_extra_m3: $_extra_m3,
                m3_persona: m3_persona,
                bono_persona: bono_total,
                bono_depto: percepcion_total, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo
            });
        }

    }
    

};

module.exports = controller; 
