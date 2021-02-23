'use strict'

const corteConstBaseData = {
        message: 'Vitro',
        city: 'CDMX',
        base0: 20,
        dias_sucios:0,
        dias: 6,
        num_quejas:0,
        factor_dias_laborados: 1,
        horas_por_turno: 9.5, 
        asistencia_total: 5, 
        $_extra_m3: 8.5,
        m3_cortados: {
            lunes: 450,
            martes:0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ALEX LEON HERNANDEZ',
                num: 200648,
                asistencia: {
                    lunes:  1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            }
            
        ]
};

module.exports = corteConstBaseData;
