'use strict'

import choferesModel from '../../models/juarez/choferes';
import mySqlChoferesRepository from '../../infrastructure/juarez/ChoferesRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlChoferesRepository();
        const model = new choferesModel(repository);
        let choferes = await model.execute(); 

		return res.status(200).send({
            message: choferes.message,
            city: choferes.city,
            base0: choferes.base0,
            dias_sucios: choferes.auditoria_sol,
            $_extra_m3: choferes.$_extra_m3,
            dias: choferes.dias,
            factor_dias_laborados: choferes.factor_dias_laborados,
            colaboradores: choferes.colaboradores,
            m3_desplazados: choferes.m3_desplazados,
            equipo: choferes.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlChoferesRepository();
        const model = new choferesModel(repository);
        let choferes = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            choferes.dias, 
            choferes.m3_desplazados, 
            choferes.colaboradores, 
            choferes.asistencia, 
            weekdayName, 
            choferes.equipo, 
            null, // choferes.team_asis,
            choferes.base0, 
            choferes.$_extra_m3, 
            choferes.auditoria_sol, 
            choferes.factor_dias_laborados,
            choferes.message,
            choferes.city
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

            let len = choferes.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: choferes.equipo[i].nombre,
                    depto: choferes.message,
                    day: weekdayName,
                    meta_semana: choferes.base0,
                    dias_laborados: choferes.base0, 
                    $_extra_m3: choferes.$_extra_m3,       
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
               
                depto: choferes.message,
                day: weekdayName,
                meta_semana: choferes.base0,
                dias_laborados: choferes.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: choferes.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: choferes.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlChoferesRepository();
        const model = new choferesModel(repository);
        let choferes = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            choferes
        });  
    }
};

module.exports = controller; 
