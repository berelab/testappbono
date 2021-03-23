'use strict'

import moldeoModel from '../../models/nogales/moldeoModel';
import moldeoSQL from '../../infrastructure/nogales/moldeoRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {	
	home: async(req, res) => {
        const repository = new moldeoSQL();
        const model = new moldeoModel(repository);
        let moldeo = await model.execute(); 
        const cd =  new convertData(moldeo.equipo, moldeo.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: moldeo.message,
            base0: moldeo.base0,
            dias_sucios: moldeo.dias_sucios,
            $_extra_m3: moldeo.$_extra_m3,        
            dias: moldeo.dias,
            factor_dias_laborados: moldeo.factor_dias_laborados,
            bultos_fabricados: moldeo.bultos_fabricados,
            asistencia: moldeo.team_asis,
            equipo_convertido: equipo 
        });
    },
    calculator: async(req, res)=>{
        const repository = new moldeoSQL();
        const model = new moldeoModel(repository);
        let moldeo = await model.execute(); 
        const cd =  new convertData(moldeo.equipo, moldeo.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, moldeo.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        let total_turnos_extras =[];
        let len = moldeo.horas_extras_semana.length;

        for(var i =0; i<len; i++){
            let horas_por_turno = 1;
            var total = ((moldeo.horas_extras_semana[i].horas_extras.horas_extras_dobles*2) +  (moldeo.horas_extras_semana[i].horas_extras.horas_extras_triples*3))/horas_por_turno;
            total_turnos_extras.push(total);
        }
        let total_extras=0;

        for(var i=0; i<total_turnos_extras.length; i++){
            total_extras = total_extras + total_turnos_extras[i];
        }        
        let asistenciaTotal = asistencia_total + total_extras;

        const calc = new mainCalcs(
            moldeo.dias, 
            moldeo.bultos_fabricados, 
            colaboradores, 
            asistenciaTotal, 
            weekdayName, 
            equipo, 
            moldeo.base0, 
            moldeo.$_extra_m3, 
            null, 
            moldeo.factor_dias_laborados,
            moldeo.message,
            moldeo.city,
            moldeo.desperdicio,
            moldeo.orden_limpieza,
            null,
            null,
            moldeo.total_turnos_extras,
            moldeo.horas_por_turno,
            moldeo.num_quejas,
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
                    depto: moldeo.message,
                    day: weekdayName,
                    meta_semana: moldeo.base0,
                    dias_laborados: moldeo.dias, 
                    $_extra_m3: moldeo.$_extra_m3,       
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
                depto: moldeo.message,
                day: weekdayName,
                meta_semana: moldeo.base0,
                dias_laborados: moldeo.dias,
                $_extra_m3: moldeo.$_extra_m3,
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
        
        const repository = new moldeoSQL();
        const model = new moldeoModel(repository);
        let moldeo = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            moldeo
        });  
    }   

};

module.exports = controller; 
