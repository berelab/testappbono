'use strict'

const aligeranteBaseData = {
        message: 'Aligerante',
        city: 'Juarez',
        base0: 31,
        auditoria_sol: '100',
        dias: '6',
        desperdicio: .1572,
        factor_dias_laborados: '1.2',
        horas_por_turno: 9.6,
        asistencia: 5.40,
        $_extra_m3: '16.00',
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 2,
            jueves: 1,
            viernes: 0,
            sabado: 0
        },
        m3_cortados: {
            lunes: 34.1025,
            martes: 34.1025,
            miercoles: 34.1025,
            jueves: 34.1025,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Alexis Yahir Mendez',
                asistencia: {
                    lunes: 0.0,
                    martes: 0.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Briaan Salvador Lopez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 0.5,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
        ]
};

module.exports = aligeranteBaseData;
