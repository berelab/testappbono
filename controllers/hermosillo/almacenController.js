'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import produccionModel from '../../models/deptos/ProduccionDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import almacenModel from '../../models/hermosillo/almacenModel';
import AlmacenSQL from '../../infrastructure/hermosillo/almacenRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new AlmacenSQL();
        const model = new almacenModel(repository);
        let almacen = await model.execute(); 
        const cd =  new convertData(almacen.equipo, almacen.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: almacen.message,
            base0: almacen.base0,
            dias_sucios: almacen.dias_sucios,
            $_extra_m3: almacen.$_extra_m3,
            dias: almacen.dias,
            factor_dias_laborados: almacen.factor_dias_laborados,
            m3_cortados: almacen.m3_cortados,
            asistencia: almacen.team_asis,
            equipo_convertido: equipo,
            error_de_carga: almacen.error_de_carga
        });
    },
    
    calculator: async (req, res)=>{
        const repository = new AlmacenSQL();
        const model = new almacenModel(repository);
        let almacen = await model.execute(); 
        const cd =  new convertData(almacen.equipo, almacen.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, almacen.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        const calc = new mainCalcs(
            almacen.dias, 
            almacen.m3_cortados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            almacen.base0, 
            almacen.$_extra_m3, 
            almacen.dias_sucios, 
            almacen.factor_dias_laborados,
            almacen.message,
            almacen.city,
            null,
            null,
            null,
            null,
            null,
            almacen.horas_por_turno,
            almacen.error_de_carga
        );

        let daily_prod = calc.dailyProd;
        let sumatoria_asistencia = calc.totalAsistencia;
        let progress = calc.progress_bar;  
        let blocks_persona = calc.m3Persona;
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, almacen.message, almacen.city); 
            let produccionColab = await model.saveProdColab(equipo,semana, blocks_persona, almacen.message, almacen.city); 
    
            let m3_cortados_totales = almacen.m3_cortados.lunes +  almacen.m3_cortados.martes + almacen.m3_cortados.miercoles + almacen.m3_cortados.jueves + almacen.m3_cortados.viernes + almacen.m3_cortados.sabado
            let produccionDepto= await model.saveProdDepto(semana, m3_cortados_totales,almacen.message, almacen.city); 
            let bonosDepto = await model.saveBonosDepto(semana, bono_total,almacen.message, almacen.city); 
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
                    depto: 'Almacén',
                    day: weekdayName,
                    meta_semana: almacen.base0,
                    dias_laborados: almacen.dias, 
                    $_extra_m3: almacen.$_extra_m3,       
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
                depto: 'Almacén',
                day: weekdayName,
                meta_semana: almacen.base0,
                dias_laborados: almacen.dias,
                $_extra_m3: almacen.$_extra_m3,
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
        
        const repository = new AlmacenSQL();
        const model = new almacenModel(repository);        
        let almacen = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            almacen
        });  
    },

    bonosDepto:async (req, res) => {
        const repository = new AlmacenSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

    produccionDepto:async (req, res) => {
        const repository = new AlmacenSQL();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    }
};

module.exports = controller; 
