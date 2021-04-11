'use strict'

import traficoModel from '../../models/cancun/traficoModel';
import SQLTrafico from '../../infrastructure/cancun/traficoRepo';
import att from '../Attendance';
import convertData from '../ConvertData';

const controller = {
	
    home: async (req, res) => {
        const repository = new SQLTrafico();
        const model = new traficoModel(repository);
        let trafico = await model.execute(); 
        const cd =  new convertData(trafico.equipo, trafico.team_asis);
        let equipo = cd.convert;

      	return res.status(200).send({
            message: trafico.message,              
            semana: trafico.semana, 
            bonos_por_viaje: trafico.semana, 
            asistencia: moldeo.team_asis,
            equipo_convertido: equipo   
        });
    },
    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        let total_viajes =  total_viajes_colaborador(bonos_por_viaje, equipo);
        let total = totalViajes(total_viajes); 
        let bono_colaborador = bono_total_colaborador(bonos_por_viaje, equipo);
        let bono_total = bonoTotal(bono_colaborador); 
         
        
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
                    num: equipo[i].num,
                    depto: 'Tráfico',
                    day: weekdayName,
                    semana:semana,
                    bonos_por_viaje: bonos_por_viaje,
                    viajes: equipo[i].viajes,
                    total_por_viajes: total_viajes[i],
                    auditoria_vehiculo:  equipo[i].auditoria_vehiculo,
                    m3_desplazados: equipo[i].m3_desplazados,
                    rendimientos: equipo[i].rendimientos,
                    bono_persona:bono_colaborador[i],
                });               
            }
        }else{
            return res.status(200).send({
                
                depto: 'Tráfico',
                day: weekdayName,
                semana:semana,
                bonos_por_viaje: bonos_por_viaje, 
                total_por_viajes: total_viajes,
                total: total,
                bono_persona:bono_colaborador,
                bono_total: bono_total,
                equipo
                
            });
        }

    }

};

let total_viajes_colaborador = (bonos_por_viaje, equipo)=>{
    let total_viajes=[];
     let len = equipo.length;

    for(var i=0; i<len; i++){
        let total=0;
        total+= (equipo[i].viajes.cancun * bonos_por_viaje.cancun);
        total+= (equipo[i].viajes.playa_del_carmen * bonos_por_viaje.playa_del_carmen);
        total+= (equipo[i].viajes.tulum * bonos_por_viaje.tulum);
        total+= (equipo[i].viajes.chetumal * bonos_por_viaje.chetumal);
        total_viajes.push(total);
    }

    return total_viajes;
}

let totalViajes=(total_viajes) =>{
 let total =0;
    for(var i=0; i<total_viajes.length; i++){
        total+=total_viajes[i];
    }
     return total;
}

let bono_total_colaborador =(bonos_por_viaje, equipo)=>{
    let bonos=[];
    let len = equipo.length;
    let total_viajes =  total_viajes_colaborador(bonos_por_viaje, equipo);
    
    for(var i=0; i<len; i++){
        let auditoria_vehiculo = equipo[i].auditoria_vehiculo;
        let m3_desplazados = equipo[i].m3_desplazados;
        
        let pcaudvh =  total_viajes[i]*pc_aud_veh(auditoria_vehiculo);
        let bonom3desp = total_viajes[i]*pc_m3_desp(m3_desplazados);
        let pcrend = (equipo[i].rendimientos/100);

        let total = pcrend >0 && pcrend != null ?  (total_viajes[i]+pcaudvh+bonom3desp)*pcrend : total_viajes[i]+pcaudvh+bonom3desp ;

         total < 0 ? total = 0 : total; 

        bonos.push(total);
    }

   

    return bonos;
}

 let bonoTotal = (bono_colaborador) =>{
     let total =0;
    for(var i=0; i<bono_colaborador.length; i++){
        total+=bono_colaborador[i];
    }
     return total;
 }


let pc_aud_veh=(value)=>{
    if(value >=0 && value <40 ){
        return -.1
    }else  if(value >=40 && value <60){
        return -.05
    }else  if(value >=60 && value <70){
        return -.025
    }else  if(value >=70 && value <80){
        return 0
    }else  if(value >=80 && value <90){
        return .025
    }else  if(value >=90 && value <95){
        return .05
    }else  if(value >=95 && value <100){
        return .075
    }else  if(value >=100){
        return .1
    }else{
        return 0;
    }
}

let pc_m3_desp=(value)=>{
    if(value >=0 && value <50 ){
        return .0
    }else  if(value >=50 && value <100){
        return .02
    }else  if(value >=100 && value <150){
        return .05
     }else  if(value >=150 && value <200){
        return .1
     }else  if(value >=200 && value <250){
        return .15
     }else  if(value >=250 && value <300){
        return .16
     }else  if(value >=300 && value <350){
        return .2
     }else  if(value >=350 && value <400){
        return .22
     }else  if(value >=400 && value <450){
        return .25
     }else  if(value >=450 && value <500){
        return .26
     }else  if(value >=500 && value <550){
        return .30
     }else  if(value >=550 && value <600){
        return .35
     }else  if(value >=600){
        return .40
    }else{
        return 0;
    }
}
    
module.exports = controller; 
