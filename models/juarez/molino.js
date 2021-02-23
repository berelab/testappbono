'use strict'

class Molino {
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
            message: 'Molino',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '4.8',
            factor_dias_laborados: '1.2',
            asistencia: 7.20,
            colaboradores: {
                lunes: 5,
                martes: 2,
                miercoles: 2,
                jueves: 2,
                viernes: 0,
                sabado: 0
            },
            kg_molidos: {
                lunes: 2831.5,
                martes: 2831.5,
                miercoles: 2831.5,
                jueves: 2831.5,
                viernes: 0.0,
                sabado: 0.0
            },
            equipo: [
                {
                    nombre: 'Jesús Mora',
                    asistencia: {
                        lunes: 0.5,
                        martes: 1.0,
                        miercoles: 0.5,
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
                    nombre: 'Carlos Santillan',
                    asistencia: {
                        lunes: 0.5,
                        martes: 0.5,
                        miercoles: 0.5,
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
                        lunes: 0.5,
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
                    nombre: 'Nisoforo Hernandez',
                    asistencia: {
                        lunes: 0.5,
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
                    nombre: 'Daniel García Gomez',
                    asistencia: {
                        lunes: 0.5,
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
            ]
        };
    }
};

module.exports = Molino;