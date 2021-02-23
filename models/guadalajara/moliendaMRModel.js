'use strict'

const moliendaMRBaseData = {
        message: 'Molienda de MR',
        city: 'Guadalajara',
        base0: 155,
        auditoria_sol: 'No',
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 3.3,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 688,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JOSE EDUARDO HERNANDEZ SALAZAR',
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
                nombre: 'HUGO CARRILLO AVILA',
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
            }
            
        ]
        
};

module.exports = moliendaMRBaseData;
