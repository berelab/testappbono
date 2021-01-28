'use strict'

const placaBaseData = {
        message: 'Placa',
        city: 'Juarez',
        base0: 38,
        auditoria_sol: '100',
        dias: '6',
        desperdicio: .1699,
        factor_dias_laborados: '1.2',
        horas_por_turno: 9.6,
        asistencia: 25.20,
        $_extra_m3: '15.00',
        colaboradores: {
            lunes: 6,
            martes: 6,
            miercoles: 6,
            jueves: 7,
            viernes: 0,
            sabado: 0
        },
        m3_cortados: {
            lunes: 159.02,
            martes: 159.02,
            miercoles: 159.02,
            jueves: 159.02,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Mario Nava',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
                    miercoles: 0.5,
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
                nombre: 'Armando Jurado Zarate',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
                    miercoles: 0.5,
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
                nombre: 'Sergio Enriquez Apoliday',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
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
                nombre: 'Alejandro Samaniego',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
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
                nombre: 'Carlos Eduardo Hernandez',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
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
                nombre: 'Jonathan Yair Castillo',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.5,
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
                nombre: 'Briaan Salvador Lopez Solis',
                asistencia: {
                    lunes: 0.0,
                    martes: 0.0,
                    miercoles: 0.0,
                    jueves: 1.0,
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

module.exports = placaBaseData;
