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
        return {
            message: 'Bonos',
            city: 'La Paz',
            depto: 'Bloquera',
            semanas: [
                {
                    semana:  response[0].fecha,
                    bono:  response[0].bono,
                },
                {
                    semana:   response[1].fecha,
                    bono:  response[1].bono,
                    
                },
                {
                    semana:   response[2].fecha,
                    bono:  response[2].bono,
                   
                },
                {
                    semana:   response[3].fecha,
                    bono:  response[3].bono,
                   
                },
                {
                    semana:   response[4].fecha,
                    bono:  response[4].bono,
                   
                },
                {
                    semana:   response[5].fecha,
                    bono:  response[5].bono,
                  
                },
                {
                    semana:  response[6].fecha,
                    bono:  response[6].bono,
                   
                },
                {
                    semana:   response[7].fecha,
                    bono:  response[7].bono,
                   
                }

            ]
        }
    }


   
};

module.exports = bonosModel;
