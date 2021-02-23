'use strict'

const corteBaseData = {
        message: 'Corte',
        city: 'Villahermosa',
        base0: 100,
        auditoria_sol:100,
        dias: 6,
        amp: 98,
        num_quejas:0,
        rechazo_interno:0,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9, 
        asistencia_total: 24, 
        $_extra_m3: 2.2,
        m3_cortados: {
            lunes: 724.82,
            martes:0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 4,
            martes: 4,
            miercoles: 4,
            jueves: 4,
            viernes: 4,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ALFONSO GARCIA SANCHEZ',
                num: 200648,
                asistencia: {
                    lunes: 1.0,
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
                nombre: 'JOSE ESTEBAN NIEVES RANGEL',
                num: 200648,
                asistencia: {
                    lunes: 1.0,
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
                nombre: 'RICARDO CRUZ ESPINOSA',
                num: 200648,
                asistencia: {
                    lunes: 1.0,
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
                nombre: 'CHRISTIAN DE JESUS JIMENEZ',
                num: 200648,
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            }
            
        ]
};

module.exports = corteBaseData;
