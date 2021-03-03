'use strict'

const rotuladoBaseData = {
        message: 'Rotulado',
        city: 'Mexicali',
        base0: 600,
        dias_sucios:0,
        amp:0,
        epp:0,
        asistencia_total:1,
        dias: 1,
        factor_dias_laborados: 1,
        $_extra_m3: .47,
        colaboradores: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 1,
            viernes: 0,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 1600,
            viernes: 0,
            sabado: 0,
        },
        equipo: [
            {
                nombre: 'JESUS LARA',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 1,
                    viernes: 0,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = rotuladoBaseData;
