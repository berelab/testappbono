'use strict'

class MoldeoModels {
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
            message: 'Moldeo',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            blocks_fuera_especificacion: '0',
            indicador_combustible: 'azul',
            densidad: 0.967248,
            dias: '4.8',
            factor_dias_laborados: '1.2',
            horas_por_turno: 9.5,            
            colaboradores: {
                lunes: 0,
                martes: 1,
                miercoles: 1,
                jueves: 1,
                viernes: 1,
                sabado: 0
            },
            blocks_moldeados: {
                lunes: 0,
                martes: 0,
                miercoles: 114,
                jueves: 39,
                viernes: 145,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'Jesus Vega',
                    asistencia: {
                        lunes: 0.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 0,
                    retardos: 0
                },
            ]
        };
    }
};

module.exports = MoldeoModels;