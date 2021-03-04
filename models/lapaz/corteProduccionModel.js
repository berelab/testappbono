'use strict'

class produccionModel {
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
            message: 'Producción',
            city: 'La Paz',
            depto: 'Corte',
            semanas: [
                {
                    semana: response.response[0].fecha,
                    produccion:  response.response[0].produccion,
                },
                {
                    semana:  response.response[1].fecha,
                    produccion:  response.response[1].produccion,
                   
                },
                {
                    semana:  response.response[2].fecha,
                    produccion:  response.response[2].produccion,
                    
                },
                {
                    semana:  response.response[3].fecha,
                    produccion:  response.response[3].produccion,
                    
                },
                {
                    semana:  response.response[4].fecha,
                    produccion:  response.response[4].produccion,
                   
                },
                {
                    semana: response.response[5].fecha,
                    produccion:  response.response[5].produccion,
                   
                },
                {
                    semana:  response.response[6].fecha,
                    produccion:  response.response[6].produccion,
                    
                },
                {
                    semana:  response.response[7].fecha,
                    produccion:  response.response[7].produccion,
                   
                }

            ]
        }
    }


   
};

module.exports = produccionModel;
