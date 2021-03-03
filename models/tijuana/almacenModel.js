'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'Tijuana',
        base0: 350,
        dias_sucios:0,
        dias: 6,
        factor_dias_laborados: 1,
        horas_por_turno: 10, 
        asistencia_total: 6, 
        $_extra_m3: 1.10,
        m3_cortados: {
            lunes: 315.22,
            martes: 548.80,
            miercoles: 643.5,
            jueves: 534.75,
            viernes: 626.81,
            sabado: 0
        },
        colaboradores: {
            lunes: 3.7,
            martes: 3.7,
            miercoles: 3.5,
            jueves: 2.7,
            viernes: 3.9,
            sabado: 1.5
        },
        equipo: [
            {
                nombre: 'BENJAMIN PEREZ VELAZQUEZ',
                num: 200648,
                asistencia: {
                    lunes: 1.5,
                    martes: 1.5,
                    miercoles: 1.5,
                    jueves: 1.5,
                    viernes: 1.5,
                    sabado:1.5,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'ANTONIO RIVAS',
                num: 200648,
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado:0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'RIVAS DUARTE GERARDO ABISAI',
                num: 200648,
                asistencia: {
                    lunes: 1,
                    martes: 1,
                    miercoles: 1,
                    jueves: 0,
                    viernes: 1.2,
                    sabado:0,
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
