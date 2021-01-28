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
        let asistencia_total= asistencia(1);

        let total_base = pago_dia * asistencia_total;
        let bono = total_base * (condicion_auditoria + 1);


        return res.status(200).send({
            nombre: equipo[1].nombre,
            depto: message,
            meta_semana: 0,
            dias_laborados: dias_laborados,
            day: weekdayName,
            m3_persona: 0,
            bono_persona: bono,
            asistencia: asistencia_total, 
            datos_extra: {
                condicionante_auditoria: condicion_auditoria,
                total_base: total_base,
                pago_por_dia: pago_dia,
                asistencia_total: asistencia_total
            }
            
        });
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

let asistencia = (n) => {
    let total = equipo[n].asistencia.lunes + equipo[n].asistencia.martes  + equipo[n].asistencia.miercoles + equipo[n].asistencia.jueves + equipo[n].asistencia.viernes + equipo[n].asistencia.sabado ;
    return total;
}



module.exports = controller; 
