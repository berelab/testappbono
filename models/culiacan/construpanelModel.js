'use strict'

const construpanelBaseData = {
        message: 'Construpanel',
        city: 'Culiacan',
        base0: 300,
        dias_sucios:0,
        equipo_proteccion:'OK',
        desc_seguridad:'OK',
        asistencia_total: 14,
        dias: 6,
        factor_dias_laborados: 1,
        horas_por_turno:12,
        $_extra_m3: 3.5,
        colaboradores: {
            lunes: 2.8,
            martes: 2.8,
            miercoles: 2.8,
            jueves: 2.8,
            viernes: 2.8,
            sabado: 0,
            
        },
        m3_desplazados: {
            lunes: 1545,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            
        },
        tiempo_extra: {
            lunes: 0,
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
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
             {
                nombre: 'JOSE ENRIQUE COPEL VILLA',
                num:'',
                asistencia: {
                    lunes: 1.2,
                    martes: 1.2,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'BRAYAN FERNANDO LOPEZ RIVERA',
                num:'',
                asistencia: {
                    lunes: 0.4,
                    martes: 0.4,
                    miercoles: 0.4,
                    jueves: 0.4,
                    viernes: 0.4,
                    sabado: 0,
                   
                },
                faltas : 0,
                retardos: 0
            },
             
            
        
        ]
        
};

module.exports = construpanelBaseData;
