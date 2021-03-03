'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Tijuana',
        dias: 6,
        areas: [
            'Corte',
            'Preexpansion y Moldeo',
        ],
        montos_recibidos_area:[
           1339.59, 
           235.64,
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
        asistencia_total: 6,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ALEXANDRO LOPEZ BONILLA',
                asistencia: {
                    lunes: 1.5,
                    martes: 1.5,
                    miercoles: 1.5,
                    jueves: 1.5,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LIMA MARTINEZ ROBERTO',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LARA GARCIA DELFINO',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CUEN TORRES RUBEN MANUEL',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
