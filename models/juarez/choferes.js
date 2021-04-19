'use strict'
import moment from 'moment';
class Choferes {
    constructor(repository, produccionRepo){
        this.repository = repository;
        this.produccionRepo =produccionRepo;
    }


    async execute() {
        let response;
        let teamResponse;
        let entries;
        let extra;
        let produccion;
        let day = moment().weekday()
        try {
            response = await this.repository.find();
            teamResponse = await this.repository.findTeam();
            entries = await this.repository.entryTimes();
            extra = await this.repository.extraData();
            produccion = await this._produccion(day)
        } catch(error) {
            throw error;
        }

        return this._convertData(response, teamResponse, this._reorderData(entries), extra,produccion);
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

    _convertData(response, team, entries, extra,produccion) {
        return {            
            message: 'Choferes',
            city: 'Juarez',
            base0: response.base,
            auditoria_sol: response.dirty_days,
            $_extra_m3: response.extra,
            dias: extra.dias,
            asistencia: 2.80,
            factor_dias_laborados: extra.factor,
            m3_desplazados: produccion,
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
                prod[i][2]=='Local' ?result= prod[i][1]: result
            }
        }

        return result
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
            let fechaL = moment().format("DD/MMM/YYYY"); // fecha actual inicial 
            let fechaLf = moment().add(1,"days").format("DD/MMM/YYYY");//fecha lunes fin
            fechaL = fechaL.toUpperCase();
            fechaLf = fechaLf.toUpperCase();
            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaLf); //para obtener la produccion se ocupa un intervalo la fecha del dia actual y la del dia siguiente
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL
        }else if(day == 2){
            let fechaL = moment().subtract(1, "days").format("DD/MMM/YYYY");
            let fechaMa = moment().format("DD/MMM/YYYY");
            let fechaMi = moment().add(1,"days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            fechaMa = fechaMa.toUpperCase();
            fechaMi = fechaMi.toUpperCase();

            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes= totalMa
        }else if(day==3){
            let fechaL = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let fechaMa = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let fechaMi = moment().format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let fechaJ = moment().add(1,"days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();

            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

           
            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

          
            let produccionMi = await this.produccionRepo.findDespl(fechaMi, fechaJ);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi
        }else if(day==4){
            let fechaL = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let fechaMa = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let fechaMi = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let fechaJ = moment().format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let fechaV = moment().add(1,"days").format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();

            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

           
            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

          
            let produccionMi = await this.produccionRepo.findDespl(fechaMi, fechaJ);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

           
            let produccionJ = await this.produccionRepo.findDespl(fechaJ, fechaV);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ
        }else if(day == 5){
            let fechaL = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let fechaMa = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let fechaMi = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let fechaJ  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let fechaV = moment().format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let fechaS = moment().add(1,"days").format("DD/MMM/YYYY");
            fechaS = fechaS.toUpperCase();


             let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

           
            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

          
            let produccionMi = await this.produccionRepo.findDespl(fechaMi, fechaJ);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

           
            let produccionJ = await this.produccionRepo.findDespl(fechaJ, fechaV);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

         
            let produccionV = await this.produccionRepo.findDespl(fechaV, fechaS);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV
        }else if(day== 6){
            let fechaL = moment().subtract(5, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let fechaMa = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let fechaMi = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let fechaJ  = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let fechaV  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let fechaS = moment().format("DD/MMM/YYYY");
            fechaS = fechaS.toUpperCase();
            let fechaD = moment().add(1,"days").format("DD/MMM/YYYY");
            fechaD = fechaD.toUpperCase();

            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

           
            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

          
            let produccionMi = await this.produccionRepo.findDespl(fechaMi, fechaJ);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

           
            let produccionJ = await this.produccionRepo.findDespl(fechaJ, fechaV);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

         
            let produccionV = await this.produccionRepo.findDespl(fechaV, fechaS);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV

           
            let produccionS = await this.produccionRepo.findDespl(fechaS, fechaD);
            let totalS= this._convertProd(produccionS.rows)
            m3cortados.sabado = totalS
        }else if(day == 0){
            let fechaL = moment().subtract(6, "days").format("DD/MMM/YYYY");
            fechaL = fechaL.toUpperCase();
            let fechaMa = moment().subtract(5, "days").format("DD/MMM/YYYY");
            fechaMa = fechaMa.toUpperCase();
            let fechaMi = moment().subtract(4, "days").format("DD/MMM/YYYY");
            fechaMi = fechaMi.toUpperCase();
            let fechaJ  = moment().subtract(3, "days").format("DD/MMM/YYYY");
            fechaJ = fechaJ.toUpperCase();
            let fechaV  = moment().subtract(2, "days").format("DD/MMM/YYYY");
            fechaV = fechaV.toUpperCase();
            let fechaS  = moment().subtract(1, "days").format("DD/MMM/YYYY");
            fechaS = fechaS.toUpperCase();
            let fechaD = moment().format("DD/MMM/YYYY");
            fechaD = fechaD.toUpperCase();


            let produccionL = await this.produccionRepo.findDespl(fechaL, fechaMa);
            let totalL= this._convertProd(produccionL.rows)
            m3cortados.lunes = totalL

           
            let produccionMa = await this.produccionRepo.findDespl(fechaMa, fechaMi);
            let totalMa= this._convertProd(produccionMa.rows)
            m3cortados.martes = totalMa

          
            let produccionMi = await this.produccionRepo.findDespl(fechaMi, fechaJ);
            let totalMi= this._convertProd(produccionMi.rows)
            m3cortados.miercoles = totalMi

           
            let produccionJ = await this.produccionRepo.findDespl(fechaJ, fechaV);
            let totalJ= this._convertProd(produccionJ.rows)
            m3cortados.jueves = totalJ

         
            let produccionV = await this.produccionRepo.findDespl(fechaV, fechaS);
            let totalV= this._convertProd(produccionV.rows)
            m3cortados.viernes = totalV

           
            let produccionS = await this.produccionRepo.findDespl(fechaS, fechaD);
            let totalS= this._convertProd(produccionS.rows)
            m3cortados.sabado = totalS
        }
        
        return m3cortados
    }

};

module.exports = Choferes;
