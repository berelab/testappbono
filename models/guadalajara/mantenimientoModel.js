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
        let vlsCombustible;
        let vlsAgua;
        let vlsElectricidad;
        let valor = this._convertMonth();
        let year = this._getYear(); 
        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
            extra = await this.repository.extraData();
            vlsCombustible = await this.repository.indicatorCombustible(year, valor);
            vlsAgua = await this.repository.indicatorAgua(year, valor);
            vlsElectricidad = await this.repository.indicatorElectricidad(year, valor);
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries), extra, vlsAgua, vlsCombustible,vlsElectricidad);
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

    _convertData(response, team, entries, extra, agua,  combustible, electricidad) {
        return {
            message: 'Mantenimiento',
            city: 'Guadalajara',
            base0: response.base,
            dias_sucios: response.dirty_days,
            $_extra_m3: response.extra,            
            dias: extra.dias,
            factor_dias_laborados: extra.factor,
            areas: [
                'Corte',
                'Preexpansion y Moldeo',
                'Insulpanel'
            ],
            montos_recibidos_area:[
               242.02, 
               807.98,
               495
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
        let valor;
        if(month==0){ 
            valor = ['ValorReal12', 'ValorMinimo12', 'ValorSatisfactorio12','ValorSobresaliente12']
            return valor
        }else if(month==1){
            valor = ['ValorReal1', 'ValorMinimo1', 'ValorSatisfactorio1','ValorSobresaliente1']
            return valor
        }else if(month==2){
            valor = ['ValorReal2', 'ValorMinimo2', 'ValorSatisfactorio2','ValorSobresaliente2']
            return valor
        }else if(month==3){
            valor = ['ValorReal3', 'ValorMinimo3', 'ValorSatisfactorio3','ValorSobresaliente3']
            return valor
        }else if(month==4){
            valor = ['ValorReal4', 'ValorMinimo4', 'ValorSatisfactorio4','ValorSobresaliente4']
            return valor
        }else if(month==5){
            valor = ['ValorReal2', 'ValorMinimo5', 'ValorSatisfactorio5','ValorSobresaliente5']
            return valor
        }else if(month==6){
            valor = ['ValorReal6', 'ValorMinimo6', 'ValorSatisfactorio6','ValorSobresaliente6']
            return valor
        }else if(month==7){
            valor = ['ValorReal7', 'ValorMinimo7', 'ValorSatisfactorio7','ValorSobresaliente7']
            return valor
        }else if(month==8){
            valor = ['ValorReal8', 'ValorMinimo8', 'ValorSatisfactorio8','ValorSobresaliente8']
            return valor
        }else if(month==9){
            valor = ['ValorReal9', 'ValorMinimo9', 'ValorSatisfactorio9','ValorSobresaliente9']
            return valor
        }else if(month==10){
            valor = ['ValorReal10', 'ValorMinimo10', 'ValorSatisfactorio10','ValorSobresaliente10']
            return valor
        }else if(month==11){
            valor = ['ValorReal11', 'ValorMinimo11', 'ValorSatisfactorio11','ValorSobresaliente11']
            return valor
        }
    }
    
    _getYear(){
        let dateObj = new Date();
        let month = dateObj.getMonth();
        let year = dateObj.getFullYear();
        month == 0? year = year-1: year  
        return year
    }

    _convertCombustible(valores){ 
        if(valores.vreal > valores.vmin){
            return 'Rojo'
        }else if(valores.vreal < valores.vmin &&  valores.vreal > valores.vsatis){
            return 'Amarillo'
        }else if(valores.vreal < valores.vsatis &&  valores.vreal > valores.vsobre){
            return 'Verde'
        }else if(valores.vreal < valores.vsobre){
            return 'Azul'
        }else{
            return 'Azul'
        }
    }

    _convertAgua(valores){
        if(valores.vreal > valores.vmin){
            return 'Rojo'
        }else if(valores.vreal < valores.vmin &&  valores.vreal > valores.vsatis){
            return 'Amarillo'
        }else if(valores.vreal < valores.vsatis &&  valores.vreal > valores.vsobre){
            return 'Verde'
        }else if(valores.vreal < valores.vsobre){
            return 'Azul'
        }else{
            return 'Azul'
        }
    }

    _convertElectricidad(valores){ 
        if(valores.vreal > valores.vmin){
            return 'Rojo'
        }else if(valores.vreal < valores.vmin &&  valores.vreal > valores.vsatis){
            return 'Amarillo'
        }else if(valores.vreal < valores.vsatis &&  valores.vreal > valores.vsobre){
            return 'Verde'
        }else if(valores.vreal < valores.vsobre){
            return 'Azul'
        }else{
            return 'Azul'
        }
    }
};

module.exports = MantenimientoModel;