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
            city: 'Hermosillo',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,            
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            error_de_carga:0,
            horas_por_turno: 1,       
            m3_cortados: {
                lunes: 568.6,
                martes: 568.6,
                miercoles: 568.6,
                jueves: 568.6,
                viernes: 568.6,
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

module.exports = AlmacenModel;