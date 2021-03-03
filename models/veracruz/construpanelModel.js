'use strict'

const construpanelBaseData = {
        message: 'Construpanel',
        city: 'Veracruz',
        base0: 400,
        dias_sucios:0,
        num_quejas:0,
        rechazo_interno:0,
        desperdicio_alambre:5,
        desperdicio_placa:0,
        equipo_proteccion:0,
        asistencia_total:12,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.6,
        $_extra_m3: 3,
        colaboradores: {
            lunes: 2.4,
            martes: 2.4,
            miercoles: 2.4,
            jueves: 2.4,
            viernes: 2.4,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 1848.71,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'MARCO ANTONIO VALLEJO',
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
            },
            {
                nombre: 'ADRIAN LOPEZ',
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
            },
           
        ]
        
};

module.exports = construpanelBaseData;
