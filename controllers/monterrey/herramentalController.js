'use strict'

import {message, city, fugas, dias_sucios,asistencia_total, dias, factor_dias_laborados, colaboradores, rangos, pago_por_rango, frecuencias, equipo} from '../../models/monterrey/herramentalModel'; 
import mainCalcs from '../MainCalcs';


const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message, 
            city, 
            fugas, 
            dias_sucios,
            asistencia_total, 
            dias, 
            factor_dias_laborados, 
            colaboradores, 
            rangos, 
            pago_por_rango, 
            frecuencias, 
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
            frecuencias, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            rangos, 
            pago_por_rango, 
            dias_sucios, 
            factor_dias_laborados,
            message,
            city,
            fugas,
        );
        
        
        let sumatoria_asistencia = calc.totalAsistencia;
        let asistencias_colaborador = calc.totalAsistencia;
        let total_por_cambio_de_moldes = calc.TotalCambioMoldes;
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
                    rangos: rangos,
                    frecuencias: frecuencias,
                    pago_por_rango: pago_por_rango,
                    total_por_cambio_de_moldes: total_por_cambio_de_moldes,
                    asistencia: sumatoria_asistencia[i],
                    bono_depto: percepcion_total,
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i],
                });
               
            }
            
        
        }else{
            return res.status(200).send({
                ciudad: city,
                depto: message,
                day: weekdayName,
                dias_laborados: dias,
                rangos: rangos,
                frecuencias: frecuencias,
                pago_por_rango: pago_por_rango,
                total_por_cambio_de_moldes:total_por_cambio_de_moldes,
                bono_depto: percepcion_total,
                pago_persona: pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
                bono_total: bono_total,
                asistencia:asistencias_colaborador,
                equipo
                
            });
        }
    }

};

module.exports = controller; 
