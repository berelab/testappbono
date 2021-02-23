'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Hermosillo',
        dias: 6,
        areas: [
            'Corte',
            'Insulpanel',
            'Moldeo'
        ],
        montos_recibidos_area:[
           6952.68, 
           991.76,
           650.31
        ],
        rendimiento_agua: 'Azul',
        rendimiento_combustible: 'Azul',
        rendimiento_electricidad: 'Azul',
        faltas_uso_epp: 0,
        fugas_perla:0,
        fugas_vapor:2,
        fugas_aceite:0,
        fugas_aire:0,
        factor_dias_laborados:1,
        horas_por_turno:9.5,
        asistencia_total: 41.40,
        colaboradores: {
            lunes: 6,
            martes: 6,
            miercoles: 6,
            jueves: 6,
            viernes: 6,
            sabado: 3
        },
        equipo: [
            {
                nombre: 'APOLINAR MORENO NORIEGA',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 1.8,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'VICTOR MANUEL CAZARES',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MARTIN MARTINEZ CORONADO',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'FERNANDO FIGUEROA ARAIZA',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 1.8,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CHRISTIAN JESUS PEREZ',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CHA DANIEL',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 1.8,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
