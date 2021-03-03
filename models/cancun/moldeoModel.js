'use strict'

const preexpymoldeoBaseData = {
        message: 'PreexpYMoldeo',
        city: 'Cancun',
        base0: 100,
        dias_sucios:0,
        blocks_fe:0,
        amp:18.33,
        asistencia_total:4.8,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5,
        $_extra_m3: 7,
        colaboradores: {
            lunes: 0,
            martes: 1.2,
            miercoles: 1.2,
            jueves: 1.2,
            viernes: 1.2,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 321,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'VICTOR LAINES VELAZQUEZ',
                asistencia: {
                    lunes: 0,
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

module.exports = preexpymoldeoBaseData;
