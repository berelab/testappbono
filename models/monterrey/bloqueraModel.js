'use strict'

const bloqueraBaseData = {
        message: 'Bloquera',
        city: 'Monterrey',
        base0: 110,
        amp:95,
        dias_sucios: 90,
        blocks_fe:0,
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 6,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0,
            domingo: 0
        },
        m3_desplazados: {
            lunes: 138,
            martes: 138,
            miercoles:138,
            jueves: 138,
            viernes: 138,
            sabado: 0,
            domingo: 0
        },
        equipo: [
            {
                nombre: 'JOSE FERNANDO PEREZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JAIRO MARTINEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            }
            
        ]
        
};

module.exports = bloqueraBaseData;
