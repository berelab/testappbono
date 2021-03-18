'use strict'

class AlmacenModels {
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
        console.log(entries);
        return {
            message: 'Almacen',
            city: 'Cancun',
            base0: response.base,
            dias_sucios: response.dirty_days,
            diferencia_inv: 1,
            asistencia_total:12,
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            $_extra_m3: response.extra,
            m3_desplazados: {
                lunes: 290,
                martes: 290,
                miercoles: 290,
                jueves: 290,
                viernes: 290,
                sabado: 0,
                
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
            let retardo;
            let limit = element.entrada + 10;
        
            !isNaN(element.entrada_real) ? asis = '1.0' : asis = '0.0';
            
            if(element.entrada_real >= limit){
                retardo = 0;
            }else {
                retardo += 1;
            }
            
            return {
                code: element.userid,
                asistencia: {
                  [dayName]: asis
                },
                retardos: retardo
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

module.exports = AlmacenModels;