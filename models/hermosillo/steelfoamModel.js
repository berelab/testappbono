'use strict'

const steelfoamBaseData = {
        message: 'Steelfoam',
        city: 'Hermosillo',
        base0: 12,
        auditoria_sol:100,
        dias: 4.8,
        rechazo_interno:0,
        amp:0,
        factor_dias_laborados: 1,
        horas_por_turno: 9.6, 
        asistencia_total: 4.8, 
        $_extra_m2: 4.0,
        m2_cortados: {
            lunes: 37.06,
            martes: 37.06,
            miercoles: 0,
            jueves: 37.06,
            viernes: 37.06,
            sabado: 0
        },
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 0,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JESUS DAVID LEAL TANORI',
                num: 200648,
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

module.exports = steelfoamBaseData;
