'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Merida',
        base0: 450,
        dias_sucios:0,
        dias: 6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 10, 
        asistencia_total: 6, 
        $_extra_m3: 1,
        m3_cortados: {
            lunes: 0,
            martes: 1500,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0
        },
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'RAUL CABRERA',
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
            }
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
