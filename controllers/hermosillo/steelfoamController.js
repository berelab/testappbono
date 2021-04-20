'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import steelfoamModel from '../../models/hermosillo/steelfoamModel';
import steelfoamSQL from '../../infrastructure/hermosillo/steelfoamRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';
import oracleProduccionRepo from '../../infrastructure/hermosillo/produccionRepository';

const controller = {
	
	home: async(req, res) => {
        const repository = new steelfoamSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new steelfoamModel(repository,produccionRepo);
        let steelfoam = await model.execute(); 
        const cd =  new convertData(steelfoam.equipo, steelfoam.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: steelfoam.message, 
            city: steelfoam.city, 
            base0: steelfoam.base0, 
            dias_sucios: steelfoam.dias_sucios, 
            $_extra_m2: steelfoam.$_extra_m2, 
            dias: steelfoam.dias, 
            factor_dias_laborados: steelfoam.factor_dias_laborados,  
            amp: steelfoam.amp,           
            m2_cortados: steelfoam.m2_cortados, 
            asistencia: steelfoam.team_asis,
            equipo_convertido: equipo,  
        });
    },
    calculator: async(req, res)=>{
        const repository = new steelfoamSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new steelfoamModel(repository,produccionRepo);
        let steelfoam = await model.execute(); 
        const cd =  new convertData(steelfoam.equipo, steelfoam.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att(equipo, steelfoam.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            steelfoam.dias, 
            steelfoam.m2_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            steelfoam.base0, 
            steelfoam.$_extra_m2, 
            steelfoam.dias_sucios, 
            steelfoam.factor_dias_laborados,
            steelfoam.message,
            steelfoam.city,
            steelfoam.amp,
            null,
            null,
            null,
            null,
            steelfoam.horas_por_turno,
            null,
            steelfoam.rechazo_interno
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let m3cortados_persona = calc.m3Persona;
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, steelfoam.message, steelfoam.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3cortados_persona, steelfoam.message, steelfoam.city); 

            let m3_cortados_totales = steelfoam.m2_cortados.lunes +  steelfoam.m2_cortados.martes + steelfoam.m2_cortados.miercoles + steelfoam.m2_cortados.jueves + steelfoam.m2_cortados.viernes + steelfoam.m2_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,steelfoam.message, steelfoam.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,steelfoam.message, steelfoam.city); 
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
                    depto: steelfoam.message,
                    day: weekdayName,
                    meta_semana: steelfoam.base0,
                    dias_laborados: steelfoam.dias, 
                    $_extra_m3: steelfoam.$_extra_m2,       
                    progress: progress,
                    m3_persona: m3cortados_persona,
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
                depto: steelfoam.message,
                day: weekdayName,
                meta_semana: steelfoam.base0,
                dias_laborados: steelfoam.dias,
                $_extra_m3: steelfoam.$_extra_m2,
                progress: progress,
                m3_persona: m3cortados_persona,
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
        
        const repository = new steelfoamSQL();
        const model = new steelfoamModel(repository);     
        let steelfoam = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            steelfoam
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new steelfoamSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new steelfoamSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }

};

module.exports = controller; 
