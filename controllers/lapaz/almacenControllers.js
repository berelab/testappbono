'use strict'

import almacenModels from '../../models/lapaz/almacenModels';
import SQLAlmacenRepo from '../../infrastructure/lapaz/AlmacenRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';

const controller = {
	
	home: async(req, res) => {

        const repository = new SQLAlmacenRepo();
        const model = new almacenModels(repository);
        let almacen = await model.execute(); 
        const cd =  new convertData(almacen.equipo, almacen.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: almacen.message,
            base0: almacen.base0,
            dias_sucios: almacen.dias_sucios,
            $_extra_m3: almacen.$_extra_m3,
            dias: almacen.dias,
            factor_dias_laborados: almacen.factor_dias_laborados,
            horas_por_turno: almacen.horas_por_turno,
            colaboradores: almacen.colaboradores,
            m3_desplazados: almacen.m3_desplazados,
            equipo: almacen.equipo,
            asistencia: almacen.team_asis,
            _equipo: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLAlmacenRepo();
        const model = new almacenModels(repository);
        let almacen = await model.execute(); 
        const cd =  new convertData(almacen.equipo, almacen.team_asis);
        let equipo = cd.convert;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = almacen.horas_extra_dobles;
        let he_triples= almacen.horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (almacen.asistencia + (total_horas_extra / almacen.horas_por_turno))*5; 


        const calc = new mainCalcs(
            almacen.dias, 
            almacen.m3_desplazados, 
            almacen.colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            almacen.base0, 
            almacen.$_extra_m3, 
            almacen.dias_sucios, 
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

            let len = almacen.equipo.length;
            let name = almacen.equipo[i].nombre +' ' + almacen.equipo[i].a_paterno + ' ' + almacen.equipo[i].a_materno
           
            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
             
                    nombre: name,
                    depto: almacen.message,
                    day: weekdayName,
                    meta_semana: almacen.base0,
                    dias_laborados: almacen.dias, 
                    $_extra_m3: almacen.$_extra_m3,       
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
                depto: almacen.message,
                day: weekdayName,
                meta_semana: almacen.base0,
                dias_laborados: almacen.dias, 
                $_extra_m3: almacen.$_extra_m3,           
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
                equipo: almacen.equipo 
                
            });
        }
       
    },
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;

        const repository = new SQLAlmacenRepo();
        const model = new almacenModels(repository);
        let almacen = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message: 'OK',
            almacen
        });  
    }
};

module.exports = controller; 
