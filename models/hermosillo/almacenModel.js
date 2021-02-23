'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Hermosillo',
        base0: 400,
        dias_sucios:1,
        error_de_carga:0,
        dias: 6,
        factor_dias_laborados: 1,
        horas_por_turno: 9.6, 
        asistencia_total: 18, 
        $_extra_m3: .80,
        m3_cortados: {
            lunes: 568.6,
            martes: 568.6,
            miercoles: 568.6,
            jueves: 568.6,
            viernes: 568.6,
            sabado: 0
        },
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 3,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'LUIS ARMANDO SANCHEZ',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'IGNACIO DOMINGO CEBALLOS H',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE DE JESUS RUIZ',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0.0,
                },
                horas_extras:0,
                faltas : 0,
                retardos: 0
            },
        ]
};

module.exports = almacenBaseData;
