'use strict' 

import { message, city, base0, dias_sucios, amp, dias, factor_dias_laborados, asistencia_total, $_extra_m3, m3_cortados, colaboradores, equipo} from '../../models/monterrey/rotuladoHielera3Model';
import mainCalcs from '../MainCalcs';


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

                    $_extra_m3: $_extra_m3,     
                    asistencia: sumatoria_asistencia[i],
                });
               
            }
            
        
        }else{
            return res.status(200).send({
                city: city,
                depto: message,
                day: weekdayName,
                meta_semana: base0,
                dias_laborados: dias,
                $_extra_m3: $_extra_m3,               
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
