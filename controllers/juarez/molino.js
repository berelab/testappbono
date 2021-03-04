'use strict'

import molinoModel from '../../models/juarez/molino';
import mySqlMolinoRepository from '../../infrastructure/juarez/MolinoRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlMolinoRepository();
        const model = new molinoModel(repository);
        let molino = await model.execute(); 

		return res.status(200).send({
            message: molino.message,
            city: molino.city,
            base0: molino.base0,
            dias_sucios: molino.auditoria_sol,
            $_extra_m3: molino.$_extra_m3,
            dias: molino.dias,
            factor_dias_laborados: molino.factor_dias_laborados,
            colaboradores: molino.colaboradores,
            kg_molidos: molino.kg_molidos,
            equipo: molino.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlMolinoRepository();
        const model = new molinoModel(repository);
        let molino = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = molino.equipo[0].horas_extra_dobles;
        let he_triples= molino.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (molino.asistencia + (total_horas_extra / 24)); 

        const calc = new mainCalcs(
            molino.dias, 
            molino.kg_molidos, 
            molino.colaboradores, 
            asistencia_total, 
            weekdayName, 
            molino.equipo, 
            molino.base0, 
            molino.$_extra_m3, 
            molino.auditoria_sol, 
            molino.factor_dias_laborados,
            molino.message,
            molino.city
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

            let len = molino.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: molino.equipo[i].nombre,
                    depto: molino.message,
                    day: weekdayName,
                    meta_semana: molino.base0,
                    dias_laborados: molino.base0, 
                    $_extra_m3: molino.$_extra_m3,       
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
               
                depto: molino.message,
                day: weekdayName,
                meta_semana: molino.base0,
                dias_laborados: molino.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: molino.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: molino.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;    
        
        const repository = new mySqlMolinoRepository();
        const model = new molinoModel(repository);
        let molino = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            molino
        });  
    }
};

module.exports = controller; 
