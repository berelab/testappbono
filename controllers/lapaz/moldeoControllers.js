'use strict'

import moldeoModels from '../../models/lapaz/moldeoModels';
import SQLMoldeoRepository from '../../infrastructure/lapaz/MoldeoRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new SQLMoldeoRepository();
        const model = new moldeoModels(repository);
        let moldeo = await model.execute(); 

		return res.status(200).send({
            message: moldeo.message,
            city: moldeo.city,
            base0: moldeo.base0,
            dias_sucios: moldeo.dias_sucios,
            $_extra_m3: moldeo.$_extra_m3,
            blocks_fuera_especificacion: moldeo.blocks_fuera_especificacion,
            indicador_combustible: moldeo.indicador_combustible,
            densidad: moldeo.densidad,
            dias: moldeo.dias,
            factor_dias_laborados: moldeo.factor_dias_laborados,
            horas_por_turno: moldeo.horas_por_turno,
            blocks_moldeados: moldeo.blocks_moldeados,
            colaboradores: moldeo.colaboradores,
            equipo: moldeo.equipo,
            asistencia: moldeo.team_asis
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLMoldeoRepository();
        const model = new moldeoModels(repository);
        let moldeo = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        let amp = 0;

        const calc = new mainCalcs(
            moldeo.dias, 
            moldeo.blocks_moldeados, 
            moldeo.colaboradores, 
            moldeo.dias, 
            weekdayName, 
            moldeo.equipo, 
            moldeo.team_asis,
            moldeo.base0, 
            moldeo.$_extra_m3, 
            moldeo.dias_sucios, 
            moldeo.factor_dias_laborados,
            moldeo.message,
            moldeo.city,
            amp,
            moldeo.blocks_fuera_especificacion,
            moldeo.densidad,
            moldeo.indicador_combustible
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let blocks_persona = calc.m3Persona;
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

            let len = moldeo.equipo.length;
            let name = moldeo.equipo[i].nombre +' ' + moldeo.equipo[i].a_paterno

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: name,
                    depto: moldeo.message,
                    day: weekdayName,
                    meta_semana: moldeo.base0,
                    dias_laborados: moldeo.dias, 
                    $_extra_m3: moldeo.$_extra_m3,       
                    progress: progress,
                    m3_persona: blocks_persona,
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
                depto: moldeo.message,
                day: weekdayName,
                meta_semana: moldeo.base0,
                dias_laborados: moldeo.dias,
                $_extra_m3: moldeo.$_extra_m3,
                progress: progress,
                m3_persona: blocks_persona,
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
                equipo: moldeo.equipo 
            });
        }
    },
    
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new SQLMoldeoRepository();
        const model = new moldeoModels(repository);
        let moldeo = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            moldeo
        });  
    }

};

module.exports = controller; 
