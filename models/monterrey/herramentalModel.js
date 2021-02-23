'use strict'

const herramentalBaseData = {
        message: 'Herramental',
        city: 'Monterrey',
        fugas:30,
        dias_sucios: 80,
        asistencia_total: 22,
        dias: 6,
        factor_dias_laborados: 1.2,
        colaboradores: {
            lunes: 4,
            martes: 4,
            miercoles: 4,
            jueves: 4,
            viernes: 6,
            sabado: 0
        },
        rangos: {
            r1: '>4',
            r2: '3-3.99',
            r3: '2-2.99',
            r4: '<2',
        },
        pago_por_rango: {
            r1: -250,
            r2: 100,
            r3: 150,
            r4: 250,
        },
        frecuencias: {
            r1: 0,
            r2: 0,
            r3: 2,
            r4: 8,
        },
        equipo: [
            {
                nombre: 'PEDRO CEDILLO',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ANGEL OMAR SALCEDO ROGRIGUEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'OMAR DE JESUS  CORTEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CRISTIAN DOLORES HERNANDEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'SAMUEL MORALES HERNANDEZ',
                asistencia: {
                    lunes: 0,
                    martes:0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'STEFANO MICHEL ORTEGA CARRILLO',
                asistencia: {
                    lunes: 0,
                    martes:0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 1,
                    sabado: 0
                },
                faltas : 0,
                retardos: 0
            },
            
        ]
        
};

module.exports = herramentalBaseData;
