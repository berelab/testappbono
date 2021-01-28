'use strict'

const choferesBaseData = {
        message: 'Choferes',
        city: 'Juarez',
        base0: 160,
        auditoria_sol: '90',
        dias: '6',
        asistencia: 2.80,
        factor_dias_laborados: '1.2',
        $_extra_m3: '4.50',
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 2,
            viernes: 3,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 182,
            martes: 182,
            miercoles: 182,
            jueves: 182,
            viernes: 182,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Raul Ramirez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Luis Alvarez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Victor Varela',
                asistencia: {
                    lunes: 0.5,
                    martes: 0.0,
                    miercoles: 0.0,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'German Flores',
                asistencia: {
                    lunes: 0.0,
                    martes: 0.5,
                    miercoles: 1.0,
                    jueves: 0.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
};

module.exports = choferesBaseData;
