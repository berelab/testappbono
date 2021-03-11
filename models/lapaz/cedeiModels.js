'use strict'

class CediModels {
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
            message: 'CEDI',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            factor_dias_laborados: extra.factor,
            dias: extra.dias,
            asistencia_total: '6.00',
            m3_desplazados: {
                lunes: 32.22,
                martes: 24.1462,
                miercoles: 22.7813,
                jueves: 41.7991,
                viernes: 46.08,
                sabado: 0.00
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
        
            !isNaN(element.entrada_real) ? asis = '1.0' : asis = '0.0';
        
            return {
                code: element.userid,
                asistencia: {
                  [dayName]: asis
                }
            };
        });
        
        let seen = {};
        let result = orderedData.filter(function(entry) {
            var previous;
            if (seen.hasOwnProperty(entry.code)) {
                previous = seen[entry.code];
                previous.asistencia.push(entry.asistencia);
                return false;
            }
            if (!Array.isArray(entry.asistencia)) {
                entry.asistencia = [entry.asistencia];
            }
            seen[entry.code] = entry;
            return true;
        });

        return result;
    }
};

module.exports = CediModels;
