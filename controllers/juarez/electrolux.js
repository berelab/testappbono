'use strict'

import electroluxModel from '../../models/juarez/electrolux';
import mySqlElectroluxRepository from '../../infrastructure/juarez/ElectroluxRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlElectroluxRepository();
        const model = new electroluxModel(repository);
        let electrolux = await model.execute(); 

		return res.status(200).send({
            message: electrolux.message,
            city: electrolux.city,
            base0: electrolux.base0,
            $_extra_m3: electrolux.$_extra_m3,
            dias: electrolux.dias,
            factor_dias_laborados: electrolux.factor_dias_laborados,
            colaboradores: electrolux.colaboradores,
            produccion: electrolux.produccion,
            equipo: electrolux.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlElectroluxRepository();
        const model = new electroluxModel(repository);
        let electrolux = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let auditoria_sol = 0;
        let he_dobles = electrolux.equipo[0].horas_extra_dobles;

        let total_horas_extra = ((he_dobles *2) / 12);
        let asistencia_total = electrolux.asistencia + total_horas_extra; 

        const calc = new mainCalcs(
            electrolux.dias, 
            electrolux.produccion, 
            electrolux.colaboradores, 
            asistencia_total, 
            weekdayName, 
            electrolux.equipo, 
            null, // electrolux.team_asis,
            electrolux.base0, 
            electrolux.$_extra_m3, 
            auditoria_sol, 
            electrolux.factor_dias_laborados,
            electrolux.message,
            electrolux.city
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

        if(req.params.index){
            let i = parseInt(req.params.index); 

            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = electrolux.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: electrolux.equipo[i].nombre,
                    depto: electrolux.message,
                    day: weekdayName,
                    meta_semana: electrolux.base0,
                    dias_laborados: electrolux.base0, 
                    $_extra_m3: electrolux.$_extra_m3,       
                    progress: progress,
                    m3_persona: m3_persona,
                    bono_depto: percepcion_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: daily_prod
                    },
                    
                });
               
            }
        }else{
            return res.status(200).send({
               
                depto: electrolux.message,
                day: weekdayName,
                meta_semana: electrolux.base0,
                dias_laborados: electrolux.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: electrolux.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: electrolux.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlElectroluxRepository();
        const model = new electroluxModel(repository);
        let electrolux = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            electrolux
        });  
    }
};

module.exports = controller; 
