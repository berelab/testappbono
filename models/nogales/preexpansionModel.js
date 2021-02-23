'use strict'

const preexpansionBaseData = {
        message: 'PreExpansion',
        city: 'Nogales',
        dias: 4,
        equivalencia: 1.5,
        aprove_perla_corte: .95,
        aprove_perla_moldeo: .9796,
        quejas_clientes: 0,
        areas: [
            'corte',
            'moldeo de piezas'
        ],
        montos_recibidos_area:[
           330.29, 
            0
        ],
        participacion:[
            .50,
            .50
        ],
        asistencia_total: 30,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'RAMON ANTONIO GIL MEZA',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 1
            },
            {
                nombre: 'JOSE HERNANDEZ CRUZ',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 1
            }
        ]
        
        
        
};

module.exports = preexpansionBaseData;
