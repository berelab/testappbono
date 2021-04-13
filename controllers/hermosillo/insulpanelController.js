'use strict'
import bonosModel from '../../models/deptos/BonosDeptoModel';
import reporteModel from '../../models/users/reporteModel';
import mySqlReporteRepository from '../../infrastructure/users/reporteRepository';
import insulpanelModel from '../../models/hermosillo/insulpanelModel';
import insulpanelSQL from '../../infrastructure/hermosillo/insulpanelRepo';
import mainCalcs from '../MainCalcs';
import convertData from '../ConvertData';
import att from '../Attendance';

const controller = {
	
	home: async(req, res) => {
        const repository = new insulpanelSQL();
        const model = new insulpanelModel(repository);
        let insulpanel = await model.execute(); 
        const cd =  new convertData(insulpanel.equipo, insulpanel.team_asis);
        let equipo = cd.convert;
        let equiponc = addNivelCarrera(equipo, insulpanel.nc_colabs);

		return res.status(200).send({
            message: insulpanel.message,
            base0: insulpanel.base0,
            dias_sucios: insulpanel.dias_sucios,
            $_extra_m3: insulpanel.$_extra_m3,
            dias: insulpanel.dias,
            factor_dias_laborados: insulpanel.factor_dias_laborados,
            m2_producidos: insulpanel.m2_producidos,
            asistencia: insulpanel.team_asis,
            equipo_convertido: equipo,
            equiponc: equiponc,
            nc: insulpanel.nc_colabs  , 
            lennc:  insulpanel.nc_colabs.length,
            leteq: equipo.length          
        });
    },
    calculator: async(req, res)=>{
        const repository = new insulpanelSQL();
        const model = new insulpanelModel(repository);
        let insulpanel = await model.execute(); 
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
        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;       
        let m3_persona = calc.m3Persona;        
        let sumatoria_asistencia = calc.totalAsistencia;
        
        let bonos_Por_NPC = calc.bonosPorNPC
        let bono_total = calc.bonoTotalColaborador;
        let bonoXdiasLaborados = calc.pagoTotal;
        let TotalbonoXdiasLaborados  = calc.pagoTotalSinPenalizacion;
        let bonoXpenalizacion= calc.bonoTotalConPenalizacionPorColaborador;
        let totalbonoXpenalizacion = calc.bonoTotalConPenalizacion;  
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
            let reporte = await model.saveWeek(equiponc,semana, bonoXpenalizacion, insulpanel.message,  insulpanel.city); 
            
            let bonosDepto = await model.saveBonosDepto(semana,  totalbonoXpenalizacion, insulpanel.message,  insulpanel.city); 
        }*/
        if(req.params.index){
            let codigo = parseInt(req.params.index); 

            let len = equiponc.length;
            let i = 'no encontrado';

            for(var a=0; a<len; a++){
                equiponc[a].num == codigo?  i = a: i
            }
            
            if(i =='no encontrado'){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({             
                    nombre: equiponc[i].nombre,
                    code: equiponc[i].num,
                    city: insulpanel.city,
                    depto: insulpanel.message,
                    day: weekdayName,
                    meta_semana: insulpanel.base0,
                    dias_laborados: insulpanel.dias, 
                    $_extra_m3: insulpanel.$_extra_m3,       
                    progress: progress, 
                    m3_persona: m3_persona,
                    bono_Nivel_Carrera: bonos_Por_NPC[i],
                    bono_depto: bono_total[i],
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
                bono_Nivel_Carrera: bonos_Por_NPC,
                bono_depto: bono_total,
                pago_persona: bonoXdiasLaborados, 
                pago_total: TotalbonoXdiasLaborados, 
                bono_persona: bonoXpenalizacion, 
                bono_total: totalbonoXpenalizacion,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia,
                datos_extra: {
                    m3_persona_dia: daily_prod,
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
    },

    

};

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
