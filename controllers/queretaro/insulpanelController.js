'use strict'

import {message, city, dias, asistencia_total, m2_producidos, retardos_entrega, falla_calidad, asistencias, equipo} from '../../models/queretaro/insulpanelModel'
import mainCalcs from '../MainCalcs';


const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message, 
            city, 
            dias, 
            asistencia_total, 
            m2_producidos, 
            retardos_entrega, 
            falla_calidad, 
            asistencias, 
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
            m2_producidos, 
            null, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            null, 
            null, 
            null,
            message,
            city,
            retardos_entrega,
            falla_calidad,
        );
        
    
        let bono_total = calc.bonoTotalColaborador;
        let bonoXdiasLaborados = calc.pagoTotal;
        let TotalbonoXdiasLaborados  = calc.pagoTotalSinPenalizacion;
        let bonoXpenalizacion= calc.bonoTotalConPenalizacionPorColaborador;
        let totalbonoXpenalizacion = calc.bonoTotalConPenalizacion;  

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
                    asistencias: equipo[i].asistencia,
                    npc: equipo[i].nivel_dPdC,
                    depto: message,
                    day: weekdayName,
                    bono: bono_total[i],
                    pago_persona: bonoXdiasLaborados[i],
                    bono_persona: bonoXpenalizacion[i]
                });
               
            }
            
        }else{
            return res.status(200).send({
               
                depto: message,
                day: weekdayName,
                asistencias: asistencia_total, 
                m2_producidos:m2_producidos, 
                retardos_entrega:retardos_entrega, 
                falla_calidad:falla_calidad, 
                asistencia_total:asistencias, 
                
                pago: bono_total,
                pago_persona: bonoXdiasLaborados,
                pago_total: TotalbonoXdiasLaborados,
                bono_persona: bonoXpenalizacion,
                bono_total: totalbonoXpenalizacion,
                equipo
                
            });
        }
        


    }
    
   
    

};

module.exports = controller; 
