'use strict'

const corteBaseData = {
        message: 'Corte',
        city: 'Hermosillo',
        base0: 110,
        dias_sucios:0,
        dias: 6,
        amp: .0991,
        factor_dias_laborados: 1,
        horas_por_turno: 10, // no viene indicado.
        asistencia_total: 14.4, 
        $_extra_m3: 7.0,
        m3_cortados: {
            lunes: 562.62,
            martes: 562.62,
            miercoles: 0,
            jueves: 562.62,
            viernes: 562.62,
            sabado: 0
        },
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 0,
            jueves: 3,
            viernes: 3,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'HERIBIO NAVARRO JIMENEZ',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 0.0,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:2,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'FRANCISCO CORDOVA BRACAMONTES',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 0.0,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:2,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'FRANCISCO RIVERA MARTINEZ',
                num:200793,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 0.0,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            }
        ]
};

module.exports = corteBaseData;
