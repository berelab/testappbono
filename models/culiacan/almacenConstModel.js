'use strict'

const almacenConstBaseData = {
        message: 'Almacen Const',
        city: 'Culiacan',
        base0: 300,
        dias_sucios:0,
        uso_equipo_seguridad:0,
        num_quejas:0,
        errores_carga:0,
        dias: 6,
        factor_dias_laborados: 1,
        horas_por_turno: 12, 
        asistencia_total: 4.6, 
        $_extra_m3: 2.2,
        m3_cortados: {
            lunes: 878.40,
            martes: 1259.0,
            miercoles: 131.8,
            jueves: 1368.4,
            viernes: 1424.2,
            sabado: 0
        },
        colaboradores: {
            lunes: 0.8,
            martes: 1.0,
            miercoles: 0.2,
            jueves: 1.2,
            viernes: 1.4,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JESUS ISRAEL OCHOA SARABIA',
                num: 200648,
                asistencia: {
                    lunes: 0.4,
                    martes: 0.5,
                    miercoles: 0.1,
                    jueves: 0.6,
                    viernes: 0.7,
                    sabado:0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'MARIO ANTONIO FLORES FLORES',
                num: 200648,
                asistencia: {
                    lunes: 0.4,
                    martes: 0.5,
                    miercoles: 0.1,
                    jueves: 0.6,
                    viernes: 0.7,
                    sabado:0,
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

module.exports = almacenConstBaseData;
