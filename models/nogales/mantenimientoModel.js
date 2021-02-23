'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Nogales',
        dias: 6,
        areas: [
            'Corte',
            'Preexpansion y Moldeo',
            'Bloquera'
        ],
        montos_recibidos_area:[
           203.46, 
           0.00,
           283.50
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
        asistencia_total: 16,
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 4,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'FRANCISCO ORTEGA DEL HOYO',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 1
            },
            {
                nombre: 'FRANCISCO CALVARIO CRUZ',
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
                nombre: 'VICTOR MEZA MELENDEZ',
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
                nombre: 'MARCOS MARTINEZ HERNANDEZ',
                asistencia: {
                    lunes: 0.0,
                    martes: 0.0,
                    miercoles: 0.0,
                    jueves: 0.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
