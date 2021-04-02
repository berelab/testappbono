'use strict'

import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import mcsframeModel from '../../models/juarez/mcsframe';
import SQLMcsframeRepository from '../../infrastructure/juarez/McsframeRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new SQLMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.execute(); 
        const cd =  new convertData(mcsframe.equipo, mcsframe.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: mcsframe.message,
            base0: mcsframe.base0,
            dias_sucios: mcsframe.auditoria_sol,
            $_extra_m3: mcsframe.$_extra_m3,
            dias: mcsframe.dias,
            factor_dias_laborados: mcsframe.factor_dias_laborados,
            m3_cortados: mcsframe.m3_cortados,
            asistencia: mcsframe.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.execute(); 
        const cd =  new convertData(mcsframe.equipo, mcsframe.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, mcsframe.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let total_horas_extra = (mcsframe.horas_extra_dobles * 2) + (mcsframe.horas_extra_triples * 3);
        let asistencia_total = (asistencia + (total_horas_extra / mcsframe.horas_por_turno)); 

        const calc = new mainCalcs(
            mcsframe.dias, 
            mcsframe.m3_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            mcsframe.base0, 
            mcsframe.$_extra_m3, 
            mcsframe.auditoria_sol, 
            mcsframe.factor_dias_laborados,
            mcsframe.message,
            mcsframe.city
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
                
                
        //generar reporte
        /* pendiente activar
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, mcsframe.message, mcsframe.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona,  mcsframe.message, mcsframe.city); 

            let m3_cortados_totales = mcsframe.m3_cortados.lunes +  mcsframe.m3_cortados.martes + mcsframe.m3_cortados.miercoles + mcsframe.m3_cortados.jueves + mcsframe.m3_cortados.viernes + mcsframe.m3_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales, mcsframe.message, mcsframe.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total, mcsframe.message, mcsframe.city); 
        }*/


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
                    depto: mcsframe.message,
                    day: weekdayName,
                    meta_semana: mcsframe.base0,
                    dias_laborados: mcsframe.dias,
                    $_extra_m3: mcsframe.$_extra_m3,       
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
                    }                  
                });
               
            }
        }else{
            return res.status(200).send({              
                depto: mcsframe.message,
                day: weekdayName,
                meta_semana: mcsframe.base0,
                dias_laborados: mcsframe.dias, 
                $_extra_m3: mcsframe.$_extra_m3,           
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
                }                                                                                       
            });
        }
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new SQLMcsframeRepository();
        const model = new mcsframeModel(repository);
        let mcsframe = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            mcsframe
        });  
    }
};

module.exports = controller; 
