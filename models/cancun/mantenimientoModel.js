'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Cancun',
        dias: 6,
        areas: [
            'Corte',
            'Moldeo',
        ],
        montos_recibidos_area:[
           995.22, 
           246.17,
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
                nombre: 'CRHISTIAN LEMUS ZUÑIGA',
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
                nombre: 'CARLOS MARTINEZ GOMEZ',
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
                nombre: 'MARCO VELASCO RAMIREZ',
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
                nombre: 'MANTTO ROQUE AUXILIAR',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
