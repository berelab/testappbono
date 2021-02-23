'use strict'

class Kbrs {
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
            message: 'Kbrs',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            asistencia: 92.40,
            factor_dias_laborados: '1.2',
            colaboradores: {
                lunes: 13,
                martes: 16,
                miercoles: 16,
                jueves: 16,
                viernes: 16,
                sabado: 0
            },
            piezas_terminadas: {
                lunes: 50,
                martes: 50,
                miercoles: 50,
                jueves: 50,
                viernes: 50,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'Claudia Margarita Salomón',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 'real', 
                    retardos: 0
                },
                {
                    nombre: 'Rosendo Samaniego Longoria',
                    asistencia: {
                        lunes: 0.0,
                        martes: 0.0,
                        miercoles: 0.0,
                        jueves: 0.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 0,
                    total_bono: 0,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jose Perez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Nora Bertha Alicia Ramos Lopez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Eduardo Medina Rabango',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Ramón Montelongo',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Manuel De Jesus Medina Villa',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Angel Joel Quiroz Gutierrez',
                    asistencia: {
                        lunes: 0.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 4,
                    total_bono: 184.21,
                    faltas : 1,
                    retardos: 0
                },
                {
                    nombre: 'Ernesto Lopez',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Sandra Campa Barrón',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 5,
                    total_bono: 506.57,
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Guillermo Carrasco',
                    asistencia: {
                        lunes: 0.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    total_asistencia: 4,
                    total_bono: 184.21,
                    faltas : 1,
                    retardos: 0
                },
                {
                    nombre: 'Guadalupe Avila Flores',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jose Juan Hernandez',
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
                {
                    nombre: 'Fabián De Jesus Colorado',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Martin Javier Quiñones',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Maria Jean Aguilar',
                    asistencia: {
                        lunes: 1.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'Jose Perfecto Capiz Peña',
                    asistencia: {
                        lunes: 0.0,
                        martes: 1.0,
                        miercoles: 1.0,
                        jueves: 1.0,
                        viernes: 1.0,
                        sabado: 0.0,
                    },
                    faltas : 1,
                    retardos: 0
                },
                {
                    nombre: 'Luis Jesús Campa Barrón',
                    asistencia: {
                        lunes: 1.0,
                        martes: 0.0,
                        miercoles: 0.0,
                        jueves: 0.0,
                        viernes: 0.0,
                        sabado: 0.0,
                    },
                    faltas : 4,
                    retardos: 0
                },
            ]
        };
    }
};

module.exports = Kbrs;
