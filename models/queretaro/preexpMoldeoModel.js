'use strict'

const preexpMoldeoBaseData = {
        message: 'PreexpYMoldeo',
        city: 'Queretaro',
        base0: 100,
        dias_sucios:0,
        amp:95,
        blocks_fe:0,
        extra: 0,
        dias:6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 12, 
        asistencia_total: 12, 
        $_extra: 7.25,
        blocks_cortados: {
            lunes: 318,
            martes: 0,
            miercoles:0,
            jueves:0,
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
                nombre: 'SERGIO CRUZ ESPINOZA',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'EMMANUEL ELIAZ BOTELLO',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
           
           
        ]
};

module.exports =  preexpMoldeoBaseData;
