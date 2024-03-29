'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import oracleProduccionRepo from '../../infrastructure/cdmex/produccionRepository';
import bloqueraModel from '../../models/cdmx/preexpMoldeoModel';
import bloqueraSQL from '../../infrastructure/cdmex/bloqueraRepo';
import mainCalcs from '../MainCalcs';
 import convertData from '../ConvertData';
 import att from '../Attendance';

const controller = {

    home: async(req, res) =>{
        const repository = new bloqueraSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new bloqueraModel(repository,produccionRepo);
        let bloquera = await model.execute(); 

         const cd =  new convertData(bloquera.equipo, bloquera.team_asis);
         let equipo = cd.convert;

         const calcAtt = new att( equipo, bloquera.factor_dias_laborados);
         let colaboradores = calcAtt.colaboradoresPorDia;
         let asistencia_total = calcAtt.asistenciaTotal;

        return res.status(200).send({
            message: bloquera.message, 
            base0: bloquera.base0,
            dias_sucios: bloquera.dias_sucios,
            $_extra_m3: bloquera.$_extra_m3,
            dias: bloquera.dias,
            factor_dias_laborados: bloquera.factor_dias_laborados,
            amp: bloquera.amp, 
            num_quejas: bloquera.num_quejas, 
            blocks_cortados: bloquera.blocks_cortados,          
             equipo_convertido: equipo ,
             colaboradores: colaboradores,
             asistencia_total, asistencia_total    
        });
    },

    calculator: async(req, res)=>{
        const repository = new bloqueraSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new bloqueraModel(repository,produccionRepo);
        let bloquera = await model.execute(); 

         const cd =  new convertData(bloquera.equipo, bloquera.team_asis);
         let equipo = cd.convert;

         const calcAtt = new att( equipo, bloquera.factor_dias_laborados);
         let colaboradores = calcAtt.colaboradoresPorDia;
         let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            bloquera.dias, 
            bloquera.blocks_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            bloquera.base0, 
            bloquera.$_extra_m3, 
            bloquera.dias_sucios, 
            bloquera.factor_dias_laborados,
            bloquera.message,
            bloquera.city,
            bloquera.amp,
            null,
            null,
            null,
            null,
            bloquera.horas_por_turno,
            bloquera.num_quejas
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let blocks_persona = calc.m3Persona;
        let percepcion_total= calc.percepcionTotal;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;
        let bono_productividad = calc.bonoProductividad; 
        let bono_metas = calc.pc_metas; 
        
        //generar reporte
        //pendiente activar 
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, 'Bloquera', bloquera.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, blocks_persona, 'Bloquera', bloquera.city); 
    
            let m3_cortados_totales = bloquera.blocks_cortados.lunes +  bloquera.blocks_cortados.martes + bloquera.blocks_cortados.miercoles + bloquera.blocks_cortados.jueves + bloquera.blocks_cortados.viernes + bloquera.blocks_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Bloquera', bloquera.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Bloquera', bloquera.city); 
        }


        if(req.params.index){
            let codigo = parseInt(req.params.index); 
            let equipo = bloquera.equipo;

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
                    depto: 'Bloquera',
                    day: weekdayName,
                    meta_semana: bloquera.base0,
                    dias_laborados: bloquera.dias, 
                    $_extra_m3: bloquera.$_extra_m3,       
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
                depto: 'Bloquera',
                day: weekdayName,
                meta_semana: bloquera.base0,
                dias_laborados: bloquera.dias,
                $_extra_m3: bloquera.$_extra_m3,
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
                }
            });
        }      
    },
    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new bloqueraSQL();
        const model = new bloqueraModel(repository);    
        let bloquera = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            bloquera
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new bloqueraSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new bloqueraSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }

};

module.exports = controller; 