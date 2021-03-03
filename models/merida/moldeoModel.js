'use strict'

const moldeoBaseData = {
        message: 'Moldeo',
        city: 'Merida',
        base0: 1000,
        dias_sucios:0,
        num_quejas_cliente:0,
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: .4,
        colaboradores: {
            lunes: 2.4,
            martes: 2.4,
            miercoles: 2.4,
            jueves: 2.4,
            viernes: 2.4,
            sabado: 0,
            domingo: 0
        },
        m3_desplazados: {
            lunes: 0,
            martes: 5000,
            miercoles:0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            domingo: 0
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
                    domingo: 0
                },
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
                    domingo: 0
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = moldeoBaseData;
