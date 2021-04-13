'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import preexpansionModel from '../../models/nogales/preexpansionModel';
import preexpansionSQL from '../../infrastructure/nogales/preexpansionRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {	
	home: async(req, res) => { 
        const repository = new preexpansionSQL();
        const model = new preexpansionModel(repository);
        let preexpansion = await model.execute(); 
        const cd =  new convertData(preexpansion.equipo, preexpansion.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: preexpansion.message,
            base0: preexpansion.base0,
            dias_sucios: preexpansion.dias_sucios,
            $_extra_m3: preexpansion.$_extra_m3,
            blocks_fuera_especificacion: preexpansion.blocks_fuera_especificacion,           
            dias: preexpansion.dias,
            factor_dias_laborados: preexpansion.equivalencia,
            aprove_perla_corte: preexpansion.aprove_perla_corte,
            aprove_perla_moldeo: preexpansion.aprove_perla_moldeo,
            quejas_clientes: preexpansion.quejas_clientes,
            areas: preexpansion.areas,
            montos_recibidos_area: preexpansion.montos_recibidos_area,
            participacion: preexpansion.participacion,
            asistencia: preexpansion.team_asis,
            equipo_convertido: equipo 
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new preexpansionSQL();
        const model = new preexpansionModel(repository);
        let preexpansion = await model.execute(); 
        const cd =  new convertData(preexpansion.equipo, preexpansion.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, preexpansion.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            preexpansion.dias, 
            null, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            null, 
            null, 
            preexpansion.equivalencia,
            preexpansion.message,
            preexpansion.city,
            null,
            null,
            null,
            null,
            null,
            null,
            preexpansion.quejas_clientes,
            null,
            preexpansion.montos_recibidos_area, 
            preexpansion.participacion,
            preexpansion.aprove_perla_corte, 
            preexpansion.aprove_perla_moldeo, 
        );

        let sumatoria_asistencia = calc.totalAsistencia;        
        // let monto_para_calidad_area = calc.montoCalidadArea;
        // let total_monto_calidad = calc.totalMontoCalidad;
        // let total_de_bono_calidad = calc.totalBonoCalidad;
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;
        // let bono_productividad = calc.bonoProductividad;  
        // let bono_metas = calc.pc_metas;     

        //generar reporte 
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, preexpansion.message, preexpansion.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  bono_total, preexpansion.message, preexpansion.city); 
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
                    depto: 'Preexpansión',
                    day: weekdayName,
                    meta_semana: preexpansion.base0,
                    dias_laborados: preexpansion.dias, 
                    $_extra_m3: preexpansion.$_extra_m3,                                              
                    bono_depto: pago_total,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    // bono_productividad: bono_productividad,
                    // bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i]                
                });               
            }
        }else{
            return res.status(200).send({      
                depto: 'Preexpansión',
                day: weekdayName,
                meta_semana: preexpansion.base0,
                dias_laborados: preexpansion.dias,
                $_extra_m3: preexpansion.$_extra_m3,
                // monto_ca:monto_para_calidad_area,
                // total_montoc:total_monto_calidad,
                // total_bonoc:total_de_bono_calidad,
                bono_depto: pago_total,
                pago_persona:pago_colaboradores, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                // bono_productividad: bono_productividad,
                // bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
            });
        } 
    },

    bonosDepto:async (req, res) => {
        const repository = new preexpansionSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },

};

module.exports = controller; 
