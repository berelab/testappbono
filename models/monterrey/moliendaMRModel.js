'use strict'

const moliendaMRBaseData = {
        message: 'Molienda de MR',
        city: 'Monterrey',
        base0: 50,
        auditoria_sol: 100,
        asistencia_total: 24,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 6.5,
        colaboradores: {
            lunes: 4,
            martes: 4,
            miercoles: 4,
            jueves: 4,
            viernes: 4,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 121,
            martes: 121,
            miercoles: 121,
            jueves: 121,
            viernes: 121,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JOSE HERNANDEZ',
                asistencia: {
                    lunes: 1,
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
                nombre: 'HUGO CARRILLO',
                asistencia: {
                    lunes: 1,
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
                nombre: 'MANUEL FIGUEROA',
                asistencia: {
                    lunes: 1,
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
                nombre: 'ALBERTO MORALES',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            
        ]
        
};

module.exports = moliendaMRBaseData;
