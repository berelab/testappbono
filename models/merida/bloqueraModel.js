'use strict'

const bloqueraBaseData = {
        message: 'Bloquera',
        city: 'Merida',
        base0: 190,
        dias_sucios:0,
        blocks_fe:0,
        amp:96,
        asistencia_total:12,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 10,
        $_extra_m3: 7.5,
        colaboradores: {
            lunes: 2.4,
            martes: 2.4,
            miercoles: 2.4,
            jueves: 2.4,
            viernes: 2.4,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles:520,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'ALEJANDRO HERRERA',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                horas_extras: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'GERARDO CORRALES',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                horas_extras: 0,
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = bloqueraBaseData;
