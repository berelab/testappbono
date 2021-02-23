'use strict'

const preexpansionBaseData = {
        message: 'PreExpansion',
        city: 'Monterrey',
        amp:'VERDE',
        dias_sucios: 0,
        dias: 6,
        factor_dias_laborados: 1.2,
        num_quejas_cliente:0,
        horas_por_turno:10,
        asistencia_total: 10,
        areas: [
            'corte',
            'moldeo'
        ],
        kg_preexpandidos:[
           20800, 
           18200
        ],
        bono_area:[
            1594.62, 
            215.52
         ],
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0,
            domingo: 0
        },
        equipo: [
            {
                nombre: 'BRANDON PAUL RAMIREZ',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                    domingo:0.0
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'GUADALUPE LARA MARTINEZ',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                    domingo:0.0
                },
                faltas : 0,
                retardos: 0
            },
           
        ]
        
        
        
};

module.exports = preexpansionBaseData;
