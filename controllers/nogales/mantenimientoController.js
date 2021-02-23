'use strict'

import {message, city, dias, areas , montos_recibidos_area, rendimiento_agua, rendimiento_combustible, rendimiento_electricidad, faltas_uso_epp, fugas_perla, fugas_vapor, fugas_aceite, fugas_aire, factor_dias_laborados, horas_por_turno, asistencia_total, colaboradores, equipo} from '../../models/nogales/mantenimientoModel'; 
import mainCalcs from '../MainCalcs';


const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message, 
            city, 
            dias, 
            areas , 
            montos_recibidos_area,
             rendimiento_agua, 
             rendimiento_combustible, 
             rendimiento_electricidad, 
             faltas_uso_epp, 
             fugas_perla, 
             fugas_vapor, 
             fugas_aceite, 
             fugas_aire, 
             horas_por_turno, 
             asistencia_total, 
             colaboradores, 
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
            null, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            null, 
            null, 
            factor_dias_laborados,
            message,
            city,
            null,
            null,
            null,
            null,
            null,
            horas_por_turno,
            null,
            null,
            montos_recibidos_area, 
            null,
            null, 
            null,
            rendimiento_agua, 
            rendimiento_combustible, 
            rendimiento_electricidad, 
            faltas_uso_epp, 
            fugas_perla, 
            fugas_vapor, 
            fugas_aceite, 
            fugas_aire,
        );
        
        
        let sumatoria_asistencia = calc.totalAsistencia;
        let asistencias_colaborador = calc.totalAsistencia;
        let total_mantenimiento = calc.totalMantenimiento
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
                    dias_laborados: dias,
                    asistencia: sumatoria_asistencia[i],
                    bono_depto: total_mantenimiento,
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i]
    
                    
                });
               
            }
            
        
        }else{
            return res.status(200).send({
               
                depto: message,
                day: weekdayName,
                asistencia:asistencias_colaborador,
                bono_depto: total_mantenimiento,
                pago_persona:pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
                bono_total:bono_total,
                equipo
                
            });
        }
    }

};

module.exports = controller; 
