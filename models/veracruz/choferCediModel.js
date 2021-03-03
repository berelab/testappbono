'use strict'

const choferCediBaseData = {
        message: 'Choferes CEDI',
        city: 'Veracruz',
        base0: 100,
        dias_sucios:0,
        num_quejas:0,
        asistencia_total: 6,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 1.3,
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
            miercoles: 350,
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
            }
        ]
        
};

module.exports = choferCediBaseData;
