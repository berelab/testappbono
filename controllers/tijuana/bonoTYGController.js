'use strict'

import {message, city, semana, dias, base0, dias_sucios,m3_desplazados, amp,epp, asistencia_total, factor_dias_laborados, $_extra_m3, colaboradores, equipo} from '../../models/tijuana/bonoTYGModel';
import mainCalcs from '../MainCalcs';


const controller = {
	
    home: (req, res) => {
       
        let asistencia_total = _total_asistencias(equipo);
        let colaboradores = colaboradores_por_dia(equipo);

		return res.status(200).send({
            message, 
            city, 
            semana, 
            dias, 
            base0, 
            dias_sucios, 
            amp,
            epp,
            asistencia_total, 
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
       
        
        let asistencia_total = _total_asistencias(equipo);
        let colaboradores = colaboradores_por_dia(equipo);

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
            epp
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
                    semana:semana,
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
                semana:semana,
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


let _total_asistencias = (equipo) => {
   let  total =0;
    for(var i=0; i<equipo.length; i++){
        total = total + equipo[i].asistencia.lunes + equipo[i].asistencia.martes+equipo[i].asistencia.miercoles+equipo[i].asistencia.jueves+equipo[i].asistencia.viernes+equipo[i].asistencia.sabado;
    }
    return total;
}



let colaboradores_por_dia = (equipo) =>{
        let len = equipo.length;
        let asistencia_total = [];
        let total_lunes=0;
        let total_martes=0;
        let total_miercoles=0;
        let total_jueves=0;
        let total_viernes=0;
        let total_sabado=0;
     
       
        for (var i = 0; i <len; ++i) {
             total_lunes = total_lunes + (equipo[i].asistencia.lunes >0? equipo[i].asistencia.lunes:0);
             total_martes = total_martes+ (equipo[i].asistencia.martes >0? equipo[i].asistencia.martes:0);
             total_miercoles = total_miercoles + (equipo[i].asistencia.miercoles >0? equipo[i].asistencia.miercoles:0);
             total_jueves  = total_jueves + (equipo[i].asistencia.jueves >0? equipo[i].asistencia.jueves:0);
             total_viernes  = total_viernes +(equipo[i].asistencia.viernes >0? equipo[i].asistencia.viernes:0);
             total_sabado  = total_sabado + (equipo[i].asistencia.sabado >0? equipo[i].asistencia.sabado:0);
             
        }
 
        asistencia_total.push(total_lunes);
        asistencia_total.push(total_martes);
        asistencia_total.push(total_miercoles);
        asistencia_total.push(total_jueves);
        asistencia_total.push(total_viernes);
        asistencia_total.push(total_sabado);
       
        let colaboradores = {
            lunes: asistencia_total[0],
            martes: asistencia_total[1],
            miercoles: asistencia_total[2],
            jueves: asistencia_total[3],
            viernes: asistencia_total[4],
            sabado: asistencia_total[5],
        }

        return colaboradores;
     }
    
module.exports = controller; 
