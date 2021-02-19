'use strict'

class CorteModels {
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
        // return response;

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
            message: 'Corte',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            factor_dias_laborados: '1.2',
            asistencia_total: '18.00',
            amp: '96.98',
            colaboradores: {
                lunes: 3,
                martes: 3,
                miercoles: 3,
                jueves: 3,
                viernes: 3,
                sabado: 3
            },
            m3_cortados: {
                lunes: 328.32,
                martes: 81.93,
                miercoles: 284.16,
                jueves: 209.77,
                viernes: 387.56,
                sabado: 0.00
            },
            equipo: [
                {
                    nombre: 'Martín Chan',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jorge Paniagua',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Nehemias Díaz',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0,
                    },
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
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Natalio Díaz',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
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
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Andrés Aguilar',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                }
                
            ]
        };
    }
};

module.exports = CorteModels;
