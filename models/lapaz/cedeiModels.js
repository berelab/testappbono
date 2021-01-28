'use strict'

const cediBaseData = {
        message: 'CEDI',
        city: 'La Paz',
        base0: 100,
        dias_sucios: '0',
        dias: '6',
        factor_dias_laborados: '1.2',
        $_extra_m3: '5.50',
        asistencia_total: '6.00',
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 32.22,
            martes: 24.1462,
            miercoles: 22.7813,
            jueves: 41.7991,
            viernes: 46.08,
            sabado: 0.00
        },
        equipo: [
            {
                nombre: 'Osvaldo Rodriguez',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Manuel Cadena',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            }
        ]
};

module.exports = cediBaseData;
