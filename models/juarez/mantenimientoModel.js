'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Juarez',
        dias: 6,
        areas: [
            'Corte Construccion',
            'Corte Maquila',
            'Preexpansion y Moldeo'
        ],
        montos_recibidos_area:[
            428.37, 
            80457.70,
            318.50

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
        asistencia_total: 19.20,
        colaboradores: {
            lunes: 4,
            martes: 4,
            miercoles: 4,
            jueves: 4,
            viernes: 4,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JUAN ALVAREZ POLO',
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
                nombre: 'CARLOS ROBLES',
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
                nombre: 'GUILLERMO TALAVERA',
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
                nombre: 'JESUS VEGA',
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
