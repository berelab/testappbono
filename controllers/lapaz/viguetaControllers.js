'use strict'

import {message, dias_laborados, auditoria_sol, pago_dia, equipo} from '../../models/lapaz/viguetaModels';

const controller = {
	
	home: (req, res) => {
		return res.status(200).send({
            message: message,
            dias_laborados,
            auditoria_sol,
            pago_dia,
            equipo
        });
    },
    
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let condicion_auditoria = auditoria(auditoria_sol);
        let asistencia_persona = asistencias(equipo);
        let total_base = total_base_persona(asistencia_persona, pago_dia);
        let bono_total = bono_total_persona(total_base,condicion_auditoria);

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
                    meta_semana: 0,
                    dias_laborados: dias_laborados,
                    day: weekdayName,
                    m3_persona: 0,
                    asistencia: asistencia_persona[i],
                    total_base: total_base[i],
                    bono_persona:  bono_total[i],
                    datos_extra: {
                        condicionante_auditoria: condicion_auditoria,
                        pago_por_dia: pago_dia
                    },
                });
            }
        }else{
            return res.status(200).send({
                depto: message,
                meta_semana: 0,
                dias_laborados: dias_laborados,
                day: weekdayName,
                m3_persona: 0,
                asistencia: asistencia_persona,
                total_base: total_base,
                bono_persona:  bono_total,
                datos_extra: {
                    condicionante_auditoria: condicion_auditoria,
                    pago_por_dia: pago_dia
                },
                equipo: equipo
                
            });
           
        }

       
    }

};

let auditoria = (value) => {
    if(value >= 60 && value < 70){
        return -.04;
    }else if(value >= 70 && value < 80){
        return -.03;
    }else if(value >= 80 && value < 85){
        return -.02;
    }else if(value >= 85 && value < 90){
        return -0.01;
    }else if(value >= 90 && value < 95){
        return 0;
    }else if(value >= 95 && value < 100){
        return .025;
    }else if(value >= 100){
        return .05;
    }else{
        return 0;
    }
}


let asistencias = (equipo) =>{
    let asistencia_total= [];
    let len = equipo.length;

    for(var n =0; n< len; n++){
        let total = equipo[n].asistencia.lunes + equipo[n].asistencia.martes  + equipo[n].asistencia.miercoles + equipo[n].asistencia.jueves + equipo[n].asistencia.viernes + equipo[n].asistencia.sabado ;
        asistencia_total.push(total);
    }
    return asistencia_total;
}

let total_base_persona =(asistencia_persona, pago_dia) =>{
    let total_base= [];
    let len = asistencia_persona.length;

    for(var n =0; n< len; n++){
        let total = asistencia_persona[n] * pago_dia;
        total_base.push(total);
    }
    return total_base;
}

let bono_total_persona =(total_base, condicion_auditoria) =>{
    let bono_total= [];
    let len = total_base.length;

    for(var n =0; n< len; n++){
        let total = total_base[n] * (condicion_auditoria + 1);
        bono_total.push(total);
    }
    return bono_total;
}


module.exports = controller; 
