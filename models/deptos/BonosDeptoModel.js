'use strict'

class bonosModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.findBonosDepto();
        } catch(error) {
            throw error;
        }

        return this._convertData(response);
    }
    
    _convertData(response) {
        let len =response.length
        let semanas = []
        for(var i = 0;i<len; i++ ){
        let semana ={
            semana: response[i].fecha,
            bono: response[i].bono
        }

        semanas.push(semana);
        }

        if(len <8){
            let len2 = 8-len;
            for(var i=0; i<len2; i++){
                let semana ={
                    semana:'',
                    bono: 0
                }
        
                semanas.push(semana);
            }
        }
        
        return {
            message: 'Bonos',
            semanas: semanas
        }
    }


   
};

module.exports = bonosModel;
