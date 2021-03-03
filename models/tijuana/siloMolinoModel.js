'use strict'

const siloMolinoBaseData = {
        message: 'Silo Molino',
        city: 'Tijuana',
        base0: 2,
        dias_sucios:0,
        asistencia_total:18,
        dias: 6,
        factor_dias_laborados: 1,
        $_extra_m3: 25,
        colaboradores: {
            lunes: 3.9,
            martes: 3.9,
            miercoles: 3.9,
            jueves: 3.9,
            viernes: 2.4,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 30,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'JOSE MANUEL GARCIA',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ANASTACIO GARCIA MARTINEZ',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JUAN DIEGO GIL HERRERA',
                asistencia: {
                    lunes: 1.5,
                    martes: 1.5,
                    miercoles: 1.5,
                    jueves: 1.5,
                    viernes: 0,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = siloMolinoBaseData;
