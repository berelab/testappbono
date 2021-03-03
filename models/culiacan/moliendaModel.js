'use strict'

const moliendaBaseData = {
        message: 'Molienda',
        city: 'Culiacan',
        base0: 1500,
        dias_sucios:0,
        epp:'OK',
        asistencia_total: 12,
        dias: 6,
        factor_dias_laborados: 1,
        horas_por_turno:12,
        $_extra_m3: .4,
        colaboradores: {
            lunes: 1,
            martes: 1,
            miercoles: 1,
            jueves: 1,
            viernes: 1,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 3345,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        equipo: [
            {
                nombre: 'IVAN IBARRA CASTRO',
                num:'',
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
            
        
        ]
        
};

module.exports = moliendaBaseData;
