'use strict'

import choferModels from '../../models/lapaz/choferlocalModels';
import mySqlChoferRepository from '../../infrastructure/lapaz/ChoferRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlChoferRepository();
        const model = new choferModels(repository);
        let chofer = await model.execute(); 

		return res.status(200).send({
            message: chofer.message,
            base0: chofer.base0,
            dias_sucios: chofer.dias_sucios,
            dias: chofer.dias,
            $_extra_m3: chofer.$_extra_m3,
            factor_dias_laborados: chofer.factor_dias_laborados,
            asistencia_total: chofer.asistencia_total,
            colaboradores: chofer.colaboradores,
            m3_desplazados: chofer.m3_desplazados,
            equipo: chofer.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlChoferRepository();
        const model = new choferModels(repository);
        let chofer = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            chofer.dias, 
            chofer.m3_desplazados, 
            chofer.colaboradores, 
            chofer.asistencia_total, 
            weekdayName, 
            chofer.equipo, 
            null, // chofer.team_asis,
            chofer.base0, 
            chofer.$_extra_m3, 
            chofer.dias_sucios, 
            chofer.factor_dias_laborados,
            chofer.message,
            chofer.city
        );
  
        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;  
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;
        let percepcion_total = calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;
        let bono_productividad = calc.bonoProductividad;  
        let bono_metas = calc.pc_metas;  

        if(req.params.index){
            let i = parseInt(req.params.index); 

            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = chofer.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: chofer.equipo[i].nombre,
                    depto: chofer.message,
                    day: weekdayName,
                    meta_semana: chofer.base0,
                    dias_laborados: chofer.base0, 
                    $_extra_m3: chofer.$_extra_m3,       
                    progress: progress,
                    m3_persona: m3_persona,
                    bono_depto: percepcion_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    },
                    
                });
               
            }
        }else{

            return res.status(200).send({
               
                depto: chofer.message,
                day: weekdayName,
                meta_semana: chofer.base0,
                dias_laborados: chofer.dias,
                $_extra_m3: chofer.$_extra_m3,
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: chofer.equipo 
            });
        }
       

       
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlChoferRepository();
        const model = new choferModels(repository);
        let chofer = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            chofer
        });  
    }

};

module.exports = controller; 
