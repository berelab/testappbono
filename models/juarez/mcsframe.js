'use strict'

class Mcsframe {
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
            message: 'Mcs Frame',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            factor_dias_laborados: '1.2',
            horas_por_turno: 9.6,
            asistencia: 30,
            colaboradores: {
                lunes: 5,
                martes: 5,
                miercoles: 5,
                jueves: 5,
                viernes: 5,
                sabado: 0
            },
            m3_cortados: {
                lunes: 1.55,
                martes: 1.55,
                miercoles: 1.55,
                jueves: 1.55,
                viernes: 1.55,
                sabado: 0.00
            },
            equipo: [
                {
                    nombre: 'Jose Leos',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Cecilia Silva',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Elizabeth Quiroz Vera',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Luis Guillermo Delgado Galvan',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Guadalupe del Valle Perez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Francisco Sanchez Palacios',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                }
            ]
        };
    }
};

module.exports = Mcsframe;