'use strict'

const almacenBaseData = {
        message: 'Almacen',
        city: 'CDMX',
        base0: 100,
        auditoria_sol: 96,
        dif_inventario:0,
        uso_equipo_seg:0,
        dias:6,
        factor_dias_laborados: 1.2,
        horas_por_turno: 9.5, 
        asistencia_total: 12, 
        $_extra_m3: 5.8,
        m3_cortados: {
            lunes: 0,
            martes: 0,
            miercoles:0,
            jueves:0,
            viernes: 430,
            sabado: 0
        },
        colaboradores: {
            lunes: 2,
            martes: 2,
            miercoles: 2,
            jueves: 2,
            viernes: 2,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'ALBERTO CRUZ ESPINOZA',
                num: 200648,
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
                nombre: 'ABRAHAM ELIAZ BOTELLO',
                num: 200648,
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

module.exports =  almacenBaseData;
