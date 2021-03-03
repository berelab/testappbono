'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Veracruz',
        dias: 6,
        areas: [
            'Corte',
            'Construpanel',
            'Preexpansion y Moldeo',
            'Moldeo',
            'EMCO',
        ],
        montos_recibidos_area:[
           962.63, 
           1730.37,
           1187.50,
           805.95,
           840.00
        ],
        rendimiento_agua: 'Azul',
        rendimiento_combustible: 'Azul',
        rendimiento_electricidad: 'Azul',
        faltas_uso_epp: 0,
        fugas_perla:0,
        fugas_vapor:0,
        fugas_aceite:0,
        fugas_aire:0,
        factor_dias_laborados:1.2,
        horas_por_turno:9.5,
        asistencia_total: 15,
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 3,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ANGEL CRUZ',
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
                nombre: 'JUAN NAVA',
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
                nombre: 'MODESTO URIEL SOSA',
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

module.exports = mantenimientoBaseData;
