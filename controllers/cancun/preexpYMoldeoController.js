'use strict'

import {message, city, base0, dias_sucios, blocks_fe, colaboradores,asistencia_total, amp, horas_por_turno, dias, factor_dias_laborados, $_extra_m3, m3_desplazados, equipo} from '../../models/cancun/moldeoModel';
import mainCalcs from '../MainCalcs';
import att from '../Attendance';


const controller = {
	
    home: (req, res) => {
        const calcAtt = new att(
            equipo,
            factor_dias_laborados,
            city,
            null,
            message,
        );

        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

		return res.status(200).send({
            message, 
            city, 
            base0, 
            dias_sucios, 
            blocks_fe,
            asistencia_total, 
            dias, 
            amp,
            horas_por_turno,
            factor_dias_laborados, 
            $_extra_m3, 
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
        
        const calcAtt = new att(
            equipo,
            factor_dias_laborados,
            city,
            null,
            message,
        );

        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

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
            message,
            city,
            amp,
            blocks_fe,
            null,
            null,
            null,
            horas_por_turno,
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let bultos_dia = calc.m3Persona;
        let percepcion_total = calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;   
        
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
                    m3_persona: bultos_dia,
                    bono_depto: percepcion_total,
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i],
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
                m3_persona: bultos_dia,
                bono_depto: percepcion_total,
                pago_persona: pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
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
