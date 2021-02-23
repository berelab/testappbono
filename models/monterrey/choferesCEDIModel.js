'use strict'

const choferesLocalesBaseData = {
        message: 'Choferes CEDI',
        city: 'Monterrey',
        base0: 90,
        dias_sucios:0,
        num_quejas_cliente:0,
        asistencia_total: 6,
        dias: 6,
        factor_dias_laborados: 1,
        $_extra_m3: 3.50,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 1
        },
        m3_desplazados: {
            lunes: 104.84,
            martes: 104.84,
            miercoles:104.84,
            jueves: 104.84,
            viernes: 104.84,
            sabado: 104.84
        },
        equipo: [
            {
                nombre: 'Paul Guzman',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 1,
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = choferesLocalesBaseData;
