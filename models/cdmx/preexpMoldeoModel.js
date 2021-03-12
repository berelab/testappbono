'use strict'

class BloqueraModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;
        // let teamResponse;
        // let entries;
        // let extra;

        try {
            response = await this.repository.find();
            // teamResponse = await this.repository.findTeam();
            // entries = await this.repository.entryTimes();
            // extra = await this.repository.extraData();
        } catch(error) {
            throw error;
        }

        // return this._convertData(response, teamResponse, this._reorderData(entries), extra);
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
            message: 'PreexpYMoldeo',
            city: 'CDMX',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            amp:.10,
            num_quejas:0,
            dias:6,
            factor_dias_laborados: 1.2,
            horas_por_turno: 9.5, 
            asistencia_total: 14.40,             
            blocks_cortados: {
                lunes: 0,
                martes: 0,
                miercoles:0,
                jueves:0,
                viernes: 158,
                sabado: 0
            },
            colaboradores: {
                lunes: 0,
                martes: 3,
                miercoles: 3,
                jueves: 3,
                viernes: 3,
                sabado: 0
            },
            equipo: [
                {
                    nombre: 'ANTONIO ALBERTO TOMAS',
                    num: 200648,
                    asistencia: {
                        lunes: 0,
                        martes: 1,
                        miercoles: 1,
                        jueves: 1,
                        viernes: 1,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'ERNESTO HERNANDEZ ROMERO',
                    num: 200648,
                    asistencia: {
                        lunes: 0,
                        martes: 1,
                        miercoles: 1,
                        jueves: 1,
                        viernes: 1,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
                {
                    nombre: 'LUIS ANGEL LOPEZ CHAVEZ',
                    num: 200648,
                    asistencia: {
                        lunes: 0,
                        martes: 1,
                        miercoles: 1,
                        jueves: 1,
                        viernes: 1,
                        sabado: 0,
                    },
                    faltas : 0,
                    retardos: 0
                },
               
               
            ]
        };
    }
    // _reorderData(entries){
    //     let orderedData = entries.map(element => {
    //         let dateString = element.fecha
    //         var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    //         var d = new Date(dateString);
    //         var dayName = days[d.getDay()];
    //         let asis;
        
    //         !isNaN(element.entrada_real) ? asis = '1.0' : asis = '0.0';
        
    //         return {
    //             code: element.userid,
    //             asistencia: {
    //               [dayName]: asis
    //             }
    //         };
    //     });
        
    //     let seen = {};
    //     let result = orderedData.filter(function(entry) {
    //         var previous;
    //         if (seen.hasOwnProperty(entry.code)) {
    //             previous = seen[entry.code];
    //             previous.asistencia.push(entry.asistencia);
    //             return false;
    //         }
    //         if (!Array.isArray(entry.asistencia)) {
    //             entry.asistencia = [entry.asistencia];
    //         }
    //         seen[entry.code] = entry;
    //         return true;
    //     });

    //     return result;
    // }
};

module.exports = BloqueraModel;
