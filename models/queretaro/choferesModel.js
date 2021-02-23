'use strict'

const choferesBaseData = {
        message: 'Choferes',
        city: 'Queretaro',
        base0: 130,
        dias_sucios:0,
        num_quejas_cliente:0,
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1,
        $_extra_m3: 3.0,
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 0,
            viernes: 2,
            sabado: 2
        },
        m3_desplazados: {
            lunes: 1800,
            martes: 0,
            miercoles:0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ARTURO HERRERA DE JESUS',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 0,
                    viernes: 1.2,
                    sabado: 1.2,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE ESTEBAN LUNA LEDEZMA',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 0,
                    viernes: 1.2,
                    sabado: 1.2,
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = choferesBaseData;
