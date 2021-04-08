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
            bono: response[i].produccion
        }

        semanas.push(semana);
        }

        if(len <8){ //solo pasara en las primeras 7 semanas que aun no haya mas de 8 registros.
            let len2 = 8-len;
            for(var i=0; i<len2; i++){
                let semana ={
                    semana:'...',
                    bono: 0
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
