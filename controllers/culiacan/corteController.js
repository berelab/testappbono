'use strict'

import corteModel from '../../models/culiacan/corteModel';
import SQLCorte from '../../infrastructure/culiacan/corteRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
    home: async(req, res) => {
        const repository = new SQLCorte();
        const model = new corteModel(repository);
        let corte = await model.execute(); 
        const cd =  new convertData(corte.equipo, corte.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: panel.message,
            base0: panel.base0,
            dias_sucios: panel.dias_sucios,
            dias: panel.dias,
            $_extra_m3: panel.$_extra_m3,
            factor_dias_laborados: panel.factor_dias_laborados,
            m3_desplazados: panel.m3_desplazados,
            asistencia: panel.team_asis,
            equipo_convertido: equipo                   
        });
    },
    calculator: async(req, res)=>{
        const repository = new SQLCorte();
        const model = new corteModel(repository);
        let corte = await model.execute(); 
        const cd =  new convertData(corte.equipo, corte.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, panel.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        // let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
                
        colaboradores.lunes = tiempo_extra.lunes >0 ? colaboradores.lunes +tiempo_extra.lunes : colaboradores.lunes
        colaboradores.martes = tiempo_extra.martes >0 ? colaboradores.martes +tiempo_extra.martes: colaboradores.martes
        colaboradores.miercoles =  tiempo_extra.miercoles >0 ?colaboradores.miercoles +tiempo_extra.miercoles: colaboradores.miercoles
        colaboradores.jueves = tiempo_extra.jueves>0 ? colaboradores.jueves +tiempo_extra.jueves: colaboradores.jueves
        colaboradores.viernes = tiempo_extra.viernes >0  ? colaboradores.viernes +tiempo_extra.viernes : colaboradores.viernes
        colaboradores.sabado = tiempo_extra.sabado >0 ? colaboradores.sabado +tiempo_extra.sabado :colaboradores.sabado

        let asistencia_total = colaboradores.lunes + colaboradores.martes + colaboradores.miercoles+colaboradores.jueves+colaboradores.viernes+colaboradores.sabado;

        const calc = new mainCalcs(
            corte.dias, 
            corte.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            corte.base0, 
            corte.$_extra_m3, 
            corte.dias_sucios, 
            corte.factor_dias_laborados,
            corte.message,
            corte.city,
            corte.amp,
            corte.seguridad_e_higiene,
            null,
            null,
            null,
            corte.horas_por_turno,
            corte.devoluciones
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
                    depto: panel.message,
                    day: weekdayName,
                    meta_semana: panel.base0,
                    dias_laborados: panel.dias, 
                    $_extra_m3: panel.$_extra_m3,       
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
                depto: panel.message,
                day: weekdayName,
                meta_semana: panel.base0,
                dias_laborados: panel.dias,
                $_extra_m3: panel.$_extra_m3,
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
        
    }

};

 
module.exports = controller; 
