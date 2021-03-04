'use strict'

class bonosModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.find();
        } catch(error) {
            throw error;
        }

        return this._convertData(response);
    }
    
    _convertData(response) {
        console.log(response);
        return {
            message: 'Bonos',
            city: 'La Paz',
            depto: 'Corte',
            semanas: [
                {
                    semana:  response.response[0].fecha,
                    bono:  response.response[0].bono,
                },
                {
                    semana:   response.response[1].fecha,
                    bono:  response.response[1].bono,
                    
                },
                {
                    semana:   response.response[2].fecha,
                    bono:  response.response[2].bono,
                   
                },
                {
                    semana:   response.response[3].fecha,
                    bono:  response.response[3].bono,
                   
                },
                {
                    semana:   response.response[4].fecha,
                    bono:  response.response[4].bono,
                   
                },
                {
                    semana:   response.response[5].fecha,
                    bono:  response.response[5].bono,
                  
                },
                {
                    semana:  response.response[6].fecha,
                    bono:  response.response[6].bono,
                   
                },
                {
                    semana:   response.response[7].fecha,
                    bono:  response.response[7].bono,
                   
                }

            ]
        }
    }


   
};

module.exports = bonosModel;
