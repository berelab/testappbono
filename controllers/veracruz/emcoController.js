'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import emcoModel from '../../models/veracruz/emcoModel';
import emcoSQL from '../../infrastructure/veracruz/emcoRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';
import oracleProduccionRepo from '../../infrastructure/veracruz/produccionRepository';

const controller = {
	
    home: async(req, res) => {
        const repository = new emcoSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new emcoModel(repository,produccionRepo);
        let emco = await model.execute(); 
        const cd =  new convertData(emco.equipo, emco.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: emco.message,
            base0: emco.base0,
            dias_sucios: emco.dias_sucios,
            $_extra_m3: emco.$_extra_m3,        
            dias: emco.dias,
            amp: emco.amp,
            factor_dias_laborados: emco.factor_dias_laborados,
            m3_desplazados: emco.m3_desplazados,
            asistencia: emco.team_asis,
            equipo_convertido: equipo                       
        });
    },
    calculator: async(req, res)=>{
        const repository = new emcoSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new emcoModel(repository,produccionRepo);
        let emco = await model.execute(); 
        const cd =  new convertData(emco.equipo, emco.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, emco.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];        

        const calc = new mainCalcs(
            emco.dias, 
            emco.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            emco.base0, 
            emco.$_extra_m3, 
            emco.dias_sucios, 
            emco.factor_dias_laborados,
            emco.message,
            emco.city,
            emco.amp,
            emco.rechazo_interno,
            null,
            null,
            null,
            emco.horas_por_turno,
            emco.num_quejas
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

        //generar reporte
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, emco.message, emco.city); 
            let produccionColab = await model.saveProdColab(equipo,semana,bultos_dia,emco.message, emco.city); 
    
            let m3_cortados_totales = emco.m3_desplazados.lunes +  emco.m3_desplazados.martes + emco.m3_desplazados.miercoles + emco.m3_desplazados.jueves + emco.m3_desplazados.viernes + emco.m3_desplazados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,emco.message, emco.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,emco.message, emco.city); 
        }

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
                    depto: 'Em Corte',
                    day: weekdayName,
                    meta_semana: emco.base0,
                    dias_laborados: emco.dias, 
                    $_extra_m3: emco.$_extra_m3,       
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
                depto: 'Em Corte',
                day: weekdayName,
                meta_semana: emco.base0,
                dias_laborados: emco.dias,
                $_extra_m3: emco.$_extra_m3,
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
        
        const repository = new emcoSQL();
        const model = new emcoModel(repository);
        let emco = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            emco
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new emcoSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new emcoSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
    
};
module.exports = controller; 
