'use strict'

class MoldeoModels {
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
            message: 'Moldeo',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            blocks_fuera_especificacion: '0',
            indicador_combustible: 'azul',
            densidad: 0.967248,
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            horas_por_turno: 9.5,            
            blocks_moldeados: {
                lunes: 0,
                martes: 0,
                miercoles: 114,
                jueves: 39,
                viernes: 145,
                sabado: 0
            },
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

module.exports = MoldeoModels;