'use strict'

const mantenimientoBaseData = {
        message: 'Mantenimiento',
        city: 'Mexicali',
        sipo: 29,
        semana:{
            del:'13/07/2020',
            al:'19/07/2020'
        },
        dias: 6,
        pago: 700,
        pago_dia_comida: 50,
        equipo: [
            {
                nombre: 'RAFAEL BELTRAN MENDEZ',
                num: 502293,
                fecha_ingreso: '14/08/2019',
                asistencia: 5, 
                dias_comida:0,
                observaciones: '1 psg 10/07'
            },
            {
                nombre: 'MARTINES SICAIROS JORGE',
                num: 502287,
                fecha_ingreso: '05/08/2019',
                asistencia: 6, 
                dias_comida:1,
                observaciones: ''
            },
            {
                nombre: 'LARIOS COTA RAFAEL',
                num: 502201,
                fecha_ingreso: '01/04/2019',
                asistencia: 6, 
                dias_comida:2,
                observaciones: ''
            },
            {
                nombre: 'HERNANDEZ LIRA VALENTIN',
                num: 502020,
                fecha_ingreso: '03/07/2018',
                asistencia: 6, 
                dias_comida:0,
                observaciones: ''
            },
            {
                nombre: 'BENITEZ CARRASCO ENRIQUE',
                num: 502280,
                fecha_ingreso: '29/07/2019',
                asistencia: 6, 
                dias_comida:0,
                observaciones: ''
            },
            {
                nombre: 'LICON SANSON DAVID',
                num: 502236,
                fecha_ingreso: '15/05/2019',
                asistencia: 6, 
                dias_comida:0,
                observaciones: ''
            },
        ]
        
};

module.exports = mantenimientoBaseData;
