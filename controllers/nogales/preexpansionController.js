'use strict'

import {message, city, dias, equivalencia, aprove_perla_corte, aprove_perla_moldeo, quejas_clientes, areas, montos_recibidos_area, participacion, asistencia_total, colaboradores, equipo} from '../../models/nogales/preexpansionModel';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message, 
            city, 
            dias, 
            equivalencia,
            aprove_perla_corte, 
            aprove_perla_moldeo, 
            quejas_clientes,
            areas, 
            montos_recibidos_area, 
            participacion,
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
            equivalencia,
            message,
            city,
            null,
            null,
            null,
            null,
            null,
            null,
            quejas_clientes,
            null,
            montos_recibidos_area, 
            participacion,
            aprove_perla_corte, 
            aprove_perla_moldeo, 
        );
        
        
        let sumatoria_asistencia = calc.totalAsistencia;
        
        let asistencias_colaborador = calc.totalAsistencia;
        let monto_para_calidad_area = calc.montoCalidadArea;
        let total_monto_calidad = calc.totalMontoCalidad;
        let total_de_bono_calidad = calc.totalBonoCalidad;
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
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i]
    
                    
                });
               
            }
            
        
        }else{
            return res.status(200).send({
                ciudad: city,
                depto: message,
                day: weekdayName,
                asistencia:asistencias_colaborador,
                monto_ca:monto_para_calidad_area,
                total_montoc:total_monto_calidad,
                total_bonoc:total_de_bono_calidad,
                pago_persona:pago_colaboradores,
                pato_total: pago_total,
                bono_persona:bono_total_colaborador,
                bono_total:bono_total,
                equipo
                
            });
        }
    }

};

module.exports = controller; 
