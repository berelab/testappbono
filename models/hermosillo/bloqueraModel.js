'use strict'


const bloqueraBaseData = {
        message: 'Bloquera',
        city: 'Hermosillo',
        base0: 80,
        dias_sucios: 0,
        bloques_fuera_especificacion: 0,
        Extra: 0,
        dias: 6,
        amp: .95,
        factor_dias_laborados: 1.2,
        horas_por_turno: 12,
        asistencia_total: 7.2, 
        $_extra_m3: 9.5,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 0,
            jueves: 2,
            viernes: 0,
            sabado: 0
        },
        blocks_moldeados: {
            lunes: 291,
            martes:0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JESUS MOLINA FIGUEROA',
                num: '100236',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 0.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extras: 13,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MANUEL TANORI ANDRADE',
                num: '100236',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 0.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extras: 0,
                faltas : 0,
                retardos: 0
            }
        ]
};

module.exports = bloqueraBaseData;
