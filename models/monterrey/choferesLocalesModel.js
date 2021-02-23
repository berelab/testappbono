'use strict'

const choferesLocalesBaseData = {
        message: 'Choferes Locales',
        city: 'Monterrey',
        base0: 90,
        dias_sucios:0,
        num_quejas_cliente:0,
        asistencia_total: 17,
        dias: 6,
        factor_dias_laborados: 1,
        $_extra_m3: 3.50,
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 2,
            viernes: 3,
            sabado: 3
        },
        m3_desplazados: {
            lunes: 186.34,
            martes: 186.34,
            miercoles:186.34,
            jueves: 186.34,
            viernes: 186.34,
            sabado: 186.34
        },
        equipo: [
            {
                nombre: 'MARTIN MARTINEZ REYES',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE ANGEL GOMEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JUAN ALBERTO SANCHEZ CASTILLO',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 0,
                    viernes: 1,
                    sabado: 1,
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = choferesLocalesBaseData;
