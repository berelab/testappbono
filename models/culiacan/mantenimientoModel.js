'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Culiacan',
        dias: 6,
        areas: [
            'Corte',
            'Preexpansion y Moldeo',
            'Construpanel'
        ],
        montos_recibidos_area:[
           2138.00, 
           2459.60,
           1267.50
        ],
        rendimiento_agua: 'Azul',
        rendimiento_combustible: 'Azul',
        rendimiento_electricidad: 'Azul',
        faltas_uso_epp: 0,
        fugas_perla:0,
        fugas_vapor:0,
        fugas_aceite:0,
        fugas_aire:0,
        factor_dias_laborados:1,
        horas_por_turno:9.5,
        asistencia_total: 40.80,
        colaboradores: {
            lunes: 7.2,
            martes: 8.4,
            miercoles: 8.4,
            jueves: 8.4,
            viernes: 8.4,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'VALENTIN SERNA SEPULVEDA',
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
                nombre: 'CARLOS EUSEBIO NERIZ TOLOZA',
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
                nombre: 'FRANCISCO ELEUTERIO LAGUNA GUERRA',
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
                nombre: 'JOEL SAUCEDA CORRALES',
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
                nombre: 'ULISES DANIEL VALENCIA SAUCEDA',
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
                nombre: 'MISAEL OSWALDO SERVIN ALVAREZ',
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
                nombre: 'JUAN CARLOS CORRALES CHAPARRO',
                asistencia: {
                    lunes: 0,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
