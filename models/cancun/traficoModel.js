'use strict'

const traficoBaseData = {
        message: 'Trafico',
        city: 'Cancun',
        semana:{
            del:'11/03/2019',
            al:'17/03/2019'
        },
        bonos_por_viaje:{
            cancun: 60,
            playa_del_carmen:80,
            tulum: 100,
            chetumal:300
        }
        ,
        equipo: [
            {
                nombre: 'ALEJANDRO MORALES CASAGNON',
                num: '985134',
                auditoria_vehiculo:80,
                m3_desplazados:522,
                rendimientos:90,
                viajes: {
                    cancun: 6,
                    playa_del_carmen:2,
                    tulum: 0,
                    chetumal:0
                }
            },
            {
                nombre: 'ESPINOSA SANTIAGO SAMUEL',
                num: '985134',
                auditoria_vehiculo:100,
                m3_desplazados:270,
                rendimientos:100,
                viajes: {
                    cancun: 3,
                    playa_del_carmen:0,
                    tulum: 2,
                    chetumal:0
                }
            },
            {
                nombre: 'CORDOVA OLAN ARCIDES',
                num: '985134',
                auditoria_vehiculo:100,
                m3_desplazados:278,
                rendimientos:110,
                viajes: {
                    cancun: 4,
                    playa_del_carmen:0,
                    tulum: 2,
                    chetumal:0
                }
            },
            {
                nombre: 'CARLOS IGNACIO HERNANDEZ VALENCIA',
                num: '985134',
                auditoria_vehiculo:90,
                m3_desplazados:250,
                rendimientos:90,
                viajes: {
                    cancun: 2,
                    playa_del_carmen:2,
                    tulum: 1,
                    chetumal:1
                }
            },
             {
                nombre: 'HOY MORALES JAIR',
                num: '985134',
                auditoria_vehiculo:100,
                m3_desplazados:140,
                rendimientos:100,
                viajes: {
                    cancun: 3,
                    playa_del_carmen:0,
                    tulum: 0,
                    chetumal:0
                }
            },
        ]
        
       
        
};

module.exports = traficoBaseData;
