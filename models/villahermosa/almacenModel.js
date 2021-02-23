'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Villahermosa',
        base0: 300,
        dias_sucios:0,
        dias: 6,
        factor_dias_laborados: 1.2,
        asistencia_total: 6, 
        horas_por_turno:10,
        $_extra_m3: 1.6,
        m3_cortados: {
            lunes: 29.5,
            martes: 143.2,
            miercoles: 160.2,
            jueves: 330.0,
            viernes: 170.0,
            sabado: 0
        },
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'CESAR HERNANDEZ SANTANA',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
        ],
        horas_extras_semana: [
            {
                dia: 'lunes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'martes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'miercoles',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'jueves',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'viernes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'sabado',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            }
        
        ]
};

module.exports = almacenBaseData;
