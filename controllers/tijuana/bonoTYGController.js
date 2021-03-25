'use strict'

import bonoTYGModel from '../../models/tijuana/bonoTYGModel';
import bonoTYGSQL from '../../infrastructure/tijuana/bonotygRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {	
    home: async(req, res) => {
        const repository = new bonoTYGSQL();
        const model = new bonoTYGModel(repository);
        let bonotyg = await model.execute(); 
        const cd =  new convertData(bonotyg.equipo, bonotyg.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: bonotyg.message,
            base0: bonotyg.base0,
            dias_sucios: bonotyg.dias_sucios,
            $_extra_m3: bonotyg.$_extra_m3,                   
            dias: bonotyg.dias,
            factor_dias_laborados: bonotyg.factor_dias_laborados,
            m3_desplazados: bonotyg.m3_desplazados,
            asistencia: bonotyg.team_asis,
            equipo_convertido: equipo 
        });
    },
    calculator: async(req, res)=>{
        const repository = new bonoTYGSQL();
        const model = new bonoTYGModel(repository);
        let bonotyg = await model.execute(); 
        const cd =  new convertData(bonotyg.equipo, bonotyg.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, bonotyg.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];  

        const calc = new mainCalcs(
            bonotyg.dias, 
            bonotyg.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            bonotyg.base0, 
            bonotyg.$_extra_m3, 
            bonotyg.dias_sucios, 
            bonotyg.factor_dias_laborados,
            bonotyg.message,
            bonotyg.city,
            bonotyg.amp,
            bonotyg.epp
        );
       
        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let bultos_dia = calc.m3Persona;
        let percepcion_total = calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;   
        let bono_productividad = calc.bonoProductividad;  
        let bono_metas = calc.pc_metas;     

        if(req.params.index){
            let codigo = parseInt(req.params.index); 
            let len = equipo.length;
            let i = 'no encontrado';

            for(var a=0; a<len; a++){
                equipo[a].num == codigo?  i = a: i
            }

            if(i =='no encontrado'){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({             
                    nombre: equipo[i].nombre,
                    code: equipo[i].num,
                    depto: bonotyg.message,
                    day: weekdayName,
                    meta_semana: bonotyg.base0,
                    dias_laborados: bonotyg.dias, 
                    $_extra_m3: bonotyg.$_extra_m3,       
                    progress: progress,
                    m3_persona: bultos_dia,
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
                depto: bonotyg.message,
                day: weekdayName,
                meta_semana: bonotyg.base0,
                dias_laborados: bonotyg.dias,
                $_extra_m3: bonotyg.$_extra_m3,
                progress: progress,
                m3_persona: bultos_dia,
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
                }
            });
        }  
    },
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new bonoTYGSQL();
        const model = new bonoTYGModel(repository);
        let bonotyg = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            bonotyg
        });  
    }

};
    
module.exports = controller; 
