'use strict'

const empaquePerlaBaseData = {
        message: 'Empaque Perla',
        city: 'Cancun',
        semana:{
            del:'11/03/2019',
            al:'17/03/2019'
        },
        dias: 2.4,
        base0: 1203,
        dias_sucios:0,
        amp:0, 
        asistencia_total:2.4,
        factor_dias_laborados: 1,
        $_extra_m3: .45,
        colaboradores: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 1,
            viernes: 1,
            sabado: 0,
            
        },
        produccion_kg: {
           bolsa_grande: 800,
           bolsa_chica:0
            
        },
        equipo: [
            {
                nombre: 'JESUS GARCIA',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
             
        ]
        
       
        
};

module.exports = empaquePerlaBaseData;
