'use strict'

class Corte {
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
            message: 'Corte',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            desperdicio: .96,
            factor_dias_laborados: '1.2',
            horas_por_turno: 9.6,
            asistencia: 4.20,
            colaboradores: {
                lunes: 2,
                martes: 1,
                miercoles: 0,
                jueves: 1,
                viernes: 0,
                sabado: 0
            },
            m3_cortados: {
                lunes: 103.68,
                martes: 103.68,
                miercoles: 0,
                jueves: 103.68,
                viernes: 0,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'Remedio Herrera García',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 0.0,
                        jueves: 0.5,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Francisco Sanchez',
                    asistencia: {
                        lunes: 1.0,
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
            ]
        };
    }
};

module.exports = Corte;

