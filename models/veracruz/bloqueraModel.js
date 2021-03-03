'use strict'

const bloqueraBaseData = {
        message: 'Bloquera',
        city: 'Veracruz',
        base0: 115,
        dias_sucios:82.75,
        blocks_fe:0,
        amp:35,
        asistencia_total:6,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5,
        $_extra_m3: 10,
        colaboradores: {
            lunes: 1.2,
            martes: 1.2,
            miercoles: 1.2,
            jueves: 1.2,
            viernes: 1.2,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles:210,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'ALEJANDRO HERRERA',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                horas_extras: 0,
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = bloqueraBaseData;
