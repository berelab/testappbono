'use strict'
import moment from 'moment';
class Placa {
    constructor(repository,produccionRepo){
        this.repository = repository;
        this.produccionRepo =produccionRepo;
    }

    async execute() {
        let response;
        let teamResponse;
        let entries;
        let extra;
        let amp;
        let valorReal = this._convertMonth();
        let year = this._getYear();
        let produccion;
        let day = moment().weekday()
        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
            extra = await this.repository.extraData();
            amp = await this.repository.indicator(year, valorReal);
            produccion = await this._produccion(day)
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries), extra,amp,produccion);
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

    _convertData(response, team, entries, extra,amp,produccion) {
        return {            
            message: 'Placa',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: extra.dias,
            desperdicio: amp,
            factor_dias_laborados: extra.factor,
            horas_por_turno: 9.6,
            horas_extra_dobles: 0,
            horas_extra_triples: 0,
            asistencia: 25.20,
            m3_cortados: produccion,
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

    _convertProd(prod){
        let len = prod.length;
        let result=0;
        if(len>0){
            for(var i=0; i<len; i++){
                prod[i][1]=='PLACA' ?result= prod[i][3]: result
            }
        }

        return result
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
    async _produccion (day){
        let m3cortados ={
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            domingo:0
        };

        
        if(day == 1){
            let fechaL = moment().format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL
        }else if(day == 2){
            let fechaL = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes= totalMa
        }else if(day==3){
            let fechaL = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

            let fechaMi = moment().format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let produccionMi = await this.produccionRepo.find(fechaMi);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi
        }else if(day==4){
            let fechaL = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

            let fechaMi = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let produccionMi = await this.produccionRepo.find(fechaMi);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

            let fechaJ = moment().format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let produccionJ = await this.produccionRepo.find(fechaJ);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ
        }else if(day == 5){
            let fechaL = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

            let fechaMi = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let produccionMi = await this.produccionRepo.find(fechaMi);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

            let fechaJ  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let produccionJ = await this.produccionRepo.find(fechaJ);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

            let fechaV = moment().format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let produccionV = await this.produccionRepo.find(fechaV);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV
        }else if(day== 6){
            let fechaL = moment().subtract(5, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

            let fechaMi = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let produccionMi = await this.produccionRepo.find(fechaMi);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

            let fechaJ  = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let produccionJ = await this.produccionRepo.find(fechaJ);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

            let fechaV  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let produccionV = await this.produccionRepo.find(fechaV);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV

            let fechaS = moment().format("DD/MMM/YYYY");
            fechaS = fechaS.toUpperCase();
            let produccionS = await this.produccionRepo.find(fechaS);
            let totalS= this._convertProd(produccionS.rows)
            m3cortados.sabado = totalS
        }else if(day == 0){
            let fechaL = moment().subtract(6, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let produccionL = await this.produccionRepo.find(fechaL);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let fechaMa = moment().subtract(5, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let produccionMa = await this.produccionRepo.find(fechaMa);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

            let fechaMi = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let produccionMi = await this.produccionRepo.find(fechaMi);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

            let fechaJ  = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let produccionJ = await this.produccionRepo.find(fechaJ);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

            let fechaV  = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let produccionV = await this.produccionRepo.find(fechaV);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV

            let fechaS  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaS = fechaS.toUpperCase();
            let produccionS = await this.produccionRepo.find(fechaS);
            let totalS= this._convertProd(produccionS.rows)
            m3cortados.sabado = totalS
        }
        
        return m3cortados
    }
};

module.exports = Placa;