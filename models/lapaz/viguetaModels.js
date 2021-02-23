'use strict'

const viguetaBaseData = {
        message: 'Vigueta',
        city: 'La Paz',
        dias_laborados: 6,
        auditoria_sol: 100,
        pago_dia: 120.00,
        equipo: [
            {
                nombre: 'Martin Verdugo',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 0,
                    jueves: 0.50,
                    viernes: 0,
                    sabado: 0,
                },
            },
            {
                nombre: 'Natalio Díaz',
                asistencia: {
                    lunes: 1.0,
                    martes: 0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0,
                },
            },
            {
                nombre: 'Alberto Peña',
                asistencia: {
                    lunes: 1.0,
                    martes: 1.0,
                    miercoles: 1.0,
                    jueves: 1.0,
                    viernes: 1.0,
                    sabado: 0,
                },
            },
            {
                nombre: 'Andres Aguilar',
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 0,
                    jueves: 0,
                    viernes: 0,
                    sabado: 0,
                },
            }
        ]
};

module.exports = viguetaBaseData;
