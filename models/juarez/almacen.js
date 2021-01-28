'use strict'

const almacenBaseData = {
        message: 'Almacén',
        city: 'Juarez',
        base0: 170,
        auditoria_sol: '100',
        dias: '6',
        factor_dias_laborados: '1.2',
        asistencia: 19.20,
        $_extra_m3: '2.50',
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 3,
            sabado: 1
        },
        m3_desplazados: {
            lunes: 359.55351,
            martes: 514.2563,
            miercoles: 249.02863,
            jueves: 329.1536,
            viernes: 81.26,
            sabado: 0.00
        },
        equipo: [
            {
                nombre: 'David Rodriguez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Mario Gurrola',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 1.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Cesar Balderas',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                horas_extra_dobles: 0,
                horas_extra_triples: 0,
                faltas : 0,
                retardos: 0
            },
        ]
};

module.exports = almacenBaseData;
