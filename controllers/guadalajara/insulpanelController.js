'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import insulpanelModel from '../../models/guadalajara/insulpanelModel';
import insulpanelSQL from '../../infrastructure/guadalajara/insulpanelRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async (req, res) => {
        
        const repository = new insulpanelSQL();
        const model = new insulpanelModel(repository);
        let insulpanel = await model.execute(); 
        const cd =  new convertData(insulpanel.equipo, insulpanel.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: insulpanel.message,
            base0: insulpanel.base0,
            dias_sucios: insulpanel.dias_sucios,
            $_extra_m3: insulpanel.$_extra_m3,
            dias: insulpanel.dias,
            factor_dias_laborados: insulpanel.factor_dias_laborados,
            m2_producidos: insulpanel.m2_producidos,
            asistencia: insulpanel.team_asis,
            equipo_convertido: equipo  
        });
    },
    calculator: async(req, res)=>{
        const repository = new insulpanelSQL();
        const model = new insulpanelModel(repository);
        let insulpanel = await model.execute(); 
        const cd =  new convertData(insulpanel.equipo, insulpanel.team_asis);
        let equipo = cd.convert;
        
        const calcAtt = new att( equipo, insulpanel.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let bono = 495; //bono fijo

        const calc = new mainCalcs(
            insulpanel.dias, 
            insulpanel.m2_producidos, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            null, 
            null, 
            insulpanel.factor_dias_laborados,
            insulpanel.message,
            insulpanel.city,
            insulpanel.retardos_entrega,
            insulpanel.falla_calidad,
        );
            
        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;       
        let m3_persona = calc.m3Persona;        
        let sumatoria_asistencia = calc.totalAsistencia;

        //let bono_total = calc.bonoTotalColaborador;
        let bonoXdiasLaborados = calc.pagoTotal;
        let TotalbonoXdiasLaborados  = calc.pagoTotalSinPenalizacion;
        let bonoXpenalizacion= calc.bonoTotalConPenalizacionPorColaborador;
        let totalbonoXpenalizacion = calc.bonoTotalConPenalizacion;  
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
            let reporte = await model.saveWeek(equipo,semana, bonoXpenalizacion, insulpanel.message,  insulpanel.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  totalbonoXpenalizacion, insulpanel.message,  insulpanel.city); 
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
                    city: insulpanel.city,
                    depto: insulpanel.message,
                    day: weekdayName,
                    meta_semana: insulpanel.base0,
                    dias_laborados: insulpanel.dias, 
                    $_extra_m3: insulpanel.$_extra_m3,       
                    progress: progress, 
                    m3_persona: m3_persona,
                    bono_depto: bono,
                    pago_persona: bonoXdiasLaborados[i],
                    bono_persona: bonoXpenalizacion[i],
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
                depto: insulpanel.message,
                day: weekdayName,
                meta_semana: insulpanel.base0,
                dias_laborados: insulpanel.dias,
                $_extra_m3: insulpanel.$_extra_m3,
                progress: progress,
                m3_persona: m3_persona,
                bono_depto: bono,
                pago_persona: bonoXdiasLaborados, 
                pago_total: TotalbonoXdiasLaborados, 
                bono_persona: bonoXpenalizacion, 
                bono_total: totalbonoXpenalizacion,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia,
                datos_extra: {
                    m3_persona_dia: daily_prod,
                    retardos_entrega: insulpanel.retardos_entrega, 
                    falla_calidad: insulpanel.falla_calidad, 
                }
            });
        }                
    },

    bonosDepto:async (req, res) => {
        const repository = new insulpanelSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    }
};

module.exports = controller; 
