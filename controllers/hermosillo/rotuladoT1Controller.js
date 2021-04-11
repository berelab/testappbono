'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import rotuladoModel from '../../models/hermosillo/rotuladoT1Model';
import rotuladoSQL from '../../infrastructure/hermosillo/rotuladoRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';
import calcsN from  '../calcsN';

const controller = {	
	home: async(req, res) => {
        const repository = new rotuladoSQL();
        const model = new rotuladoModel(repository);
        let rotulado = await model.execute(); 
        const cd =  new convertData(rotulado.equipo, rotulado.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: rotulado.message, 
            city: rotulado.city, 
            base0: rotulado.base0, 
            dias_sucios: rotulado.dias_sucios, 
            $_extra_m3: rotulado.$_extra_m3, 
            dias: rotulado.dias, 
            factor_dias_laborados: rotulado.factor_dias_laborados,  
            amp: rotulado.amp,           
            produccion: rotulado.produccion, 
            asistencia: rotulado.team_asis,
            equipo_convertido: equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new rotuladoSQL();
        const model = new rotuladoModel(repository);
        let rotulado = await model.execute(); 
        const cd =  new convertData(rotulado.equipo, rotulado.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att(equipo, rotulado.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            rotulado.dias, 
            rotulado.produccion, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            rotulado.base0, 
            rotulado.$_extra_m3, 
            rotulado.dias_sucios, 
            rotulado.factor_dias_laborados,
            rotulado.message,
            rotulado.city,
            rotulado.amp,
            null,
            null,
            null,
            null,
            rotulado.horas_por_turno,
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        
          /** calculos especificos */
        const calN = new calcsN(
            sumatoria_asistencia,
            rotulado.factor_dias_laborados,
            equipo,
            rotulado.dias,
            null,
            rotulado.horas_por_turno,
            rotulado.$_extra_m3,
            rotulado.produccion,
            rotulado.base0,
            rotulado.amp,
            rotulado.dias_sucios,
            null,
            null,
            rotulado.city,
            rotulado.message,
            colaboradores
        );

        //let m3_persona =  calN.m3CortadosPersona; 
        let m3cortados_persona = calc.m3Persona;
        let bono_depto = calN.percepcionTotalPorSemana;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total_sin_penalizacion = calc.pagoTotalSinPenalizacion;
        let bono_Total_con_penalizacion_por_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
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
            let reporte = await model.saveWeek(equipo,semana, bono_Total_con_penalizacion_por_colaborador, 'Rotulado', rotulado.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, m3cortados_persona, 'Rotulado', rotulado.city); 
    
            let m3_cortados_totales = rotulado.produccion.lunes +  rotulado.produccion.martes + rotulado.produccion.miercoles + rotulado.produccion.jueves + rotulado.produccion.viernes + rotulado.produccion.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,'Rotulado', rotulado.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,'Rotulado', rotulado.city); 
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
                    depto: 'Rotulado',
                    day: weekdayName,
                    meta_semana: rotulado.base0,
                    dias_laborados: rotulado.dias, 
                    $_extra_m3: rotulado.$_extra_m3,       
                    progress: progress,
                    m3_persona: m3cortados_persona,
                    bono_depto: bono_depto,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_Total_con_penalizacion_por_colaborador[i],
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
                depto: rotulado.message,
                day: weekdayName,
                meta_semana: rotulado.base0,
                dias_laborados: rotulado.dias,
                $_extra_m3: rotulado.$_extra_m3,
                progress: progress,
                m3_persona: m3cortados_persona,
                bono_depto: bono_depto,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total_sin_penalizacion, 
                bono_persona: bono_Total_con_penalizacion_por_colaborador, 
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
        
        const repository = new rotuladoSQL();
        const model = new rotuladoModel(repository);    
        let rotulado = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            rotulado
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new rotuladoSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new rotuladoSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
    
};

module.exports = controller; 
