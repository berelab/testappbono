'use strict' 

import rotuladoModel from '../../models/monterrey/rotuladoHielera1Model';
import rotuladoSQL from '../../infrastructure/monterrey/rotuladoRepo';
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
            m3_cortados: rotulado.m3_cortados, 
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
            rotulado.m3_cortados, 
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
            rotulado.amp
        );

        let sumatoria_asistencia = calc.totalAsistencia;
        const calN = new calcsN(
            sumatoria_asistencia,
            rotulado.factor_dias_laborados,
            equipo,
            rotulado.dias,
            null,
            null,
            rotulado.$_extra_m3,
            rotulado.m3_cortados,
            rotulado.base0,
            rotulado.amp,
            rotulado.dias_sucios,
            null,
            null,
            rotulado.city,
            rotulado.message,
            colaboradores
            );

        //let total_produccion = calc.totalProduccion;
        let m3_persona = calN.m3CortadosPersona;
        // let sub_total = calN.m3ExtraVSBaseO; 
        // let total = calN.percepcionTotalM3Base;
        let percepcionTotalPorDia = calN.percepcionTotalPorDia;
        let percepcionTotalPorDiaIndividual = calN.percepcionTotalPorDiaIndividual;
        let percepcionTotalPorSemana = calN.percepcionTotalPorSemana;
        let percepcionTotalPorSemanaIndividual = calN.percepcionTotalPorSemanaIndividual;

        let pago_colaboradores = calc.pagoTotal;
        let pago_total = calc.pagoTotalSinPenalizacion;
        let bono_total_colaborador = calc.bonoTotalConPenalizacionPorColaborador;
        let bono_total = calc.bonoTotalConPenalizacion;   

        let  m3_persona_total =0;
        for(var i=0; i<m3_persona.length; i++){
            m3_persona_total += m3_persona[i];
        }

        let m3_persona_dia;
        if(weekdayNumber ==0){ //domingo
            m3_persona_dia = m3_persona[6] //d
        }else if(weekdayNumber ==1){ //lunes
            m3_persona_dia = m3_persona[0] //l
        }else if(weekdayNumber ==2){
            m3_persona_dia = m3_persona[1]
        }else if(weekdayNumber ==3){
            m3_persona_dia = m3_persona[2]
        }else if(weekdayNumber ==4){
            m3_persona_dia = m3_persona[3]
        }else if(weekdayNumber ==5){
            m3_persona_dia = m3_persona[4]
        }else if(weekdayNumber ==6){
            m3_persona_dia = m3_persona[5]
        }

        let bono_productividad = calc.bonoProductividad; 
        let bono_metas = calc.pc_metas; 

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
                    // progress: progress,
                    m3_persona: m3_persona_total,
                    bono_depto: bono,  
                    pago_persona:pago_colaboradores[i], 
                    bono_persona: bono_total_colaborador[i],
                    bono_productividad: bono_productividad,
                    bono_metas: bono_metas,
                    asistencia: sumatoria_asistencia[i], 
                    datos_extra: {
                        m3_persona_dia: m3_persona_dia
                    }, 
                });
            }
        }else{
            return res.status(200).send({
                depto: 'Rotulado',
                day: weekdayName,
                meta_semana: rotulado.base0,
                dias_laborados: rotulado.dias,
                $_extra_m3: rotulado.$_extra_m3,
                // progress: progress,
                m3_persona: m3_persona_total,
                bono_depto: percepcionTotalPorSemana,
                pago_persona:pago_colaboradores, 
                pago_total: pago_total, 
                bono_persona: bono_total_colaborador, 
                bono_total:bono_total,
                bono_productividad: bono_productividad,
                bono_metas: bono_metas,
                asistencia: sumatoria_asistencia,
                datos_extra: {
                    m3_persona_dia: m3_persona_dia
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
    }

};

module.exports = controller; 

// if(req.params.index){
        //     let i = parseInt(req.params.index); 

            
        //     if(isNaN(i)){
        //         return res.status(400).send({
        //             status: 'error',
        //             code:400,
        //             message: 'Index invalido',
        //         });
        //     }

        //     let len = equipo.length;

        //     if(i < 0 || i >= len ){
        //         return res.status(400).send({
        //             status: 'error',
        //             code:400,
        //             message: 'No existe el colaborador',
        //         });
        //     }else{
        //          /** El bono_depto cambia dependiendo si rotulador es NO o SI */
        //         let rotulador = equipo[i].rotulador;
        //         let bono;
        //         if(rotulador =='NO' || rotulador =='no'){
        //                 bono =percepcionTotalPorSemanaIndividual;
        //         }else{
        //                 bono =percepcionTotalPorSemana;
        //         }

        //         return res.status(200).send({
                    
        //             nombre: equipo[i].nombre,
        //             rotulador: rotulador,
        //             depto: message,
        //             day: weekdayName,
        //             meta_semana: base0,
        //             dias_laborados: dias,  
        //             m3_persona: m3_persona_total,  
        //             bono_depto: bono,     
        //             pago_persona: pago_colaboradores[i],
        //             bono_persona:bono_total_colaborador[i],
        //             $_extra_m3: $_extra_m3,     
        //             asistencia: sumatoria_asistencia[i],
        //             datos_extra: {
        //                 m3_persona_dia: m3_persona_dia
        //             },   
        //         });
               
        //     }
        // }else{
        //     return res.status(200).send({
                
        //         depto: message,
        //         day: weekdayName,
        //         meta_semana: base0,
        //         dias_laborados: dias,
        //         $_extra_m3: $_extra_m3,  
        //         m3_persona: m3_persona_total,  
        //         bono_depto_dia: percepcionTotalPorDia , 
        //         bono_depto: percepcionTotalPorSemana,
        //         bono_depto_dia_colaborador: percepcionTotalPorDiaIndividual,  
        //         bono_depto_individual: percepcionTotalPorSemanaIndividual,  
        //         pago_persona: pago_colaboradores,
        //         pago_total:pago_total,
        //         bono_persona:bono_total_colaborador,
        //         bono_total: bono_total,   
        //         datos_extra: {
        //             m3_persona_dia: m3_persona_dia
        //         },   
        //         asistencia: sumatoria_asistencia, 
        //         equipo
                
        //     });
        // }

