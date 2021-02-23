'use strict'


const bloqueraBaseData = {
        message: 'Bloquera',
        city: 'Nogales',
        base0: 100,
        dias_sucios: 0,
        bloques_fuera_especificacion: 0,
        Extra: 0,
        dias: 6,
        amp: 1,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5,
        asistencia_total: 6, 
        $_extra_m3: 7.5,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        blocks_moldeados: {
            lunes: 27.2,
            martes: 27.2,
            miercoles: 27.2,
            jueves: 27.2,
            viernes: 27.2,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JESUS CRUZ MARTINEZ',
                num: 0,
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            }
        ]
};

module.exports = bloqueraBaseData;
