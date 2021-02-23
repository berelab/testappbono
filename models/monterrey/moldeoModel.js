'use strict'

const almacenBaseData = {
        message: 'Moldeo',
        city: 'Monterrey',
        base0: 50,
        dias_sucios: 92,
        num_quejas:0,
        dias: 6,
        factor_dias_laborados: 1.2,
        asistencia_total: 108, 
        $_extra_m3: 7.5,
        m3_cortados: {
            lunes: 1417,
            martes: 0,
            miercoles:  0,
            jueves: 0,
            viernes:  0,
            sabado: 0,
            domingo:0,
        },
        colaboradores: {
            lunes: 14,
            martes: 14,
            miercoles: 16,
            jueves: 17,
            viernes: 17,
            sabado: 7,
            domingo: 5
        },
        equipo: [
            {
                nombre: 'JUAN HERNANDEZ SAGAHON',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CATALINA GONZALEZ ROJAS',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LOURDES GONZALEZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LUZ YAZMIN VAZQUEZ CRUZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'LETICIA MARTELL',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MARLENE DIAS RAMIREZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 1,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'TEODORO REYNA LEOS',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ANGELICA SIERRA',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JUAN DIOS HUERTA GAMBOA',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE FIDENCIO',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ADRIANA ROJAS GALAN',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MA DE JESUS BELTRAN',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'SONIA ELIZABETH ESPINOZA LEYVA',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MINERVA RIVERA SANCHEZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'SAMUEL HERNANDEZ CELERNO',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MARIA FERNANDA BENITO',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CLAUDIA GISELL ORTIZ REYNA',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ISMAEL DE DIOS GUZMAN CRUZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                    domingo: 0,
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
