'use strict'

const kbrsBaseData = {
        message: 'Kbrs',
        city: 'Juarez',
        base0: 6,
        auditoria_sol: '100',
        dias: '6',
        asistencia: 92.40,
        factor_dias_laborados: '1.2',
        $_extra_m3: '45.00',
        colaboradores: {
            lunes: 13,
            martes: 16,
            miercoles: 16,
            jueves: 16,
            viernes: 16,
            sabado: 0
        },
        piezas_terminadas: {
            lunes: 50,
            martes: 50,
            miercoles: 50,
            jueves: 50,
            viernes: 50,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'Claudia Margarita Salomón',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Rosendo Samaniego Longoria',
                asistencia: {
                    lunes: 0.0,
                    martes: 0.0,
                    miercoles: 0.0,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Jose Perez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Nora Bertha Alicia Ramos Lopez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Eduardo Medina Rabango',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Ramón Montelongo',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Manuel De Jesus Medina Villa',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Angel Joel Quiroz Gutierrez',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 1,
                retardos: 0
            },
            {
                nombre: 'Ernesto Lopez',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Sandra Campa Barrón',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Guillermo Carrasco',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 1,
                retardos: 0
            },
            {
                nombre: 'Guadalupe Avila Flores',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Jose Juan Hernandez',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Fabián De Jesus Colorado',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Martin Javier Quiñones',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Maria Jean Aguilar',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'Jose Perfecto Capiz Peña',
                asistencia: {
                    lunes: 0.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0.0,
                },
                faltas : 1,
                retardos: 0
            },
            {
                nombre: 'Luis Jesús Campa Barrón',
                asistencia: {
                    lunes: 1.0,
                    martes: 0.0,
                    miercoles: 0.0,
                    jueves: 0.0,
                    viernes: 0.0,
                    sabado: 0.0,
                },
                faltas : 4,
                retardos: 0
            },
        ]
        
};

module.exports = kbrsBaseData;
