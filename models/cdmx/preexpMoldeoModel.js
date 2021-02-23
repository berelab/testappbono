'use strict'

const preexpMoldeoBaseData = {
        message: 'PreexpYMoldeo',
        city: 'CDMX',
        base0: 55,
        dias_sucios:0,
        amp:.10,
        num_quejas:0,
        dias:6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5, 
        asistencia_total: 14.40, 
        $_extra_m3: 12,
        blocks_cortados: {
            lunes: 0,
            martes: 0,
            miercoles:0,
            jueves:0,
            viernes: 158,
            sabado: 0
        },
        colaboradores: {
            lunes: 0,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 3,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ANTONIO ALBERTO TOMAS',
                num: 200648,
                asistencia: {
                    lunes: 0,
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
                nombre: 'ERNESTO HERNANDEZ ROMERO',
                num: 200648,
                asistencia: {
                    lunes: 0,
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
                nombre: 'LUIS ANGEL LOPEZ CHAVEZ',
                num: 200648,
                asistencia: {
                    lunes: 0,
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
