'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import oracleProduccionRepo from '../../infrastructure/cdmex/produccionRepository';
import corteModel from '../../models/cdmx/corteConstModel';
import CorteSQL from '../../infrastructure/cdmex/corteRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller ={
    home: async (req,res) =>{
        const repository = new CorteSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new corteModel(repository,produccionRepo);
        let corte = await model.execute(); 

        const cd =  new convertData(corte.equipo, corte.team_asis);
        let equipo = cd.convert;

        return res.status(200).send({
            message: corte.message,
            base0: corte.base0,
            dias_sucios: corte.dias_sucios,
            $_extra_m3: corte.$_extra_m3,
            dias: corte.dias,
            factor_dias_laborados: corte.factor_dias_laborados,
            amp: corte.amp, 
            num_quejas: corte.num_quejas, 
            m3_cortados: corte.m3_cortados,
            asistencia: corte.team_asis,
            equipo_convertido: equipo                               
        });
    },

    calculator: async (req, res)=>{
        const repository = new CorteSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new corteModel(repository,produccionRepo);
        let corte = await model.execute(); 

        const cd =  new convertData(corte.equipo, corte.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, corte.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            corte.dias, 
            corte.m3_cortados, 
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
            null,
            null,
            null,
            null,
            corte.horas_por_turno,
            corte.num_quejas
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let m3_persona = calc.m3Persona;
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, 'Corte', corte.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, 'Corte', corte.city); 
    
            let m3_cortados_totales = corte.m3_cortados.lunes +  corte.m3_cortados.martes + corte.m3_cortados.miercoles + corte.m3_cortados.jueves +corte.m3_cortados.viernes + corte.m3_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Corte', corte.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Corte', corte.city); 
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
                    depto: 'Corte',
                    day: weekdayName,
                    meta_semana: corte.base0,
                    dias_laborados: corte.dias, 
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
                depto: 'Corte',
                day: weekdayName,
                meta_semana: corte.base0,
                dias_laborados: corte.dias,
                $_extra_m3: corte.$_extra_m3,
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
        
        const repository = new CorteSQL();
        const model = new corteModel(repository);        
        let corte = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            corte
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new CorteSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new CorteSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
};
module.exports = controller; 