'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Monterrey',
        base0: 550,
        dias_sucios: 95,
        num_quejas:0,
        dias: 6,
        factor_dias_laborados: 1.2,
        asistencia_total: 31.20, 
        $_extra_m3: 1.5,
        m3_cortados: {
            lunes: 1055.27,
            martes: 1055.27,
            miercoles:  1055.27,
            jueves: 1055.27,
            viernes:  1055.27,
            sabado: 0
        },
        colaboradores: {
            lunes: 5,
            martes: 5,
            miercoles: 5,
            jueves: 5,
            viernes: 5,
            sabado: 1
        },
        equipo: [
            {
                nombre: 'ROBERTO VALENTINO GUARDIOLA',
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
            {
                nombre: 'JESUS ORTIZ CASTANEDA',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'AMGEL ELIAS ZAPATA CORVERA',
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
            {
                nombre: 'MOISES LEIVYA BALCAZAR',
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
            {
                nombre: 'JOSE GUADALUPE RANGEL GARCIA',
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
