'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Cancun',
        base0: 125,
        dias_sucios:0,
        diferencia_inv:1,
        asistencia_total:12,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 1.5,
        colaboradores: {
            lunes: 0,
            martes: 2.4,
            miercoles: 2.4,
            jueves: 2.4,
            viernes: 2.4,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 1450,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'JAIR HOY MORALES',
                asistencia: {
                    lunes: 0,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JUAN REYES GARCIA',
                asistencia: {
                    lunes: 0,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = almacenBaseData;
