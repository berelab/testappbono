'use strict'

const cargasIPBaseData = {
        depto: 'CARGAS IP',
        ciudad: 'QUERETARO',
        cargas: [
            {
                fecha: '44026',
                doc:'7885266',
                nocliente:'597292',
                cliente:'GARCIA DIAZ ADOLFO',
                s1:'IMAE',
                descripcion:'INSULPANEL MURO,  ESP:2, MACH: Z',
                uds:74.24,
                volumen:3.771392,
                chofer:'CLIENTE RECOG',
                viaje:'CLIENTE RECOG',
                montos:100
            },
            {
                fecha: '44026',
                doc:'7885266',
                nocliente:'597235',
                cliente:'CEDAPSA SA DE CV',
                s1:'ITCE',
                descripcion:'INSULPANEL TECHO,  ESP:2, MACH:',
                uds:2.5,
                volumen:0.127,
                chofer:'CLIENTE RECOG',
                viaje:'CLIENTE RECOG',
                montos:50
            },

            {
                fecha: '44026',
                doc:'7885266',
                nocliente:'597589',
                cliente:'GRUPO ZATRA SA DE CV',
                s1:'ITCE',
                descripcion:'INSULPANEL TECHO,  ESP:3, MACH:',
                uds:614.51,
                volumen:46.825662,
                chofer:'UNIDAD RENTAD',
                viaje:'TRANS. ESPAR',
                montos:100
            },

            {
                fecha: '44026',
                doc:'7885266',
                nocliente:'597292',
                cliente:'CALVA SANTOYO CLARA IV',
                s1:'IMAE',
                descripcion:'INSULPANEL TECHO,  ESP:3, MACH:',
                uds:375.84,
                volumen:19.092672,
                chofer:'UNIDAD RENTAD',
                viaje:'TRANS. ESPAR',
                montos:100
            },


        ],
        monto_a_repartir:0,
        asist:12,
        pago_por_asistencia:0

};

module.exports = cargasIPBaseData;
