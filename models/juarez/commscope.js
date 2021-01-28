'use strict'

const commscopeBaseData = {
        message: 'Commscope',
        city: 'Juarez',
        base0: 15,
        auditoria_sol: '100',
        dias: '6',
        asistencia: 51.00,
        factor_dias_laborados: '1.2',
        horas_por_turno: 9.6,
        $_extra_m3: '12.00',
        colaboradores: {
            lunes: 10,
            martes: 10,
            miercoles: 12,
            jueves: 11,
            viernes: 0,
            sabado: 0
        },
        m3_cortados: {
            lunes: 168.22,
            martes: 168.22,
            miercoles: 168.22,
            jueves: 168.22,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Francisco Jesús Gómez Gómez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Ivan Castillo',
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
                nombre: 'Jesús Adasola',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Elizabeth Quiroz Vera',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.0,
                    miercoles: 1.0,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Aidee Sanchez Del Valle',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Juan Antonio Martínez Juarez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Enrique Sanchez Palacios',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Gerardo Antonio Hernandez Vazquez',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
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
                nombre: 'Guadalupe Del Valle Perez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Miguel Valles',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'Alma Delia Calderón',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
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
                nombre: 'Luis Guillermo Delgado Galvan',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
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
                nombre: 'José Leos',
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
            {
                nombre: 'Francisco Sanchez Palacios',
                asistencia: {
                    lunes: 0.0,
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

module.exports = commscopeBaseData;
