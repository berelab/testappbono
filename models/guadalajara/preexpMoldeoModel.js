'use strict'

const preexpMoldeoBaseData = {
        message: 'PreexpYMoldeo',
        city: 'Guadalajara',
        base0: 120,
        dias_sucios:1,
        amp:98,
        blocks_fe:0,
        dias: 4.5,
        factor_dias_laborados: 1.5,
        horas_por_turno: 12, 
        asistencia_total: 12, 
        $_extra: 7,
        blocks_cortados: {
            lunes: 0,
            martes: 214.67,
            miercoles:214.67,
            jueves: 214.67,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 0,
            martes: 2,
            miercoles: 3,
            jueves: 3,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'FLORES SALVADOR RUBIO',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ALFONSO JUAREZ ORTEGA',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE DANIEL ORTIZ ESTRADA',
                num: 200648,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            }
           
        ]
};

module.exports =  preexpMoldeoBaseData;
