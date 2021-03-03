'use strict' 

import { message, city, base0, dias_sucios, amp, dias, factor_dias_laborados, asistencia_total, $_extra_m3, m3_cortados, colaboradores, equipo} from '../../models/monterrey/rotuladoHielera3Model';
import mainCalcs from '../MainCalcs';
import calcsN from  '../calcsN';

const controller = {
	
	home: (req, res) => {

        let colaboradores = colaboradores_por_dia(equipo);

		return res.status(200).send({
            message, 
            city, 
            base0, 
            dias_sucios, 
            amp, 
            dias, 
            factor_dias_laborados, 
            asistencia_total, 
            $_extra_m3, 
            m3_cortados, 
            colaboradores, 
            equipo
        });
    },
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        let colaboradores = colaboradores_por_dia(equipo);

        const calc = new mainCalcs(
            dias, 
            m3_cortados, 
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
            amp
        );

        let sumatoria_asistencia = calc.totalAsistencia;
    
        const calN = new calcsN(
            sumatoria_asistencia,
            factor_dias_laborados,
            equipo,
            dias,
            null,
            null,
            $_extra_m3,
            m3_cortados,
            base0,
            amp,
            dias_sucios,
            null,
            null,
            city,
            message,
            colaboradores
            );

        //let total_produccion = calc.totalProduccion;
        let m3_persona = calN.m3CortadosPersona;
        let sub_total = calN.m3ExtraVSBaseO; 
        let total = calN.percepcionTotalM3Base;
        let percepcionTotalPorDia = calN.percepcionTotalPorDia;
        let percepcionTotalPorDiaIndividual = calN.percepcionTotalPorDiaIndividual;
        let percepcionTotalPorSemana = calN.percepcionTotalPorSemana;
        let percepcionTotalPorSemanaIndividual = calN.percepcionTotalPorSemanaIndividual;

        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;   

        let  m3_persona_total =0;
        for(var i=0; i<m3_persona.length; i++){
            m3_persona_total += m3_persona[i];
        }

        let m3_persona_dia;
        if(weekdayNumber ==0){ //domingo
            m3_persona_dia = m3_persona[6] //d
        }else if(weekdayNumber ==1){ //lunes
            m3_persona_dia = m3_persona[0] //l
        }else if(weekdayNumber ==2){
            m3_persona_dia = m3_persona[1]
        }else if(weekdayNumber ==3){
            m3_persona_dia = m3_persona[2]
        }else if(weekdayNumber ==4){
            m3_persona_dia = m3_persona[3]
        }else if(weekdayNumber ==5){
            m3_persona_dia = m3_persona[4]
        }else if(weekdayNumber ==6){
            m3_persona_dia = m3_persona[5]
        }

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
                 /** El bono_depto cambia dependiendo si rotulador es NO o SI */
                let rotulador = equipo[i].rotulador;
                let bono;
                if(rotulador =='NO' || rotulador =='no'){
                        bono =percepcionTotalPorSemanaIndividual;
                }else{
                        bono =percepcionTotalPorSemana;
                }

                return res.status(200).send({
                    
                    nombre: equipo[i].nombre,
                    rotulador: rotulador,
                    depto: message,
                    day: weekdayName,
                    meta_semana: base0,
                    dias_laborados: dias,  
                    m3_persona: m3_persona_total,  
                    bono_depto: bono,     
                    pago_persona: pago_colaboradores[i],
                    bono_persona:bono_total_colaborador[i],
                    $_extra_m3: $_extra_m3,     
                    asistencia: sumatoria_asistencia[i],
                    datos_extra: {
                        m3_persona_dia: m3_persona_dia
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
                m3_persona: m3_persona_total,  
                bono_depto_dia: percepcionTotalPorDia , 
                bono_depto: percepcionTotalPorSemana,
                bono_depto_dia_colaborador: percepcionTotalPorDiaIndividual,  
                bono_depto_individual: percepcionTotalPorSemanaIndividual,  
                pago_persona: pago_colaboradores,
                pago_total:pago_total,
                bono_persona:bono_total_colaborador,
                bono_total: bono_total,   
                datos_extra: {
                    m3_persona_dia: m3_persona_dia
                },   
                asistencia: sumatoria_asistencia, 
                equipo
                
            });
        }


    }
    
   
    

};


let colaboradores_por_dia = (equipo) =>{
    let total_colaboradores= [];
    let len = equipo.length;

    let total_lunes =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_lunes += equipo[n].asistencia.lunes/2 : total_lunes += equipo[n].asistencia.lunes; 
    }
    total_colaboradores.push(total_lunes);

    let total_martes =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_martes += equipo[n].asistencia.martes/2 : total_martes += equipo[n].asistencia.martes; 
    }
    total_colaboradores.push(total_martes);

    let total_miercoles =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_miercoles += equipo[n].asistencia.miercoles/2 : total_miercoles += equipo[n].asistencia.miercoles; 
    }
    total_colaboradores.push(total_miercoles);


    let total_jueves =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_jueves += equipo[n].asistencia.jueves/2 : total_jueves += equipo[n].asistencia.jueves; 
    }
    total_colaboradores.push(total_jueves);
    
    let total_viernes =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_viernes += equipo[n].asistencia.viernes/2 : total_viernes += equipo[n].asistencia.viernes; 
    }
    total_colaboradores.push(total_viernes);
    
    let total_sabado =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_sabado += equipo[n].asistencia.sabado/2 : total_lunes += equipo[n].asistencia.sabado; 
    }
    total_colaboradores.push(total_sabado);

    let total_domingo =0;
    for(var n =0; n< len; n++){
        equipo[n].rotulador =='NO' ? total_domingo += equipo[n].asistencia.domingo/2 : total_domingo += equipo[n].asistencia.domingo; 
    }
    total_colaboradores.push(total_domingo);


    return total_colaboradores;
}

module.exports = controller; 
