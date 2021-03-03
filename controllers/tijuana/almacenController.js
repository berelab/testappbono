'use strict'

import {message, city, base0, dias_sucios, dias, factor_dias_laborados, asistencia_total, $_extra_m3, m3_cortados, colaboradores, equipo, horas_extras_semana} from '../../models/tijuana/almacenModel';
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
            base0, 
            dias_sucios, 
            dias, 
            factor_dias_laborados, 
            asistencia_total, 
            $_extra_m3, 
            m3_cortados, 
            colaboradores, 
            equipo, 
            horas_extras_semana
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
        
        let total_turnos_extras =[];
        let len = horas_extras_semana.length;

        for(var i =0; i<len; i++){
            var total = ((horas_extras_semana[i].horas_extras.horas_extras_dobles*2) +  (horas_extras_semana[i].horas_extras.horas_extras_triples*3))/24;
            total_turnos_extras.push(total);
        }
        colaboradores.lunes = colaboradores.lunes + total_turnos_extras[0];
        colaboradores.martes = colaboradores.martes + total_turnos_extras[1];
        colaboradores.miercoles = colaboradores.miercoles + total_turnos_extras[2];
        colaboradores.jueves = colaboradores.jueves + total_turnos_extras[3];
        colaboradores.viernes = colaboradores.viernes + total_turnos_extras[4];
        colaboradores.sabado = colaboradores.sabado + total_turnos_extras[5];

        let total_extras=0;

        for(var i=0; i<total_turnos_extras.length; i++){
            total_extras = total_extras + total_turnos_extras[i];
        }
        let asistenciaTotal = asistencia_total;
        asistenciaTotal = asistenciaTotal + total_extras;

        
        const calc = new mainCalcs(
            dias, 
            m3_cortados, 
            colaboradores, 
            asistenciaTotal, 
            weekdayName, 
            equipo, 
            base0, 
            $_extra_m3, 
            dias_sucios, 
            factor_dias_laborados,
            message,
            city,
            null,
            null,
            null,
            null,
            total_turnos_extras,
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
                
                    city: city,
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