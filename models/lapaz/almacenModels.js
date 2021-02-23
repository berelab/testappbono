'use strict'

class AlmacenModels {
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
            message: 'Almacén',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            factor_dias_laborados: '1.2',
            horas_por_turno: 9.5,
            asistencia: 1.2,
            colaboradores: {
                lunes: 1,
                martes: 1,
                miercoles: 1,
                jueves: 1,
                viernes: 1,
                sabado: 0
            },
            m3_desplazados: {
                lunes: 456.29,
                martes: 207.65,
                miercoles: 398.32,
                jueves: 100.31,
                viernes: 136.84,
                sabado: 0.00
            },
            equipo: [
                {
                    nombre: 'Andres Aguilar',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.0,
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
                    nombre: 'Jose Rodulfo Espinoza',
                    asistencia: {
                        lunes: 1.0,
                        martes: 0.5,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Alberto Peña',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Natalio Díaz',
                    asistencia: {
                        lunes: 0,
                        martes: 0.5,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Martin Verdugo',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Nehemias Diaz',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
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

module.exports = AlmacenModels;
