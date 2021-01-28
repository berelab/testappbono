'use strict'

import corteModels from '../../models/lapaz/corteModels';
import mySqlCorteRepository from '../../infrastructure/mySqlCorteRepository';
import mainCalcs from '../MainCalcs';
const db = require ('../../infrastructure/mysqlClient');

const controller = {
	
	home: async (req, res) => {
        const repository = new mySqlCorteRepository();
        const model = new corteModels(repository);

        let corte = await model.execute(); 

		return res.status(200).send({
            message: corte.message,
            base0: corte.base0,
            dias_sucios: corte.dias_sucios,
            $_extra_m3: corte.$_extra_m3,
            dias: corte.dias,
            factor_dias_laborados: corte.factor_dias_laborados,
            colaboradores:corte.colaboradores,
            m3_cortados: corte.m3_cortados,
            equipo: corte.equipo
        });
    },
    
    calculator: async(req, res)=>{
        const repository = new mySqlCorteRepository();
        const model = new corteModels(repository);

        let corte = await model.execute(); 

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];;

        const calc = new mainCalcs(
            corte.dias, 
            corte.m3_cortados, 
            corte.colaboradores, 
            corte.asistencia_total, 
            weekdayName, 
            corte.equipo, 
            corte.base0, 
            corte.$_extra_m3, 
            corte.dias_sucios,             
            corte.factor_dias_laborados,
            corte.message,
            corte.city,
            corte.amp
        );                

        let daily_prod = calc.dailyProd;
        let progress = calc.progress_bar;       
        let m3_persona = calc.m3Persona;
        let sumatoria_asistencia = calc.totalAsistencia;

        let percepcion_total = calc.percepcionTotal;
        let bono_total = calc.bonoTotal                

        return res.status(200).send({
            nombre: corte.equipo[0].nombre,
            depto: corte.message,
            day: weekdayName,
            meta_semana: corte.base0,
            dias_laborados: corte.dias,
            $_extra_m3: corte.$_extra_m3,
            progress: progress,
            m3_persona: m3_persona,
            bono_persona: bono_total,
            bono_depto: percepcion_total,
            asistencia: sumatoria_asistencia[0], 
            datos_extra: {
                m3_persona_dia: daily_prod
            }
            
        });
    },

    editInfo: async(req, res)=>{
        let base = req.body.base;
        let dias_sucios = req.body.dias_sucios;        
        let extra_m3 =  req.body.extra_m3;
        
        base ? base : base = 165;
        dias_sucios ?  dias_sucios.toString() : dias_sucios = '0';
        extra_m3 ? extra_m3.toString() : extra_m3 = '4.20';
        
        const repository = new mySqlCorteRepository();
        const model = new corteModels(repository);
        let corte = await model.refresh(base, dias_sucios, extra_m3); 

        return res.status(200).send({
            'message' : 'OK',
            corte
        })

        
    }

};




module.exports = controller; 
