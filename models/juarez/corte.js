'use strict'

const corteBaseData = {
        message: 'Corte',
        city: 'Juarez',
        base0: 155,
        auditoria_sol: '100',
        dias: '6',
        desperdicio: .96,
        factor_dias_laborados: '1.2',
        horas_por_turno: 9.6,
        asistencia: 4.20,
        $_extra_m3: '3.20',
        colaboradores: {
            lunes: 2,
            martes: 1,
            miercoles: 0,
            jueves: 1,
            viernes: 0,
            sabado: 0
        },
        m3_cortados: {
            lunes: 103.68,
            martes: 103.68,
            miercoles: 0,
            jueves: 103.68,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Remedio Herrera García',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 0.0,
                    jueves: 0.5,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Francisco Sanchez',
                asistencia: {
                    lunes: 1.0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
        ]
};

module.exports = corteBaseData;
