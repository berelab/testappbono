'use strict'

class CorteModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;
        let teamResponse;
        let entries;
        let extra;
        let amp;
        let valorReal = this._convertMonth();
        let year = this._getYear();
        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
            extra = await this.repository.extraData();
            amp = await this.repository.indicator(year, valorReal);
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries), extra,amp);
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

    _convertData(response, team, entries, extra, amp) {
        return {
            message: 'Corte',
            city: 'Guadalajara',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,            
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            amp: amp,
            num_quejas: 0,
            boletas_pnc: 0,
            horas_por_turno: 0, 
            m3_cortados: {
                lunes: 749.59,
                martes:749.59,
                miercoles: 749.59,
                jueves: 749.59,
                viernes: 749.59,
                sabado: 0,
                domingo:0,
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
    
    _convertMonth(){
        let dateObj = new Date();
        let month = dateObj.getMonth();
        if(month==0){ 
            return 'ValorReal12'
        }else if(month==1){
            return 'ValorReal1'
        }else if(month==2){
            return 'ValorReal2'
        }else if(month==3){
            return 'ValorReal3'
        }else if(month==4){
            return 'ValorReal4'
        }else if(month==5){
            return 'ValorReal5'
        }else if(month==6){
            return 'ValorReal6'
        }else if(month==7){
            return 'ValorReal7'
        }else if(month==8){
            return 'ValorReal8'
        }else if(month==9){
            return 'ValorReal9'
        }else if(month==10){
            return 'ValorReal10'
        }else if(month==11){
            return 'ValorReal11'
        }
    }
    
    _getYear(){
        let dateObj = new Date();
        let month = dateObj.getMonth();
        let year = dateObj.getFullYear();
        month == 0? year = year-1: year  
        return year
    }
};

module.exports = CorteModel;
