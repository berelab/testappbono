'use strict'

class produccionModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.findProdDepto();
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
            produccion: response[i].produccion
        }

        semanas.push(semana);
        }

        if(len <8){ 
            let len2 = 8-len;
            for(var i=0; i<len2; i++){
                let semana ={
                    semana:'',
                    produccion: 0
                }
            
                semanas.push(semana);
            }
        }
        
        return {
            message: 'Producción',
            semanas: semanas
        }
    }


   
};

module.exports = produccionModel;
