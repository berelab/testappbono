'use strict'

const traficoBaseData = {
    message: 'Trafico',
    city: 'Villahermosa',
    equipo: [
        {   
            nombre:'ENRIQUE AGUILAR MERCADO',
            limpieza_unidad: 'Si',
            semana:{
                lunes:{
                    local_m3:0,
                    foraneo_km:289
                },
                martes:{
                    local_m3:64.87,
                    foraneo_km:0,
                },
                miercoles:{
                    local_m3:0,
                    foraneo_km:514
                },
                jueves:{
                    local_m3:49.14,
                    foraneo_km:0,
                },
                viernes:{
                    local_m3:0,
                    foraneo_km:263
                },
                sabado:{
                    local_m3:0,
                    foraneo_km:0
                }
            }
        },
        {   
            nombre:'MIGUEL SELVAN OVANDO',
            limpieza_unidad: 'Si',
            semana:{
                lunes:{
                    local_m3:0,
                    foraneo_km:749
                },
                martes:{
                    local_m3:0,
                    foraneo_km:0,
                },
                miercoles:{
                    local_m3:0,
                    foraneo_km:0
                },
                jueves:{
                    local_m3:0,
                    foraneo_km:0,
                },
                viernes:{
                    local_m3:108.4,
                    foraneo_km:0
                },
                sabado:{
                    local_m3:0,
                    foraneo_km:0
                }
            }
        },
        {   
            nombre:'JESUS LOPEZ GONZALEZ',
            limpieza_unidad: 'Si',
            semana:{
                lunes:{
                    local_m3:0,
                    foraneo_km:749
                },
                martes:{
                    local_m3:72.1,
                    foraneo_km:0,
                },
                miercoles:{
                    local_m3:68.6,
                    foraneo_km:0
                },
                jueves:{
                    local_m3:106,
                    foraneo_km:0,
                },
                viernes:{
                    local_m3:0,
                    foraneo_km:750
                },
                sabado:{
                    local_m3:0,
                    foraneo_km:0
                }
            }
        },
        {   
            nombre:'JOSE ANTONIO PEREZ ORANTES',
            limpieza_unidad: 'No',
            semana:{
                lunes:{
                    local_m3:68.8,
                    foraneo_km:0
                },
                martes:{
                    local_m3:0,
                    foraneo_km:510,
                },
                miercoles:{
                    local_m3:6.4,
                    foraneo_km:0
                },
                jueves:{
                    local_m3:50.4,
                    foraneo_km:0,
                },
                viernes:{
                    local_m3:50.65,
                    foraneo_km:0
                },
                sabado:{
                    local_m3:0,
                    foraneo_km:0
                }
            }
        },

    ],
    pago_m3:3,
    pago_km:.90

};

module.exports = traficoBaseData;
