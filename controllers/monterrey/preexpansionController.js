'use strict'

import {message,city, amp, dias_sucios, dias, factor_dias_laborados,num_quejas_cliente, horas_por_turno, asistencia_total, areas,kg_preexpandidos,bono_area, colaboradores, equipo } from '../../models/monterrey/preexpansionModel';
import mainCalcs from '../MainCalcs';


const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message,
            city, 
            amp, 
            dias_sucios, 
            dias, 
            factor_dias_laborados, 
            num_quejas_cliente,
            horas_por_turno, 
            asistencia_total, 
            areas,
            kg_preexpandidos, 
            bono_area,
            colaboradores, 
            equipo
        });
    },
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
       
        let total_kg_prexp =0
        let len = kg_preexpandidos.length;
        for(var i=0; i<len; i++){
            total_kg_prexp+= kg_preexpandidos[i];
        }

        let pc=[];
        for(var i=0; i<len; i++){
            let total= kg_preexpandidos[i] / total_kg_prexp;
            pc.push(total);
        }

        let bono_a_pagar=[];
        for(var i=0; i<len; i++){
            let total= bono_area[i] * pc[i];
            bono_a_pagar.push(total);
        }

        let pc_a_pagar=[];
        for(var i=0; i<len; i++){
            let total= bono_a_pagar[i] * .8;
            pc_a_pagar.push(total);
        }

        const calc = new mainCalcs(
            dias,
            pc_a_pagar,
            colaboradores,
            asistencia_total,
            weekdayName,
            equipo,
            null,
            null,
            dias_sucios,
            factor_dias_laborados, 
            message,
            city,
            amp,
            num_quejas_cliente
        );

        
        let sumatoria_asistencia = calc.totalAsistencia;
        
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
                    dias_laborados: dias,       
                    bono_depto: percepcion_total,
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i], 
                    asistencia: sumatoria_asistencia[i],
                });
               
            }
        }else{
            return res.status(200).send({
                
                depto: message,
                day: weekdayName,
                dias_laborados: dias,       
                deptos: areas,
                bono_area: bono_area,   
                kg_preexpandidos: kg_preexpandidos,
                total_kg_preexpandidos: total_kg_prexp,
                pc: pc, 
                bono_a_pagar: bono_a_pagar,
                pc_a_pagar: pc_a_pagar,
                bono_depto: percepcion_total,
                pago_persona: pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
                bono_total: bono_total,
                asistencia: sumatoria_asistencia, 
                equipo: equipo
                
            });
        }
        


    }
    
   
    

};

module.exports = controller; 
