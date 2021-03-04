'use strict'

import corteModels from '../../models/lapaz/corteModels';
import CorteSQLRepo from '../../infrastructure/lapaz/CorteRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async (req, res) => {
        const repository = new CorteSQLRepo();
        const model = new corteModels(repository);

        let corte = await model.execute(); 

		return res.status(200).send({
            message: corte.message,
            base0: corte.base0,
            dias_sucios: corte.dias_sucios,
            $_extra_m3: corte.$_extra_m3,
            dias: corte.dias,
            factor_dias_laborados: corte.factor_dias_laborados,
            colaboradores:corte.colaboradores,
            m3_cortados: corte.m3_cortados,
            equipo: corte.equipo,
            asistencia: corte.team_asis
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new CorteSQLRepo();
        const model = new corteModels(repository);

        let corte = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];;

        const calc = new mainCalcs(
            corte.dias, 
            corte.m3_cortados, 
            corte.colaboradores, 
            corte.asistencia_total, 
            weekdayName, 
            corte.equipo, 
            corte.team_asis,
            corte.base0, 
            corte.$_extra_m3, 
            corte.dias_sucios,             
            corte.factor_dias_laborados,
            corte.message,
            corte.city,
            corte.amp
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

            let len = corte.equipo.length;
            let nombre = corte.equipo[i].nombre +' ' + corte.equipo[i].a_paterno

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: nombre,
                    depto: corte.message,
                    day: weekdayName,
                    meta_semana: corte.base0,
                    dias_laborados: corte.base0, 
                    $_extra_m3: corte.$_extra_m3,       
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
                depto: corte.message,
                day: weekdayName,
                meta_semana: corte.base0,
                dias_laborados: corte.dias,
                $_extra_m3: corte.$_extra_m3,
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, //bono antes del descuento por las faltas
                pago_total: pago_total, // sumatoria de pago_persona
                bono_persona: bono_total_colaborador, //bono despues del descuento por las faltas
                bono_total:bono_total,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia,  // asistencias de cada uno de los colab
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: corte.equipo // en vez del nombre se devuelve el equipo entero
                
            });
        }
        
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new CorteSQLRepo();
        const model = new corteModels(repository);
        let corte = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            corte
        });  
    }

};


module.exports = controller; 
