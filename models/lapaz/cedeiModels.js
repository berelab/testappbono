'use strict'

class CediModels {
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
            message: 'CEDI',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            factor_dias_laborados: '1.2',
            dias: '6',
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
                lunes: 32.22,
                martes: 24.1462,
                miercoles: 22.7813,
                jueves: 41.7991,
                viernes: 46.08,
                sabado: 0.00
            },
            equipo: [
                {
                    nombre: 'Osvaldo Rodriguez',
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
                    nombre: 'Manuel Cadena',
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

module.exports = CediModels;
