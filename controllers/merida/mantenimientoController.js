'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import mantenimientoModel from '../../models/merida/mantenimientoModel';
import mantenimientoSQL from '../../infrastructure/merida/mantenimientoRepo';
//corte
import corteModel from '../../models/merida/corteModel';
import corteSQL from '../../infrastructure/merida/corteRepo';
//bloquera
import bloqueraModel from '../../models/merida/bloqueraModel';
import bloqueraSQL from '../../infrastructure/merida/bloqueraRepo';

import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repositoryC = new corteSQL();
        const modelC = new corteModel(repositoryC);
        let corte = await modelC.execute(); 

        const repositoryB = new bloqueraSQL();
        const modelB = new bloqueraModel(repositoryB);
        let bloquera = await modelB.execute(); 

        let percCorte =  percepcionCorte(corte);
        let percBloquera = percepcionBloquera(bloquera);

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository,percCorte, percBloquera);
        let mantenimiento = await model.execute(); 
        const cd =  new convertData(mantenimiento.equipo, mantenimiento.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: mantenimiento.message,                   
            dias: mantenimiento.dias,
            factor_dias_laborados: mantenimiento.factor_dias_laborados,
            areas: mantenimiento.areas , 
            montos_recibidos_area: mantenimiento.montos_recibidos_area,
            rendimiento_agua: mantenimiento.rendimiento_agua, 
            rendimiento_combustible: mantenimiento.rendimiento_combustible, 
            rendimiento_electricidad: mantenimiento.rendimiento_electricidad, 
            faltas_uso_epp: mantenimiento.faltas_uso_epp, 
            fugas_perla: mantenimiento.fugas_perla, 
            fugas_vapor: mantenimiento.fugas_vapor, 
            fugas_aceite: mantenimiento.fugas_aceite, 
            fugas_aire: mantenimiento.fugas_aire, 
            asistencia: mantenimiento.team_asis,
            equipo_convertido: equipo  
        });
    },
    
    calculator: async(req, res)=>{
        const repositoryC = new corteSQL();
        const modelC = new corteModel(repositoryC);
        let corte = await modelC.execute(); 

        const repositoryB = new bloqueraSQL();
        const modelB = new bloqueraModel(repositoryB);
        let bloquera = await modelB.execute(); 

        let percCorte =  percepcionCorte(corte);
        let percBloquera = percepcionBloquera(bloquera);

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository,percCorte, percBloquera);
        let mantenimiento = await model.execute(); 
        const cd =  new convertData(mantenimiento.equipo, mantenimiento.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, mantenimiento.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            mantenimiento.dias, 
            null, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            null, 
            null, 
            mantenimiento.factor_dias_laborados,
            mantenimiento.message,
            mantenimiento.city,
            null,
            null,
            null,
            null,
            null,
            mantenimiento.horas_por_turno,
            null,
            null,
            mantenimiento.montos_recibidos_area, 
            null,
            null, 
            null,
            mantenimiento.rendimiento_agua, 
            mantenimiento.rendimiento_combustible, 
            mantenimiento.rendimiento_electricidad, 
            mantenimiento.faltas_uso_epp, 
            mantenimiento.fugas_perla, 
            mantenimiento.fugas_vapor, 
            mantenimiento.fugas_aceite, 
            mantenimiento.fugas_aire,
        );
                
        let sumatoria_asistencia = calc.totalAsistencia;
        let asistencias_colaborador = calc.totalAsistencia;
        let total_mantenimiento = calc.totalMantenimiento
        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;
        let pc_energeticos = calc.pcenergeticos;
        let pc_fugas = calc.pcfugas;
        let descuento_fr = calc.penalizacionFaltasColab;
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
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, mantenimiento.message,  mantenimiento.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  bono_total, mantenimiento.message,  mantenimiento.city); 
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
                    depto: mantenimiento.message,
                    day: weekdayName,
                    meta_semana: mantenimiento.base0,
                    dias_laborados: mantenimiento.dias, 
                    $_extra_m3: mantenimiento.$_extra_m3,
                    asistencia: sumatoria_asistencia[i],
                    pc_energeticos: pc_energeticos,
                    pc_fugas: pc_fugas,
                    descuento_fr: descuento_fr[i],
                    bono_depto: total_mantenimiento,
                    pago_persona: pago_colaboradores[i],
                    bono_persona: bono_total_colaborador[i],
                    // bono_productividad: bono_productividad,
                    // bono_metas: bono_metas,                                 
                });               
            }
        }else{
            return res.status(200).send({   
                depto: mantenimiento.message,
                day: weekdayName,
                pc_energeticos: pc_energeticos,
                pc_fugas: pc_fugas,
                bono_depto: total_mantenimiento,
                pago_persona: pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total: bono_total,  
                // bono_productividad: bono_productividad,
                // bono_metas: bono_metas,
                asistencia: asistencias_colaborador,  
                descuento_fr: descuento_fr            
            });
        }
    },

    bonosDepto:async (req, res) => {
        const repository = new mantenimientoSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },


};

let percepcionCorte =  (corte) =>{
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
            corte.m3_desplazados, 
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
            corte.num_quejas_cliente,
        );

    
        let percepcion_total = calc.percepcionTotal;

    return percepcion_total
}

let percepcionBloquera = (bloquera) =>{
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

    let percepcion_total = calc.percepcionTotal;

return percepcion_total
}

module.exports = controller; 
