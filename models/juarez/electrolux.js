'use strict'

class Electrolux {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.find();
        } catch(error) {
            throw error;
        }

        return this._convertData(response);
    }

    async refresh(base, dias_sucios, extra_m3) {
        let response;

        try {
            response = await this.repository.update(base, dias_sucios, extra_m3);
        } catch(error) {
            throw error;
        }

        return response;
    }

    _convertData(response) {
        return {            
            message: 'Electrolux',
            city: 'Juarez',
            base0: response.base,
            $_extra_m3: response.extra,
            dias: '3.6',
            asistencia: 36.00,
            factor_dias_laborados: '1.2',
            colaboradores: {
                lunes: 6,
                martes: 10,
                miercoles: 12,
                jueves: 11,
                viernes: 0,
                sabado: 0,
            },
            produccion: {
                lunes: 5823.25,
                martes: 5823.25,
                miercoles: 5823.25,
                jueves: 5823.25,
                viernes: 0,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'Axel García García',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Yesenia Castro Avila',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 0.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Javier Valerio Pitalva',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Soledad Chavez Cruz',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Alma Pamela Estrada',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Amalia Ibarra Rios',
                    asistencia: {
                        lunes: 0.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Brisa Sanchez García',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jazmin Colorado Rivera',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 0.5,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 1,
                    retardos: 0
                },
                {
                    nombre: 'Marco Antonio Mendoza',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 0.5,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jazmin Lizeth Sanchez Tovar',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'José Luis Jimenez',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 1.0,
                        jueves: 0.5,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 1,
                    retardos: 0
                },
                {
                    nombre: 'David Chavez',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    faltas : 0,
                    retardos: 0
                },
            ]
        };
    }
};

module.exports = Electrolux;