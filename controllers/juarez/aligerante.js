'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import aligeranteModel from '../../models/juarez/aligerante';
import SQLAligeranteRepository from '../../infrastructure/juarez/AligeranteRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {

        const repository = new SQLAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.execute(); 
        const cd =  new convertData(aligerante.equipo, aligerante.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: aligerante.message,
            base0: aligerante.base0,
            dias_sucios: aligerante.auditoria_sol,
            $_extra_m3: aligerante.$_extra_m3,
            dias: aligerante.dias,
            factor_dias_laborados: aligerante.factor_dias_laborados,
            m3_cortados: aligerante.m3_cortados,
            asistencia: aligerante.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.execute(); 
        const cd =  new convertData(aligerante.equipo, aligerante.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, aligerante.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let he_dobles = aligerante.horas_extra_dobles;
        let he_triples= aligerante.horas_extra_triples;

        let total_horas_extra = (he_dobles *2) + (he_triples*3);
        let asistencia_total = (asistencia + (total_horas_extra / aligerante.horas_por_turno)); 

        const calc = new mainCalcs(
            aligerante.dias, 
            aligerante.m3_cortados, 
            colaboradores,
            asistencia_total, 
            weekdayName, 
            equipo,
            aligerante.base0, 
            aligerante.$_extra_m3, 
            aligerante.auditoria_sol, 
            aligerante.factor_dias_laborados,
            aligerante.message,
            aligerante.city,
            aligerante.desperdicio
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
        /*pendiente activar
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, aligerante.message, aligerante.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, aligerante.message, aligerante.city); 
    
            let m3_cortados_totales = aligerante.m3_cortados.lunes +  aligerante.m3_cortados.martes + aligerante.m3_cortados.miercoles + aligerante.m3_cortados.jueves + aligerante.m3_cortados.viernes + aligerante.m3_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,aligerante.message, aligerante.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,aligerante.message, aligerante.city); 
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
                    depto: aligerante.message,
                    day: weekdayName,
                    meta_semana: aligerante.base0,
                    dias_laborados: aligerante.dias, 
                    $_extra_m3: aligerante.$_extra_m3,       
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
                depto: aligerante.message,
                day: weekdayName,
                meta_semana: aligerante.base0,
                dias_laborados: aligerante.dias, 
                $_extra_m3: aligerante.$_extra_m3,           
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
        
        const repository = new SQLAligeranteRepository();
        const model = new aligeranteModel(repository);
        let aligerante = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            aligerante
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new SQLAligeranteRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new SQLAligeranteRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }

};

module.exports = controller; 
