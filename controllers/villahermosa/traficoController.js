'use strict'

import{message, city, equipo, pago_m3, pago_km} from '../../models/villahermosa/traficoModel';
import mainCalcs from '../MainCalcs';

const controller ={
    home: (req,res) =>{
        return res.status(200).send({
            
        });
    },

    calculator: (req, res)=>{

        let arrayOfWeekdays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
        let weekdayName = arrayOfWeekdays[weekdayNumber];
        
        
        
        const calc = new mainCalcs(
            6,//dias
            null,//m3_cortados
            null,//colaboradores
            null,//asistencia_total
            weekdayName,
            equipo,
            pago_m3,//base,
            pago_km,//extram3,
            null,//dias_sucios,       
            null,//factor_dias_laborados,
            message,
            city,
        );

       let total_viaje_local_m3= calc.totalViajeLocalM3;
       let total_viaje_foraneo= calc.totalViajeForaneo;
       let productividad_local = calc.productividadLocal;
       let productividad_foraneo = calc.productividadForaneo;
       let cuidado_unidad = calc.cuidadoUnidad;
       let bono_a_pagar = calc.bonoAPagar;
       let bono_total = calc.bonoTotalConPenalizacion;
        
        
        if(req.params.index){
            let i = parseInt(req.params.index); 

            
            if(isNaN(i)){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'Index invalido',
                });
            }

            let len = equipo.length;
           

            if(i < 0 || i >= len ){
                return res.status(400).send({
                    status: 'error',
                    code:400,
                    message: 'No existe el colaborador',
                });
            }else{
                return res.status(200).send({
                    nombre: equipo[i].nombre,
                    depto: message,
                    day: weekdayName,
                    pago_m3: pago_m3,
                    pago_km: pago_km,
                    viajes_semana: equipo[i].semana,
                    total_viaje_local_m3:total_viaje_local_m3[i],
                    total_viaje_foraneo_km:total_viaje_foraneo[i],
                    productividad_local: productividad_local[i],
                    productividad_foraneo: productividad_foraneo[i],
                    cuidado_unidad: cuidado_unidad[i],
                    bono_persona: bono_a_pagar[i],
                });
               
            }
            
        
        }else{
            return res.status(200).send({
                
                depto: message,
                day: weekdayName,
                pago_m3: pago_m3,
                pago_km: pago_km,
                total_viaje_local_m3:total_viaje_local_m3,
                total_viaje_foraneo_km:total_viaje_foraneo,
                productividad_local: productividad_local,
                productividad_foraneo: productividad_foraneo,
                cuidado_unidad:cuidado_unidad,
                bono_persona: bono_a_pagar,
                bono_total:bono_total,
                equipo
            });
        }
        
    }


};
module.exports = controller; 