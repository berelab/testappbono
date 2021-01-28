'use strict'

import {message, base0, dias_sucios, dias, factor_dias_laborados, asistencia_total, $_extra_m3, m3_desplazados, colaboradores, equipo} from '../../models/lapaz/cedeiModels';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message: message,
            base0,
            dias_sucios,
            dias,
            factor_dias_laborados,
            asistencia_total,
            colaboradores,
            m3_desplazados,
            equipo
        });
    },
    
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            dias, 
            m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            base0, 
            $_extra_m3, 
            dias_sucios, 
            factor_dias_laborados,
            message
        );
    
        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;   
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;      
        let percepcion_total = calc.percepcionTotal;
        let bono_total = calc.bonoTotal;
       
        return res.status(200).send({
            nombre: equipo[0].nombre,
            depto: message,
            day: weekdayName,
            meta_semana: base0,
            dias_laborados: dias,
            $_extra_m3: $_extra_m3,
            progress: progress,
            m3_persona: m3_persona,
            bono_persona: bono_total,
            bono_depto: percepcion_total,
            asistencia: sumatoria_asistencia[0], 
            datos_extra: {
                m3_persona_dia: daily_prod
            }
            
        });
    }

};


module.exports = controller; 
