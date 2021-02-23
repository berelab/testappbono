'use strict'

const insulpanelBaseData = {
        message: 'Insulpanel',
        city: 'Hermosillo',
        dias: 6,
        asistencia_total:26,
        m2_producidos:0,
        retardos_entrega:0,
        falla_calidad:0,
        limpieza:0,
        paros_produccion:1,
        equipo: [
            {
                nombre: 'REGINO ACUÑA GAMEZ',
                num: 200648,
                asistencia:10,
                nivel_dPdC:'3',
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'URIEL JIMENEZ',
                num: 200648,
                asistencia:6,
                nivel_dPdC:'NI',
                faltas : 0,
                retardos: 0
            },
            {
                nombre: 'JOSE MANUEL NAVARRO',
                num: 200648,
                asistencia:10,
                nivel_dPdC:'3',
                faltas : 0,
                retardos: 0
            },
        ]
};

module.exports = insulpanelBaseData;
