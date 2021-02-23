'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Queretaro',
        dias: 6,
        areas: [
            'Corte',
            'Hielera',
            'Preexpansion y Moldeo'
        ],
        montos_recibidos_area:[
           1015.68, 
           2322.92,
           556.08
        ],
        rendimiento_agua: 'Amarillo',
        rendimiento_combustible: 'Verde',
        rendimiento_electricidad: 'Verde',
        faltas_uso_epp: 0,
        fugas_perla:0,
        fugas_vapor:0,
        fugas_aceite:0,
        fugas_aire:0,
        factor_dias_laborados:1,
        horas_por_turno:9.5,
        asistencia_total: 42,
        colaboradores: {
            lunes: 9,
            martes: 9,
            miercoles: 9,
            jueves: 9,
            viernes: 9,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'FABIAN ACHO ARCE',
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
                nombre: 'MARTINEANO VELAZQUEZ MARTINEZ',
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
                nombre: 'JOSE ANTONIO FERRUSCA MONTOYA',
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
                nombre: 'HONORIO MEDINA HERNANDEZ',
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
                nombre: 'LUIS SALINAS BECERRA',
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
                nombre: 'GUILLERMO VALENCIA CARRILLO',
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
                nombre: 'FELIX NAVARRO TORRES',
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
            
            
        ]
        
        
        
};

module.exports = mantenimientoBaseData;
