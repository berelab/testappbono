'use strict'

import {message, city, base0, dias_sucios, blocks_fuera_especificacion, indicador_combustible, densidad, dias, factor_dias_laborados, horas_por_turno, $_extra_m3, blocks_moldeados, colaboradores, equipo} from '../../models/lapaz/moldeoModels';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message,
            city,
            base0,
            dias_sucios,
            blocks_fuera_especificacion,
            indicador_combustible,
            densidad,
            dias,
            factor_dias_laborados,
            horas_por_turno,
            blocks_moldeados,
            colaboradores,            
            equipo
        });
    },
    
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        let amp = 0;

        const calc = new mainCalcs(
            dias, 
            blocks_moldeados, 
            colaboradores, 
            dias, 
            weekdayName, 
            equipo, 
            base0, 
            $_extra_m3, 
            dias_sucios, 
            factor_dias_laborados,
            message,
            city,
            amp,
            blocks_fuera_especificacion,
            densidad,
            indicador_combustible
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let blocks_persona = calc.m3Persona;
        let percepcion_total = calc.percepcionTotal;
        let bono_total = calc.bonoTotal    

        return res.status(200).send({
            nombre: equipo[0].nombre,
            depto: message,
            day: weekdayName,
            meta_semana: base0,
            dias_laborados: dias,
            $_extra_m3: $_extra_m3,            
            progress: progress,
            blocks_persona: blocks_persona,
            bono_persona: bono_total,
            bono_depto: percepcion_total,
            asistencia: sumatoria_asistencia[0], 
            datos_extra: {
                blocks_persona_dia: daily_prod
            }
            
        });
    }

};

module.exports = controller; 
