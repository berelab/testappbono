'use strict'

const aosmithBaseData = {
        message: 'AOS Mith',
        city: 'Juarez',
        base0: 1640,
        auditoria_sol: '100',
        dias: '4.8',
        asistencia: 4.20,
        he_dobles: 0,
        he_triples: 0,
        factor_dias_laborados: '1.2',
        $_extra_m3: '0.33',
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 0,
            sabado: 0
        },
        piezas_terminadas: {
            lunes: 825,
            martes: 825,
            miercoles: 825,
            jueves: 825,
            viernes: 0,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Alma Delia Calderón',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 0.5,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Miguel Valles',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
                faltas : 0,
                retardos: 0
            },
        ]
        
};

module.exports = aosmithBaseData;
