'use strict'

class Moldeo {
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
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            asistencia: 12.0,
            blocks_fuera_especificacion: '0',
            densidad_bobedilla: 5.1,
            densidad_ins16: 14.0,
            dias: '4.8',
            factor_dias_laborados: '1.2',
            horas_por_turno: 9.6,
            colaboradores: {
                lunes: 3,
                martes: 3,
                miercoles: 2,
                jueves: 2,
                viernes: 0,
                sabado: 0
            },
            blocks_moldeados: {
                lunes: 94.25,
                martes: 94.25,
                miercoles: 94.25,
                jueves: 94.25,
                viernes: 0,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'Nisoforo Hernandez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.5,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Angel Gabriel Mora Casanova',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.0,
                        miercoles: 0.0,
                        jueves: 0.0,
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
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 0.0,
                        jueves: 0.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    horas_extra_dobles: 0,
                    horas_extra_triples: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Daniel García Gomez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.5,
                        jueves: 1.0,
                        viernes: 0.0,
                        sabado: 0.0,
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

module.exports = Moldeo;