'use strict'

const choferesLocalesBaseData = {
        message: 'EMCO',
        city: 'Monterrey',
        base0: 15,
        amp:90,
        dias_sucios: 90,
        num_quejas_cliente:0,
        asistencia_total: 6,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 15,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0,
            domingo: 0
        },
        m3_desplazados: {
            lunes: 71.15,
            martes: 0,
            miercoles:0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            domingo: 0
        },
        equipo: [
            {
                nombre: 'MARTIN MARTINEZ REYES',
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
            }
        ]
        
};

module.exports = choferesLocalesBaseData;
