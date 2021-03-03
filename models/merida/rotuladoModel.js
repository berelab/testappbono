'use strict'

const rotuladoBaseData = {
        message: 'Rotulado',
        city: 'Merida',
        base0: 1500,
        dias_sucios:0,
        rechazo_interno:0,
        asistencia_total:12,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 10,
        $_extra_m3: 0.65,
        colaboradores: {
            lunes: 2.4,
            martes: 2.4,
            miercoles: 2.4,
            jueves: 2.4,
            viernes: 2.4,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 1000,
            martes:1000,
            miercoles:3000,
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
                rotulador: 'SI',
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'GERARDO CORRALES',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                rotulador: 'NO',
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = rotuladoBaseData;
