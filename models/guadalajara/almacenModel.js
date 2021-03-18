'use strict'

class AlmacenModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;
        let teamResponse;
        let entries;
        let extra;

        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
            extra = await this.repository.extraData();
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries), extra);
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

    _convertData(response, team, entries, extra) {
        return {
            message: 'Almacen',
            city: 'Guadalajara',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,            
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            num_quejas: 0,
            uso_equipo_seg: 0,      
            horas_por_turno: 0, 
            m3_cortados: {
                lunes: 858.8,
                martes: 858.8,
                miercoles: 858.8,
                jueves: 858.8,
                viernes: 858.8,
                sabado: 0
            },
            horas_extras_semana: [
                {
                    dia: 'lunes',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                },
                {
                    dia: 'martes',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                },
                {
                    dia: 'miercoles',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                },
                {
                    dia: 'jueves',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                },
                {
                    dia: 'viernes',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                },
                {
                    dia: 'sabado',
                    horas_extras:{
                        horas_extras_dobles: 0,
                        horas_extras_triples: 0,
                    }
                }
            
            ],
            equipo: team,
            team_asis: entries
        };
    }
    _reorderData(entries){
        let orderedData = entries.map(element => {
            let dateString = element.fecha
            var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
            var d = new Date(dateString);
            var dayName = days[d.getDay()];
            let asis;
            let retardo = 0;
            let limit = element.entrada + 10;
        
            !isNaN(element.entrada_real) ? asis = '1.0' : asis = '0.0';            
            element.entrada_real <= limit ? retardo = 0 : retardo = 1;

            return {
                code: element.userid,
                asistencia: {
                  [dayName]: asis
                },
                retardos: {
                    [dayName] : retardo
                }
            };
        });
        
        let seen = {};
        let result = orderedData.filter(function(entry) {
            let previous;
            if (seen.hasOwnProperty(entry.code)) {
                previous = seen[entry.code];                
                previous.asistencia.push(entry.asistencia);
                previous.retardos.push(entry.retardos);
                return false;
            }
            if (!Array.isArray(entry.asistencia)) {
                entry.asistencia = [entry.asistencia];
            }
            if (!Array.isArray(entry.retardos)) {
                entry.retardos = [entry.retardos];
            }            
            seen[entry.code] = entry;
            return true;
        });

        return result;
    }
};

module.exports = AlmacenModel;
