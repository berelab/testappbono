'use strict'

const rotuladoHielera1BaseData = {
        message: 'Rotulado Hielera 1',
        city: 'Monterrey',
        base0: 200,
        dias_sucios: 100,
        amp:0,
        dias: 2,
        factor_dias_laborados: 2.4,
        asistencia_total: 4, 
        $_extra_m3: 0.5,
        m3_cortados: {
            lunes: 1040,
            martes: 1225,
            miercoles:  0,
            jueves: 0,
            viernes:  0,
            sabado: 0,
            domingo:0,
        },
        colaboradores: {
            lunes: 1.5,
            martes:1.5,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            domingo: 0
        },
        equipo: [
            {
                nombre: 'MARY BELTRAN',
                num: 200648,
                rotulador: 'NO',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'CATALINA GONZALEZ ROJAS',
                num: 200648,
                rotulador: 'SI',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                    domingo: 0,
                },
                faltas : 0,
                retardos: 0
            },
            
        ]
};

module.exports = rotuladoHielera1BaseData;
