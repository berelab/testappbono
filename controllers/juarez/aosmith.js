'use strict'

import aosmithModel from '../../models/juarez/aosmith';
import mySqlAosmithRepository from '../../infrastructure/juarez/AosmithRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.execute(); 

		return res.status(200).send({
            message: aosmith.message,
            city: aosmith.city,
            base0: aosmith.base0,
            dias_sucios: aosmith.auditoria_sol,
            $_extra_m3: aosmith.$_extra_m3,
            dias: aosmith.dias,
            factor_dias_laborados: aosmith.factor_dias_laborados,
            colaboradores: aosmith.colaboradores,
            piezas_terminadas: aosmith.piezas_terminadas,
            equipo: aosmith.equipo
        });
    },
    
    calculator: async(req, res)=>{

        const repository = new mySqlAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let total_horas_extra = (aosmith.he_dobles *2) + (aosmith.he_triples*3);
        let asistencia_total = (aosmith.asistencia + (total_horas_extra / 24)); 

        const calc = new mainCalcs(
            aosmith.dias, 
            aosmith.piezas_terminadas, 
            aosmith.colaboradores, 
            asistencia_total, 
            weekdayName, 
            aosmith.equipo, 
            aosmith.base0, 
            aosmith.$_extra_m3, 
            aosmith.auditoria_sol, 
            aosmith.factor_dias_laborados,
            aosmith.message,
            aosmith.city
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

            let len = aosmith.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: aosmith.equipo[i].nombre,
                    depto: aosmith.message,
                    day: weekdayName,
                    meta_semana: aosmith.base0,
                    dias_laborados: aosmith.base0, 
                    $_extra_m3: aosmith.$_extra_m3,       
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
               
                depto: aosmith.message,
                day: weekdayName,
                meta_semana: aosmith.base0,
                dias_laborados: aosmith.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: aosmith.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: aosmith.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;    
        
        const repository = new mySqlAosmithRepository();
        const model = new aosmithModel(repository);
        let aosmith = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            aosmith
        });  
    }
};

module.exports = controller; 
