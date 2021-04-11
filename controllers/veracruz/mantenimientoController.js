'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import mantenimientoModel from '../../models/veracruz/mantenimientoModel';
import mantenimientoSQL from '../../infrastructure/veracruz/mantenimientoRepo';
//corte
import corteModel from '../../models/veracruz/corteModel';
import corteSQL from '../../infrastructure/veracruz/corteRepo';
//moldeo
import moldeoModel from '../../models/veracruz/moldeoModel';
import moldeoSQL from '../../infrastructure/veracruz/moldeoRepo';
//emco
import emcoModel from '../../models/veracruz/emcoModel';
import emcoSQL from '../../infrastructure/veracruz/emcoRepo';
//panel
import panelModel from '../../models/veracruz/construpanelModel';
import panelSQL from '../../infrastructure/veracruz/panelRepo';
//bloquera -> pendiente...


import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repositoryC = new corteSQL();
        const modelC = new corteModel(repositoryC);
        let corte = await modelC.execute(); 
        
        const repositoryM = new moldeoSQL();
        const modelM = new moldeoModel(repositoryM);
        let moldeo = await modelM.execute(); 

        const repositoryE = new emcoSQL();
        const modelE = new emcoModel(repositoryE);
        let emco = await modelE.execute(); 

        const repositoryP = new panelSQL();
        const modelP = new panelModel(repositoryP);
        let panel = await modelP.execute(); 

        //pendiente bloquera

        let percCorte =  percepcionCorte(corte); 
        let percMoldeo = percepcionMoldeo(moldeo); 
        //let percBloquera =  percepcionBloquera(bloquera); pendiente
        let percEmco =  percepcionEmco(emco); 
        let percPanel = percepcionPanel(panel);

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository, percCorte,percPanel, 0, percMoldeo, percEmco);
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
        
        const repositoryM = new moldeoSQL();
        const modelM = new moldeoModel(repositoryM);
        let moldeo = await modelM.execute(); 

        const repositoryE = new emcoSQL();
        const modelE = new emcoModel(repositoryE);
        let emco = await modelE.execute(); 

        const repositoryP = new panelSQL();
        const modelP = new panelModel(repositoryP);
        let panel = await modelP.execute(); 

        //pendiente bloquera

        let percCorte =  percepcionCorte(corte); 
        let percMoldeo = percepcionMoldeo(moldeo); 
        //let percBloquera =  percepcionBloquera(bloquera); pendiente
        let percEmco =  percepcionEmco(emco); 
        let percPanel = percepcionPanel(panel);

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository, percCorte,percPanel, 0, percMoldeo, percEmco);
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
        /*
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, mantenimiento.message,  mantenimiento.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  bono_total, mantenimiento.message,  mantenimiento.city); 
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
    }


};

//controller no funcional - queda pendiente.
let percepcionBloquera =  (bloquera) =>{
    
   return 0 //percepcion_total
}



let percepcionCorte = (corte) =>{
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
            corte.rechazo_interno,
            null,
            null,
            null,
            corte.horas_por_turno,
            corte.num_quejas
        );

        let percepcion_total = calc.percepcionTotal;
   
      return percepcion_total
   }
   

let percepcionMoldeo = (moldeo) =>{
    const cd =  new convertData(moldeo.equipo, moldeo.team_asis);
    let equipo = cd.convert;

    const calcAtt = new att( equipo, moldeo.factor_dias_laborados);
    let colaboradores = calcAtt.colaboradoresPorDia;
    let asistencia_total = calcAtt.asistenciaTotal;

    let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    let dateObj = new Date();
    let weekdayNumber = dateObj.getDay();
    let weekdayName = arrayOfWeekdays[weekdayNumber];

    const calc = new mainCalcs(
        moldeo.dias, 
        moldeo.m3_desplazados, 
        colaboradores, 
        asistencia_total, 
        weekdayName, 
        equipo, 
        moldeo.base0, 
        moldeo.$_extra_m3, 
        moldeo.dias_sucios, 
        moldeo.factor_dias_laborados,
        moldeo.message,
        moldeo.city,
        moldeo.amp,
        moldeo.rechazo_interno,
        null,
        null,
        null,
        moldeo.horas_por_turno,
        moldeo.num_quejas
    );

    let percepcion_total = calc.percepcionTotal;

   return percepcion_total
}

let percepcionEmco = (emco) =>{
    const cd =  new convertData(emco.equipo, emco.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, emco.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];        

        const calc = new mainCalcs(
            emco.dias, 
            emco.m3_desplazados, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            emco.base0, 
            emco.$_extra_m3, 
            emco.dias_sucios, 
            emco.factor_dias_laborados,
            emco.message,
            emco.city,
            emco.amp,
            emco.rechazo_interno,
            null,
            null,
            null,
            emco.horas_por_turno,
            emco.num_quejas
        );

 
        let percepcion_total = calc.percepcionTotal;

    return percepcion_total
 }

 let percepcionPanel = (panel) =>{
    const cd =  new convertData(panel.equipo, panel.team_asis);
    let equipo = cd.convert;
    
    const calcAtt = new att( equipo, panel.factor_dias_laborados);
    let colaboradores = calcAtt.colaboradoresPorDia;
    let asistencia_total = calcAtt.asistenciaTotal;

    let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    let dateObj = new Date();
    let weekdayNumber = dateObj.getDay();
    let weekdayName = arrayOfWeekdays[weekdayNumber];

    const calc = new mainCalcs(
        panel.dias, 
        panel.m3_desplazados, 
        colaboradores, 
        asistencia_total, 
        weekdayName, 
        equipo, 
        panel.base0, 
        panel.$_extra_m3, 
        panel.dias_sucios, 
        panel.factor_dias_laborados,
        panel.message,
        panel.city,
        panel.desperdicio_alambre,
        panel.rechazo_interno,
        panel.desperdicio_placa,
        panel.equipo_proteccion,
        null,
        panel.horas_por_turno,
    );


    let percepcion_total = calc.percepcionTotal;

    return percepcion_total
 }


module.exports = controller; 
