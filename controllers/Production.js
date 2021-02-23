'use strict'

export default class Production {
    constructor(
        m3_cortados,
        colaboradores,
        weekdayName
    ){
        this.m3_cortados   = m3_cortados;
        this.colaboradores = colaboradores;
        this.weekdayName   = weekdayName;
    }

    //Getters
    get totalM3 () {
        return this.total_m3(this.m3_cortados);
    }
    get dailyProduction () {
        return this.production(this.weekdayName);
    }
    get progressBar () {
        return this.progress(this.weekdayName);
    }

    //Methods
    dayNumber () {
        let dateObj = new Date();
        let weekdayNumber = dateObj.getDay();
      return weekdayNumber;
    }
    total_m3 (m3_cortados){
        let total =  m3_cortados.lunes + m3_cortados.martes + m3_cortados.miercoles + m3_cortados.jueves + m3_cortados.viernes + m3_cortados.sabado
        return total;
    }
    
    production(weekdayName){
        let m3_persona;
        if(weekdayName == 'domingo'){
            return 0;
        }       
        if(this.colaboradores[weekdayName] == 0) return 0;
        this.m3_cortados ? m3_persona = (this.m3_cortados[weekdayName] / this.colaboradores[weekdayName]) : m3_persona = 0;
    
        return m3_persona;
    }
    progress (today){
        let weekdayNumber = this.dayNumber();
        let daily_prod = this.production(today);                            
        let acc;
        let monday_prod;
        let tuesday_prod;
        let wenesday_prod;
        let thursay_prod;
        let friday_prod;

        switch (weekdayNumber) {        
            case 0:
                return acc = 0;  
            case 1:
                return daily_prod;
            case 2:
                monday_prod = this.production('lunes');
                acc = monday_prod + daily_prod;
                return acc;
            case 3:
                monday_prod = this.production('lunes');
                tuesday_prod = this.production('martes');
                acc = monday_prod + tuesday_prod + daily_prod;
                return acc;
            case 4:      
                  monday_prod = this.production('lunes'); 
                  tuesday_prod = this.production('martes');
                  wenesday_prod = this.production('miercoles');
                acc = monday_prod + tuesday_prod + wenesday_prod + daily_prod;
                return acc;
            case 5:
                  monday_prod = this.production('lunes');
                  tuesday_prod = this.production('martes');
                  wenesday_prod = this.production('miercoles');
                  thursay_prod = this.production('jueves');
                acc = monday_prod + tuesday_prod + wenesday_prod + thursay_prod + daily_prod;  
                return  acc;      
            case 6:
                  monday_prod = this.production('lunes');
                  tuesday_prod = this.production('martes');
                  wenesday_prod = this.production('miercoles');
                  thursay_prod = this.production('jueves');
                  friday_prod = this.production('viernes');
                acc =  monday_prod + tuesday_prod + wenesday_prod + thursay_prod + friday_prod + daily_prod;    
                return acc;
        }
    }
}