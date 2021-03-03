'use strict'

const choferesBaseData = {
        message: 'Choferes',
        city: 'Veracruz',
        base0: 100,
        dias_sucios:0,
        num_quejas:0,
        asistencia_total:12,
        dias: 6,
        factor_dias_laborados: 1.2,
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
            miercoles: 650,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'JESUS EDUARDO CARRION LOPEZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ARTURO MONTOYA',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = choferesBaseData;
