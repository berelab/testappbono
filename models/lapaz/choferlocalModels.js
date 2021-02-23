'use strict'

class ChoferModels {
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
            message: 'Chofer Local',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            factor_dias_laborados: '1.2',
            asistencia_total: '6.00',            
            colaboradores: {
                lunes: 1,
                martes: 1,
                miercoles: 1,
                jueves: 1,
                viernes: 1,
                sabado: 0
            },
            m3_desplazados: {
                lunes: 130.9322,
                martes: 17.6686,
                miercoles: 94.896,
                jueves: 9.7097,
                viernes: 12.5928,
                sabado: 0.00
            },
            equipo: [
                {
                    nombre: 'Natalio Díaz',
                    asistencia: {
                        lunes: 0,
                        martes: 0.6,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Guadalupe Ayon',
                    asistencia: {
                        lunes: 0,
                        martes: 0.6,
                        miercoles: 0,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Irineo Ledesma',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0.6,
                        jueves: 0,
                        viernes: 0,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Manuel Cadena',
                    asistencia: {
                        lunes: 0,
                        martes: 0,
                        miercoles: 0.6,
                        jueves: 0,
                        viernes: 0.6,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Pablo Colchado',
                    asistencia: {
                        lunes: 1.2,
                        martes: 0,
                        miercoles: 0,
                        jueves: 1.2,
                        viernes: 0.6,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                }
            ]
        };
    }
};

module.exports = ChoferModels;
