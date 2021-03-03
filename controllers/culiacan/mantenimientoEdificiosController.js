'use strict'

import {message, city, semana, encargado, revisa, dias_sucios, dias, factor_dias_laborados, horas_por_turno, asistencia_total, $_extra_m3, colaboradores, actividades, equipo } from '../../models/culiacan/mantenimientoEdificiosModel';
import mainCalcs from '../MainCalcs';
import att from '../Attendance';

const controller ={
    home: (req,res) =>{
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
            semana, 
            encargado, 
            revisa, 
            dias_sucios, 
            dias, 
            factor_dias_laborados, 
            horas_por_turno,
            asistencia_total, 
            $_extra_m3, 
            colaboradores, 
            actividades, 
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
        
        let len =  actividades.length;
        let sumatoria_porcentajes=0;

        for(var i =0; i<len; i++){
            sumatoria_porcentajes += actividades[i].porc_cumplimiento
        }

        let porc_actividades = (sumatoria_porcentajes / len)/100;

        const calc = new mainCalcs(
            dias, 
            porc_actividades, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            porc_actividades,//base 
            $_extra_m3, 
            dias_sucios, 
            factor_dias_laborados,
            message,
            city,
            null,
            null,
            null,
            null,
            null,
            horas_por_turno,
        );
        
        
        let sumatoria_asistencia = calc.totalAsistencia;
       
        let percepcion_total = calc.percepcionTotal3;
        
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
                
                    city: city,
                    nombre: equipo[i].nombre,
                    depto: message,
                    day: weekdayName,
                    dias_laborados: dias,      
                    bono_depto: percepcion_total,
                    
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i],
                    
                    $_extra_m3: $_extra_m3,     
                    asistencia: sumatoria_asistencia[i],
                });
               
            }
            
        
        }else{
            return res.status(200).send({
                porc_actividades,
                depto: message,
                encargado: encargado,
                revisa: revisa,
                semana: semana,
                day: weekdayName,
                dias_laborados: dias,
                $_extra_m3: $_extra_m3,            
                bono_depto: percepcion_total,
                
                pago_persona: pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
                bono_total: bono_total,
                
                asistencia: sumatoria_asistencia, 
                equipo,
                datos_extra: {
                    actividades: actividades
                    },

            });
        }
        
    }


};
module.exports = controller; 