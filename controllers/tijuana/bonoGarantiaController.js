'use strict'

import {message, city,sipo,semana, dias, pago,  equipo} from '../../models/tijuana/bonoGarantiaModel';
import att from '../Attendance'
import mainCalcs from '../MainCalcs';

const controller = {
	
    home: (req, res) => {
        const calc = new att(
            equipo
        );
        let asistencia = calc.asistenciaPersona;
        let asistencia_total = calc.totalAsistencias;

		return res.status(200).send({
            message, 
            city,
            sipo, 
            semana,
            dias, 
            pago,  
            asistencia,
            asistencia_total,
            equipo,
        });
    },
    calculator: (req, res)=>{
        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
           
        const calcAtt = new att(
            equipo
        );
        let asistencia = calcAtt.asistenciaPersona;
        let asistencia_total = calcAtt.totalAsistencias;
        
        const calc = new mainCalcs(
            dias, 
            null, 
            asistencia, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            pago, 
            null, 
            null,
            message,
            city,
        );
        
        let bono_total_colaborador  = calc.montoAPagar;
        let bono_total = calc.montoTotal;

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
                    sipo: sipo,
                    semana: semana,
                    day: weekdayName,
                    dias_laborados: dias,       
                    bono_depto: pago,
                    bono_persona:bono_total_colaborador[i],  
                    asistencia: asistencia[i],

                });
               
            }
            
        
        }else{
            return res.status(200).send({
                
                depto: message,
                sipo: sipo,
                semana: semana,
                day: weekdayName,
                dias_laborados: dias,
                bono_depto: pago,
                bono_persona:bono_total_colaborador,
                bono_total: bono_total,
                asistencia: asistencia, 
                asistencia_total: asistencia_total,
                equipo
                
            });
        }
        


    }
    
};

 
module.exports = controller; 
