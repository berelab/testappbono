'use strict'

import {message, city, base0, dias_sucios, blocks_fe, colaboradores,asistencia_total, amp, horas_por_turno, dias, factor_dias_laborados, $_extra_m3, m3_desplazados, equipo} from '../../models/merida/bloqueraModel';
import mainCalcs from '../MainCalcs';


const controller = {
	
    home: (req, res) => {
        let colaboradores = colaboradoresPorDia(equipo, factor_dias_laborados);
        let asistencia_total = asistenciaTotal(colaboradores);

		return res.status(200).send({
            message, 
            city, 
            base0, 
            dias_sucios, 
            blocks_fe,
            asistencia_total, 
            dias, 
            amp,
            horas_por_turno,
            factor_dias_laborados, 
            $_extra_m3, 
            colaboradores, 
            m3_desplazados, 
            equipo
        });
    },
    calculator: (req, res)=>{
        let colaboradores = colaboradoresPorDia(equipo, factor_dias_laborados);
        let asistencia_total = asistenciaTotal(colaboradores);

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        

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
            blocks_fe,
            null,
            null,
            null,
            horas_por_turno,
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

let colaboradoresPorDia = (equipo, factor_dias_laborados) =>{
    let len = equipo.length;
    let asistencia_total = [];
    let total_lunes=0;
    let total_martes=0;
    let total_miercoles=0;
    let total_jueves=0;
    let total_viernes=0;
    let total_sabado=0;
    //let total_domingo=0;  // solo deptos que incluyan domingo.
   
    for (var i = 0; i <len; ++i) {
         total_lunes = total_lunes + equipo[i].asistencia.lunes;
         total_martes = total_martes+ equipo[i].asistencia.martes;
         total_miercoles = total_miercoles + equipo[i].asistencia.miercoles;
         total_jueves  = total_jueves + equipo[i].asistencia.jueves;
         total_viernes  = total_viernes + equipo[i].asistencia.viernes;
         total_sabado  = total_sabado + equipo[i].asistencia.sabado;
         
    }

    /* Verificar. en algunos deptos no se necesita multiplicar la asistencia diaria (colaboradores por dia)
     * por el factor dias laborados
     */
    total_lunes = total_lunes * factor_dias_laborados;
    total_martes = total_martes* factor_dias_laborados;
    total_miercoles = total_miercoles * factor_dias_laborados;
    total_jueves  = total_jueves * factor_dias_laborados;
    total_viernes = total_viernes * factor_dias_laborados;
    total_sabado = total_sabado * factor_dias_laborados;
    

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

 let asistenciaTotal = (colaboradores) =>{
     //agregar al total colaboradores.domingo si existe.
     let total = colaboradores.lunes + colaboradores.martes + colaboradores.miercoles + colaboradores.jueves + colaboradores.viernes +colaboradores.sabado
     return total;
 }
 
module.exports = controller; 
