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
            message: 'Produccion',
            city: 'La Paz',
            depto: 'Vigueta',
            semanas: [
                {
                    semana: response[0].fecha,
                    produccion:  response[0].produccion,
                },
                {
                    semana:  response[1].fecha,
                    produccion:  response[1].produccion,
                   
                },
                {
                    semana:  response[2].fecha,
                    produccion:  response[2].produccion,
                    
                },
                {
                    semana:  response[3].fecha,
                    produccion:  response[3].produccion,
                    
                },
                {
                    semana:  response[4].fecha,
                    produccion:  response[4].produccion,
                   
                },
                {
                    semana: response[5].fecha,
                    produccion:  response[5].produccion,
                   
                },
                {
                    semana:  response[6].fecha,
                    produccion:  response[6].produccion,
                    
                },
                {
                    semana:  response[7].fecha,
                    produccion:  response[7].produccion,
                   
                }

            ]
        }
    }


   
};

module.exports = produccionModel;
