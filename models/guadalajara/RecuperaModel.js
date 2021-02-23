'use strict'

const recuperaBaseData = {
        message: 'Recupera',
        city: 'Guadalajara',
        base0: 10,
        dias_sucios:0,
        num_quejas:0,
        boletas_pnc:0,
        dias: 1.2,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5, 
        asistencia_total: 1.2, 
        $_extra_m3: 18,
        m3_cortados: {
            lunes: 154,
            martes:0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 1,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ERIKA SALINAZ VAZQUEZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            }
        ]
};

module.exports = recuperaBaseData;
