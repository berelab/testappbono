'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'CDMX',
        dias: 6,
        areas: [
            'Corte',
            'Vitro',
            'Preexpansion y Moldeo',
            'Corte Maq'
        ],
        montos_recibidos_area:[
           363.92, 
           0,
           130,
           0
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
        asistencia_total: 20,
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
                nombre: 'MALDONADO FACIO ARMANDO',
                asistencia: {
                    lunes: 0,
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
                nombre: 'RUIZ ORTEGA AURELIO',
                asistencia: {
                    lunes: 1,
                    martes: 0,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'POLEZ CHAVEZ RAYMUNDO',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 0,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'OLMOS JIMENEZ FLORENTINO',
                asistencia: {
                    lunes: 1,
                    martes:1,
                    miercoles: 1,
                    jueves: 0,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LARA PINEDA EMMANUEL',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            }
            
            
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
