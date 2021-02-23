'use strict'

const choferesBaseData = {
        message: 'Choferes',
        city: 'Hermosillo',
        base0: 250,
        dias_sucios:0,
        num_quejas_cliente:0,
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 1.60,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 355.8,
            martes:355.8,
            miercoles:355.8,
            jueves: 355.8,
            viernes: 355.8,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'EDGARDO JICOBAMEA',
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
                nombre: 'MISAEL LAUTERIO',
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

module.exports = choferesBaseData;
