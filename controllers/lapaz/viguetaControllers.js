'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import viguetaModels from '../../models/lapaz/viguetaModels';
import viguetaSQLRepo from '../../infrastructure/lapaz/ViguetaRepository';
import convertData from '../ConvertData';

const controller = {
	
	home: async (req, res) => {
        const repository = new viguetaSQLRepo();
        const model = new viguetaModels(repository);

        let vigueta = await model.execute(); 
        const cd =  new convertData(vigueta.equipo, vigueta.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: vigueta.message,
            dias: vigueta.dias_laborados,
            dias_sucios: vigueta.auditoria_sol,
            pago: vigueta.pago_dia,
            equipo_convertido: equipo
        });
    },
    
    calculator: async (req, res)=>{
        const repository = new viguetaSQLRepo();
        const model = new viguetaModels(repository);

        let vigueta = await model.execute(); 
        const cd =  new convertData(vigueta.equipo, vigueta.team_asis);
        let equipo = cd.convert;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];

        let condicion_auditoria = auditoria(vigueta.auditoria_sol);
        let asistencia_persona = asistencias(equipo);
        let total_base = total_base_persona(asistencia_persona, vigueta.pago_dia);
        let bono_total = bono_total_persona(total_base,condicion_auditoria);

          //generar reporte
          if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total, vigueta.message, vigueta.city); 
            
            let total =0;
            for(var i=0; i<bono_total.length; i++){
                total =  total + bono_total[i];
            }
            let bonosDepto = await model.saveBonosDepto(semana, total, vigueta.message, vigueta.city); 
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
                    depto: vigueta.message,
                    day: weekdayName,
                    dias_laborados: vigueta.dias_laborados,                    
                    asistencia: asistencia_persona[i],
                    total_base: total_base[i],
                    bono_persona:  bono_total[i],
                    datos_extra: {
                        condicionante_auditoria: condicion_auditoria,
                        pago_por_dia: vigueta.pago_dia
                    },                 
                });
               
            }
        }else{
            return res.status(200).send({
                depto: vigueta.message,
                dias_laborados: vigueta.dias_laborados,
                day: weekdayName,
                asistencia: asistencia_persona,
                total_base: total_base,
                bono_persona:  bono_total,
                datos_extra: {
                    condicionante_auditoria: condicion_auditoria,
                    pago_por_dia: vigueta.pago_dia
                }
            });
        }       
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        const repository = new viguetaSQLRepo();
        const model = new viguetaModels(repository);
        let vigueta = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            message : 'OK',
            vigueta
        });  
    },
    
    bonosDepto:async (req, res) => {
        const repository = new viguetaSQLRepo();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    }
};

//estandar
let auditoria = (value) => {
    if(value == 0){
        return 0;
    }else if(value ==1){
        return -.10
    }else if(value ==2){
        return -.15
    }else if(value ==3){
        return -.20
    }else if(value ==4){
        return -.30
    }else if(value ==5){
        return -.40
    }else{
        return 0;
    }
}

/*
let auditoria = (value) => {
    if(value >= 60 && value < 70){
        return -.04;
    }else if(value >= 70 && value < 80){
        return -.03;
    }else if(value >= 80 && value < 85){
        return -.02;
    }else if(value >= 85 && value < 90){
        return -0.01;
    }else if(value >= 90 && value < 95){
        return 0;
    }else if(value >= 95 && value < 100){
        return .025;
    }else if(value >= 100){
        return .05;
    }else{
        return 0;
    }
}*/


let asistencias = (equipo) =>{
    let asistencia_total= [];
    let len = equipo.length;

    for(var n =0; n< len; n++){
        let total = equipo[n].asistencia.lunes + equipo[n].asistencia.martes  + equipo[n].asistencia.miercoles + equipo[n].asistencia.jueves + equipo[n].asistencia.viernes + equipo[n].asistencia.sabado ;
        asistencia_total.push(total);
    }
    return asistencia_total;
}

let total_base_persona =(asistencia_persona, pago_dia) =>{
    let total_base= [];
    let len = asistencia_persona.length;

    for(var n =0; n< len; n++){
        let total = asistencia_persona[n] * pago_dia;
        total_base.push(total);
    }
    return total_base;
}

let bono_total_persona =(total_base, condicion_auditoria) =>{
    let bono_total= [];
    let len = total_base.length;

    for(var n =0; n< len; n++){
        let total = total_base[n] * (condicion_auditoria + 1);
        bono_total.push(total);
    }
    return bono_total;
}


module.exports = controller; 
