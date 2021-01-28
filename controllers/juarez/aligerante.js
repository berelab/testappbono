'use strict'

import {message, city, base0, auditoria_sol, dias, factor_dias_laborados, desperdicio, asistencia, horas_por_turno, $_extra_m3, m3_cortados, colaboradores, equipo} from '../../models/juarez/aligerante';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message: message,
            city: city,
            base0,
            auditoria_sol,
            dias,
            factor_dias_laborados,
            colaboradores,
            m3_cortados,
            equipo
        });
    },
    
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = equipo[0].horas_extra_dobles;
        let he_triples= equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (asistencia + (total_horas_extra / horas_por_turno)); 

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
            desperdicio
        );

        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;   
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;
        let percepcion_total = calc.percepcionTotal;
        let bono_total = calc.bonoTotal
        

        return res.status(200).send({
            nombre: equipo[0].nombre,
            depto: message,
            day: weekdayName,
            meta_semana: base0,
            dias_laborados: dias,            
            progress: progress,
            m3_persona: m3_persona,
            bono_persona: bono_total,
            bono_depto: percepcion_total,
            $_extra_m3: $_extra_m3,
            asistencia: sumatoria_asistencia[0], 
            datos_extra: {
                m3_persona_dia: daily_prod
            }
            
        });
    }

};

module.exports = controller; 
