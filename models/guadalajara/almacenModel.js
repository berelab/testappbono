'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Guadalajara',
        base0: 710,
        dias_sucios:0,
        num_quejas:0,
        uso_equipo_seg:0,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5, 
        asistencia_total: 18, 
        $_extra_m3: .85,
        m3_cortados: {
            lunes: 4294,
            martes:0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 3,
            martes: 3,
            miercoles: 3,
            jueves: 3,
            viernes: 3,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'OSCAR DAVID VALLE RIVERA',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'EDUARDO SANCHEZ RODRIGO',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'BRIAN ALEJANDRO SANCHEZ',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
        ],
        horas_extras_semana: [
            {
                dia: 'lunes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'martes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'miercoles',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'jueves',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'viernes',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            },
            {
                dia: 'sabado',
                horas_extras:{
                    horas_extras_dobles: 0,
                    horas_extras_triples: 0,
                }
            }
        
        ]
};

module.exports = almacenBaseData;
