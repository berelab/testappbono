'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import placaModel from '../../models/juarez/placa';
import SQLPlacaRepository from '../../infrastructure/juarez/PlacaRepository';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new SQLPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.execute(); 
        const cd =  new convertData(placa.equipo, placa.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: placa.message,
            base0: placa.base0,
            dias_sucios: placa.auditoria_sol,
            $_extra_m3: placa.$_extra_m3,
            dias: placa.dias,
            factor_dias_laborados: placa.factor_dias_laborados,
            m3_cortados: placa.m3_cortados,
            asistencia: placa.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new SQLPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.execute(); 
        const cd =  new convertData(placa.equipo, placa.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, placa.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let total_horas_extra = (placa.horas_extra_dobles * 2) + (placa.horas_extra_triples * 3);
        let asistencia_total = (asistencia + (total_horas_extra / placa.horas_por_turno)); 

        const calc = new mainCalcs(
            placa.dias, 
            placa.m3_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            placa.base0, 
            placa.$_extra_m3, 
            placa.auditoria_sol, 
            placa.factor_dias_laborados,
            placa.message,
            placa.city,
            placa.desperdicio
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
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, placa.message, placa.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3_persona, placa.message, placa.city); 
    
            let m3_cortados_totales = placa.m3_cortados.lunes +  placa.m3_cortados.martes + placa.m3_cortados.miercoles + placa.m3_cortados.jueves + placa.m3_cortados.viernes + placa.m3_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,placa.message, placa.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,placa.message, placa.city); 
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
                    depto: placa.message,
                    day: weekdayName,
                    meta_semana: placa.base0,
                    dias_laborados: placa.dias,
                    $_extra_m3: placa.$_extra_m3,       
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
                depto: placa.message,
                day: weekdayName,
                meta_semana: placa.base0,
                dias_laborados: placa.dias, 
                $_extra_m3: placa.$_extra_m3,           
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
        
        const repository = new SQLPlacaRepository();
        const model = new placaModel(repository);
        let placa = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            placa
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new SQLPlacaRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new SQLPlacaRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
};

module.exports = controller; 
