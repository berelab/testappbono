'use strict'

const corteBaseData = {
        message: 'Corte',
        city: 'Nogales',
        base0: 100,
        auditoria_sol: 0,
        num_quejas_cliente: 0,
        rechazo_interno: 0,
        dias: '6',
        desperdicio: .104,
        factor_dias_laborados: 1.2,
        horas_por_turno: 10,
        asistencia_total: 33.60, 
        $_extra_m3: 6.8,
        colaboradores: {
            lunes: 4,
            martes: 6,
            miercoles: 6,
            jueves: 6,
            viernes: 6,
            sabado: 0
        },
        m3_cortados: {
            lunes: 166.40,
            martes: 166.40,
            miercoles: 166.40,
            jueves: 166.40,
            viernes: 166.40,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JULIAN ENCINAS SANCHES',
                num: 200648,
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 1
            },
            {
                nombre: 'JUAN PABLO MARTINEZ LEYVA',
                num:200663,
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
                nombre: 'LORENZO DOROTEO  MALDONADO',
                num:200793,
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
                nombre: 'RAMIRO SALSAMEA',
                num: 200000,
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
                nombre: 'JESUS  MANUEL PESQUIERA CHAIDES',
                num: 200801,
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
                nombre: 'ALBERTO PESQUIERA CHAIDEZ',
                num: 200802,
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
