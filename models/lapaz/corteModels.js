'use strict'

class CorteModels {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;
        let teamResponse;
        let entries;

        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries));
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

    _convertData(response, team, entries) {
        console.log(entries);
        return {
            message: 'Corte',
            city: 'La Paz',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            dias: '6',
            factor_dias_laborados: '1.2',
            asistencia_total: '18.00',
            amp: '96.98',
            colaboradores: {
                lunes: 3,
                martes: 3,
                miercoles: 3,
                jueves: 3,
                viernes: 3,
                sabado: 3
            },
            m3_cortados: {
                lunes: 328.32,
                martes: 81.93,
                miercoles: 284.16,
                jueves: 209.77,
                viernes: 387.56,
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

module.exports = CorteModels;
