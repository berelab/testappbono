'use strict'

import {message, city, base0, dias_sucios, dias, amp, factor_dias_laborados, horas_por_turno, asistencia_total, $_extra, produccion, colaboradores,equipo } from '../../models/hermosillo/rotuladoT1Model';
import mainCalcs from '../MainCalcs';
import calcsN from  '../calcsN';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message, 
            city, 
            base0, 
            dias_sucios, 
            dias,
            amp,
            factor_dias_laborados, 
            horas_por_turno, 
            asistencia_total, 
            $_extra, 
            produccion, 
            colaboradores,equipo 
        });
    },
    
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        

        const calc = new mainCalcs(
            dias, 
            produccion, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            base0, 
            $_extra, 
            dias_sucios, 
            factor_dias_laborados,
            message,
            city,
            amp,
            null,
            null,
            null,
            null,
            horas_por_turno,
        );


        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        
          /** calculos especificos */
          let asistencias = sumatoria_asistencia;
          const calN = new calcsN(
              asistencias,
              factor_dias_laborados,
              equipo,
              dias,
              null,
              horas_por_turno,
              $_extra,
              produccion,
              base0,
              amp,
              dias_sucios,
              null,
              null,
              city,
              message,
              colaboradores
              );
              
            
          let m3_persona =  calN.m3CortadosPersona;
          let bono_depto = calN.percepcionTotalPorSemana;
          let pago_colaboradores = calc.pagoTotal;
          let pago_total_sin_penalizacion = calc.pagoTotalSinPenalizacion;
          let bono_Total_con_penalizacion_por_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
          let bono_total= calc.bonoTotalConPenalizacion;
        
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
                    m3_persona: m3_persona[i],
                    bono_depto: bono_depto,
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_Total_con_penalizacion_por_colaborador [i],
                    $_extra_m3: $_extra,     
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
                $_extra_m3: $_extra,            
                progress: progress,
                m3_persona:m3_persona,
                bono_depto: bono_depto,
                pago_persona: pago_colaboradores,
                pago_total:pago_total_sin_penalizacion,
                bono_persona:bono_Total_con_penalizacion_por_colaborador,
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
