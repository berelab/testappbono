'use strict'

import almacenModel from '../../models/juarez/almacen';
import mySqlAlmacenRepository from '../../infrastructure/juarez/AlmacenRepository';
import mainCalcs from '../MainCalcs';

const controller = {
	
	home: async(req, res) => {
        const repository = new mySqlAlmacenRepository();
        const model = new almacenModel(repository);
        let almacen = await model.execute(); 

		return res.status(200).send({
            message: almacen.message,
            city: almacen.city,
            base0: almacen.base0,
            dias_sucios: almacen.auditoria_sol,
            $_extra_m3: almacen.$_extra_m3,
            dias: almacen.dias,
            factor_dias_laborados: almacen.factor_dias_laborados,
            colaboradores: almacen.colaboradores,
            m3_desplazados: almacen.m3_desplazados,
            equipo: almacen.equipo
        });
    },
    
    calculator: async(req, res)=>{

        const repository = new mySqlAlmacenRepository();
        const model = new almacenModel(repository);
        let almacen = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = almacen.equipo[0].horas_extra_dobles;
        let he_triples= almacen.equipo[0].horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (almacen.asistencia + (total_horas_extra / 24)); 

        const calc = new mainCalcs(
            almacen.dias, 
            almacen.m3_desplazados, 
            almacen.colaboradores, 
            asistencia_total, 
            weekdayName, 
            almacen.equipo, 
            null, // almacen.team_asis,
            almacen.base0, 
            almacen.$_extra_m3, 
            almacen.auditoria_sol, 
            almacen.factor_dias_laborados,
            almacen.message,
            almacen.city
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

            let len = almacen.equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: almacen.equipo[i].nombre,
                    depto: almacen.message,
                    day: weekdayName,
                    meta_semana: almacen.base0,
                    dias_laborados: almacen.base0, 
                    $_extra_m3: almacen.$_extra_m3,       
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
               
                depto: almacen.message,
                day: weekdayName,
                meta_semana: almacen.base0,
                dias_laborados: almacen.dias,            
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: percepcion_total,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                $_extra_m3: almacen.$_extra_m3,
                bono_productividad: bono_productividad,
                asistencia: sumatoria_asistencia, 
                datos_extra: {
                    m3_persona_dia: daily_prod
                },
                equipo: almacen.equipo 
                
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new mySqlAlmacenRepository();
        const model = new almacenModel(repository);
        let almacen = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            almacen
        });  
    }

};

module.exports = controller; 
