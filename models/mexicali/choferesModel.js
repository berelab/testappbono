'use strict'

const choferesBaseData = {
        message: 'Choferes',
        city: 'Mexicali',
        base0: 200,
        dias_sucios:0,
        num_quejas:0,
        asistencia_total:16.80,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 1.7,
        colaboradores: {
            lunes: 3.6,
            martes: 3.6,
            miercoles: 2.4,
            jueves: 3.6,
            viernes: 3.6,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 916,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'WILBER DANIEL MEJIA GARCIA',
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
                nombre: 'PABLO ESPITIA MARTINEZ',
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
                nombre: 'MOISES AURELIO SOTO ALVAREZ',
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 0,
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
