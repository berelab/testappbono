'use strict'

class MantenimientoModel {
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
            message: 'CorteConst',
            city: 'CDMX',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            areas: [
                'Corte',
                'Vitro',
                'Preexpansion y Moldeo',
                'Corte Maq'
            ],
            montos_recibidos_area:[
               363.92, 
               0,
               130,
               0
            ],
            rendimiento_agua: 'Azul',
            rendimiento_combustible: 'Azul',
            rendimiento_electricidad: 'Azul',
            faltas_uso_epp: 0,
            fugas_perla:0,
            fugas_vapor:0,
            fugas_aceite:0,
            fugas_aire:0,
            horas_por_turno:0,
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

module.exports = MantenimientoModel;


