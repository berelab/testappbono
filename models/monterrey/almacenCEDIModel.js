'use strict'

const almacenCEDIBaseData = {
        message: 'Almacen CEDI',
        city: 'Monterrey',
        base0: 100,
        auditoria_sol: 'Si',
        asistencia_total: 6,
        dias: 6,
        factor_dias_laborados: 1.2,
        $_extra_m3: .5,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0
        },
        m3_desplazados: {
            lunes: 153.09,
            martes: 153.09,
            miercoles: 153.09,
            jueves: 153.09,
            viernes: 153.09,
            sabado: 0
        },
        equipo: [
            {
                nombre: 'JOSE EDUARDO HERNANDEZ SALAZAR',
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
            }
        ]
        
};

module.exports = almacenCEDIBaseData;
