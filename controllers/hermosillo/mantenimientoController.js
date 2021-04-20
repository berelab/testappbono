'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel'
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import mantenimientoModel from '../../models/hermosillo/mantenimientoModel';
import mantenimientoSQL from '../../infrastructure/hermosillo/mantenimientoRepo';
//corte
import corteModel from '../../models/hermosillo/corteModel';
import corteSQL from '../../infrastructure/hermosillo/corteRepo';
//insulpanel
import insulpanelModel from '../../models/hermosillo/insulpanelModel';
import insulpanelSQL from '../../infrastructure/hermosillo/insulpanelRepo';
//moldeo
import moldeoModel from '../../models/hermosillo/moldeoModel';
import moldeoSQL from '../../infrastructure/hermosillo/moldeoRepo';

import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';
import oracleProduccionRepo from '../../infrastructure/hermosillo/produccionRepository';
import oracleProduccionMoldeoRepo from '../../infrastructure/globalRepo/produccionRepository';

const controller = {
	
	home: async(req, res) => {
        const produccionRepo = new oracleProduccionRepo();
        const produccionMoldeoRepo = new oracleProduccionMoldeoRepo();
        const repositoryC = new corteSQL();
        const modelC = new corteModel(repositoryC,produccionRepo);
        let corte = await modelC.execute(); 

        const repositoryM = new moldeoSQL();
        const modelM = new moldeoModel(repositoryM,produccionMoldeoRepo);
        let moldeo = await modelM.execute(); 
        
        const repositoryI = new insulpanelSQL();
        const modelI = new insulpanelModel(repositoryI);
        let insulpanel = await modelI.execute(); 

        let percCorte =  percepcionCorte(corte);
        let percMoldeo = percepcionMoldeo(moldeo);
        let percInsulpanel =  percepcionInsulpanel(insulpanel); 

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository,percCorte,percInsulpanel,percMoldeo);
        let mantenimiento = await model.execute(); 
        const cd =  new convertData(mantenimiento.equipo, mantenimiento.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: mantenimiento.message, 
            city: mantenimiento.city,           
            dias: mantenimiento.dias, 
            factor_dias_laborados: mantenimiento.factor_dias_laborados,  
            areas: mantenimiento.areas, 
            montos_recibidos_area: mantenimiento.montos_recibidos_area,
            rendimiento_agua: mantenimiento.rendimiento_agua, 
            rendimiento_combustible: mantenimiento.rendimiento_combustible, 
            rendimiento_electricidad: mantenimiento.rendimiento_electricidad,  
            asistencia: mantenimiento.team_asis,
            equipo_convertido: equipo,                
        });
    },
    
    calculator: async(req, res)=>{

        const produccionRepo = new oracleProduccionRepo();
        const repositoryC = new corteSQL();
        const modelC = new corteModel(repositoryC,produccionRepo);
        let corte = await modelC.execute(); 

        const repositoryM = new moldeoSQL();
        const modelM = new moldeoModel(repositoryM);
        let moldeo = await modelM.execute(); 
        
        
        const repositoryI = new insulpanelSQL();
        const modelI = new insulpanelModel(repositoryI);
        let insulpanel = await modelI.execute(); 

        let percCorte =  percepcionCorte(corte);
        let percMoldeo = percepcionMoldeo(moldeo);
        let percInsulpanel = percepcionInsulpanel(insulpanel); 

        const repository = new mantenimientoSQL();
        const model = new mantenimientoModel(repository,percCorte,percInsulpanel,percMoldeo);
        let mantenimiento = await model.execute(); 
        const cd =  new convertData(mantenimiento.equipo, mantenimiento.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, mantenimiento.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            mantenimiento.dias, 
            null, 
            colaboradores, 
            asistencia, 
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
    }
};


let percepcionCorte =  (corte) =>{
    const cd =  new convertData(corte.equipo, corte.team_asis);
    let equipo = cd.convert;

    const calcAtt = new att(equipo, corte.factor_dias_laborados);
    let colaboradores = calcAtt.colaboradoresPorDia;
    let asistencia_total = calcAtt.asistenciaTotal;

    let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    let dateObj = new Date();
    let weekdayNumber = dateObj.getDay();
    let weekdayName = arrayOfWeekdays[weekdayNumber];

    const calc = new mainCalcs(
        corte.dias, 
        corte.m3_cortados, 
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
        corte.horas_por_turno
    );

    let percepcion_total = calc.percepcionTotal;

    return percepcion_total
}

let percepcionMoldeo = (moldeo) =>{
    const cd =  new convertData(moldeo.equipo, moldeo.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att(equipo, moldeo.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            moldeo.dias, 
            moldeo.m3_cortados, 
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
            null,
            null,
            null,
            null,
            moldeo.horas_por_turno,
            null,
            moldeo.rechazos_internos
        );

        let percepcion_total = calc.percepcionTotal;

    return percepcion_total
}


let percepcionInsulpanel = (insulpanel) =>{
    const cd =  new convertData(insulpanel.equipo, insulpanel.team_asis);
        let equipo = cd.convert;
        let equiponc = addNivelCarrera(equipo, insulpanel.nc_colabs);

        const calcAtt = new att( equiponc, insulpanel.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        const calc = new mainCalcs(
            insulpanel.dias, 
            insulpanel.m2_producidos, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equiponc, 
            null, 
            null, 
            null, 
            insulpanel.factor_dias_laborados,
            insulpanel.message,
            insulpanel.city,
            insulpanel.retardos_entrega,
            insulpanel.falla_calidad,
            insulpanel.limpieza,
            insulpanel.paros_produccion
        );
      
        let bonoXpenalizacion= calc.bonoTotalConPenalizacionPorColaborador;
        let totalbonoXpenalizacion = calc.bonoTotalConPenalizacion;  
       
    let promedio= totalbonoXpenalizacion / bonoXpenalizacion.length

    return promedio
    }

    
    let addNivelCarrera =(equipo, nc_colabs) =>{
        let result =[];
        let lenEq = equipo.length;
        let lenNC = nc_colabs.length;
    
        for(var i =0; i<lenEq; i++){
            let numEq = equipo[i].num
            let encontrado ='NO';
            let equipoModel={
                nombre:  equipo[i].nombre,
                num:   equipo[i].num,
                factor_dias_laborados:  equipo[i].factor_dias_laborados,
                dias:  equipo[i].dias,
                asistencia:  equipo[i].asistencia,
                faltas : equipo[i].faltas,
                retardos: equipo[i].retardos,
                horas_extras: equipo[i].horas_extras,
                nivel_dPdC: ''
            }
            for(var k=0; k<lenNC; k++){
                let numNC = nc_colabs[k].num
                if(numEq===numNC){
                    encontrado =k
                }
            }
            if(encontrado != 'NO'){
                equipoModel.nivel_dPdC = nc_colabs[encontrado].nc
            }
    
            result.push(equipoModel);
    
        }
        
        return result
    
    }

module.exports = controller; 
