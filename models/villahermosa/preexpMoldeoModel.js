'use strict'

const preexpMoldeoBaseData = {
        message: 'PreexpYMoldeo',
        city: 'Villahermosa',
        base0: 100,
        auditoria_sol:100,
        amp:90,
        blocks_fe:0,
        ltkg_preexpandido: 0.16,
        dias:6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 12, 
        asistencia_total: 12, 
        $_extra: 6,
        blocks_cortados: {
            lunes: 0,
            martes: 0,
            miercoles:0,
            jueves:0,
            viernes: 430,
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
                nombre: 'ALBERTO CRUZ ESPINOZA',
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
                nombre: 'ABRAHAM ELIAZ BOTELLO',
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
