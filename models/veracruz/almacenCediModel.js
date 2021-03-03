'use strict'

const almacenBaseData = {
        message: 'Almacen CEDI',
        city: 'Veracruz',
        base0: 100,
        limpieza_unidades: 'Si',
        asistencia_total:4.8,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: 0.5,
        colaboradores: {
            lunes: 0,
            martes: 1.2,
            miercoles: 1.2,
            jueves: 1.2,
            viernes: 1.2,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 0,
            martes: 0,
            miercoles: 50,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'JOSE CIRO CARMONA',
                asistencia: {
                    lunes: 0,
                    martes: 1,
                    miercoles: 1,
                    jueves: 1,
                    viernes: 1,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            }
        ]
        
};

module.exports = almacenBaseData;
