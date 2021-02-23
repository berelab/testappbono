'use strict'

const moldeoBaseData = {
        message: 'Moldeo',
        city: 'Nogales',
        base0: 100,
        desperdicio: .95,
        asistencia_total: 30.0,
        orden_limpieza:0,
        num_quejas:0,
        dias: 6,
        factor_dias_laborados: 1.5,
        horas_por_turno: 12,
        $_extra_m3: 4.00,
        colaboradores: {
            lunes: 5,
            martes: 7,
            miercoles: 7,
            jueves: 6,
            viernes: 2,
            sabado: 0
        },
        bultos_fabricados: {
            lunes: 242,
            martes:242,
            miercoles: 242,
            jueves: 242,
            viernes: 242,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JOSE GPE CORTEZ MARQUEZ',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MANUEL GILBERT BABICHI MOLINA',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JAVIER ORANTES HINOSTRO',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JESUS MENDEZ CORRALES',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ALEJANDRO HERNANDEZ FIGUEROA',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'BRAYAN SILVA AGUILAR',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'RICARDO ESPINOZA JOCOBI',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            }
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

module.exports = moldeoBaseData;
