'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import bloqueraModel from '../../models/tijuana/preexpYMoldeoModel';
import bloqueraSQL from '../../infrastructure/tijuana/bloqueraRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';
import oracleProduccionRepo from '../../infrastructure/tijuana/produccionRepository';

const controller = {	
    home: async(req, res) => {
        const repository = new bloqueraSQL();
        const produccionRepo = new oracleProduccionRepo();
        const model = new bloqueraModel(repository,produccionRepo);
        let bloquera = await model.execute(); 
        const cd =  new convertData(bloquera.equipo, bloquera.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: bloquera.message,
            base0: bloquera.base0,
            dias_sucios: bloquera.dias_sucios,
            $_extra_m3: bloquera.$_extra_m3,
            blocks_fuera_especificacion: bloquera.blocks_fe,           
            dias: bloquera.dias,
            amp: bloquera.amp,
            factor_dias_laborados: bloquera.factor_dias_laborados,
            m3_desplazados: bloquera.m3_desplazados,
            asistencia: bloquera.team_asis,
            equipo_convertido: equipo 
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
            bloquera.m3_desplazados, 
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
            bloquera.blocks_fe,
            null,
            null,
            null,
            bloquera.horas_por_turno,
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, 'Bloquera', bloquera.city); 
            let produccionColab = await model.saveProdColab(equipo,semana,bultos_dia, 'Bloquera', bloquera.city); 
    
            let m3_cortados_totales = bloquera.m3_desplazados.lunes +  bloquera.m3_desplazados.martes + bloquera.m3_desplazados.miercoles + bloquera.m3_desplazados.jueves + bloquera.m3_desplazados.viernes + bloquera.m3_desplazados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Bloquera', bloquera.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Bloquera', bloquera.city); 
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
                    depto: 'Bloquera',
                    day: weekdayName,
                    meta_semana: bloquera.base0,
                    dias_laborados: bloquera.dias, 
                    $_extra_m3: bloquera.$_extra_m3,       
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
                depto: 'Bloquera',
                day: weekdayName,
                meta_semana: bloquera.base0,
                dias_laborados: bloquera.dias,
                $_extra_m3: bloquera.$_extra_m3,
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
