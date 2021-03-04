'use strict'

import placaModel from '../../models/juarez/placa';
import mySqlPlacaRepository from '../../infrastructure/juarez/PlacaRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.execute(); 

		return res.status(200).send({
            message: placa.message,
            city: placa.city,
            base0: placa.base0,
            dias_sucios: placa.auditoria_sol,
            $_extra_m3: placa.$_extra_m3,
            dias: placa.dias,
            factor_dias_laborados: placa.factor_dias_laborados,
            colaboradores: placa.colaboradores,
            m3_cortados: placa.m3_cortados,
            equipo: placa.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = placa.equipo[0].horas_extra_dobles;
        let he_triples = placa.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (placa.asistencia + (total_horas_extra / placa.horas_por_turno)); 

        const calc = new mainCalcs(
            placa.dias, 
            placa.m3_cortados, 
            placa.colaboradores, 
            asistencia_total, 
            weekdayName, 
            placa.equipo, 
            placa.base0, 
            placa.$_extra_m3, 
            placa.auditoria_sol, 
            placa.factor_dias_laborados,
            placa.message,
            placa.city,
            placa.desperdicio
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

            let len = placa.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: placa.equipo[i].nombre,
                    depto: placa.message,
                    day: weekdayName,
                    meta_semana: placa.base0,
                    dias_laborados: placa.base0, 
                    $_extra_m3: placa.$_extra_m3,       
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
               
                depto: placa.message,
                day: weekdayName,
                meta_semana: placa.base0,
                dias_laborados: placa.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: placa.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: placa.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            placa
        });  
    }
};

module.exports = controller; 
