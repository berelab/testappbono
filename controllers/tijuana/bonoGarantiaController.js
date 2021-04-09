'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import bonoGModel from '../../models/tijuana/bonoGarantiaModel';
import bonoGSQL from '../../infrastructure/tijuana/bonogRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {	
    home: async(req, res) => {
        const repository = new bonoGSQL();
        const model = new bonoGModel(repository);
        let bonog = await model.execute(); 
        const cd =  new convertData(bonog.equipo, bonog.team_asis);
        let equipo = cd.convert;

		return res.status(200).send({
            message: bonog.message,
            base0: bonog.base0,
            dias_sucios: bonog.dias_sucios,
            $_extra_m3: bonog.$_extra_m3,                   
            dias: bonog.dias,
            factor_dias_laborados: bonog.factor_dias_laborados,
            semana: bonog.semana,
            asistencia: bonog.team_asis,
            equipo_convertido: equipo            
        });
    },
    calculator: async(req, res)=>{
        const repository = new bonoGSQL();
        const model = new bonoGModel(repository);
        let bonog = await model.execute(); 
        const cd =  new convertData(bonog.equipo, bonog.team_asis);
        let equipo = cd.convert;

        const calcAtt = new att( equipo, bonog.factor_dias_laborados);
        let colaboradores = calcAtt.colaboradoresPorDia;
        let asistencia_total = calcAtt.asistenciaTotal;

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        const calc = new mainCalcs(
            bonog.dias, 
            null, 
            colaboradores, 
            asistencia_total, 
            weekdayName, 
            equipo, 
            null, 
            bonog.pago, 
            null, 
            null,
            bonog.message,
            bonog.city,
        );
        let sumatoria_asistencia = calc.totalAsistencia;
        let bono_total_colaborador  = calc.montoAPagar;
        let bono_total = calc.montoTotal;
       // let bono_productividad = calc.bonoProductividad;  
       // let bono_metas = calc.pc_metas;     
      
      
       //generar reporte 
       /*pendiente activar
        if(weekdayName =='domingo'){
            let dia = dateObj.getDate();
            let mes = dateObj.getMonth() + 1;
            let año = dateObj.getFullYear();
            let semana = dia+"/"+mes+"/"+año;
            
            const repository = new mySqlReporteRepository();
            const model = new reporteModel(repository);
            let reporte = await model.saveWeek(equipo,semana, bono_total_colaborador, bonog.message, bonog.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  bono_total, bonog.message, bonog.city); 
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
                    city: bonog.city,
                    depto: bonog.message,
                    day: weekdayName,
                    meta_semana: bonog.base0,
                    dias_laborados: bonog.dias, 
                    $_extra_m3: bonog.$_extra_m3,       
                    // progress: progress,
                    // m3_persona: bultos_dia,
                    sipo: bonog.sipo,
                    semana: bonog.semana,
                    bono_depto: bonog.pago,  
                    bono_persona: bono_total_colaborador[i],
                    //bono_productividad: bono_productividad,
                    //bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i], 
                    // datos_extra: {
                    //     m3_persona_dia: daily_prod
                    // },                    
                });               
            }
        }else{
            return res.status(200).send({      
                depto: bonog.message,
                day: weekdayName,
                meta_semana: bonog.base0,
                dias_laborados: bonog.dias,
                $_extra_m3: bonog.$_extra_m3,
                // progress: progress,
                // m3_persona: bultos_dia,
                bono_depto: bonog.pago,
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                //bono_productividad: bono_productividad,
                //bono_metas: bono_metas,
                asistencia: sumatoria_asistencia, 
                // datos_extra: {
                //     m3_persona_dia: daily_prod
                // }
            });
        }  
    },

    bonosDepto:async (req, res) => {
        const repository = new bonoGSQL();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    }

    
};

 
module.exports = controller; 
