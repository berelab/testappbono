'use strict'

class reporteModel {
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

     
        return response;
    }

    async saveWeek(equipo, semana, bono, depto, city) {
        let response;
        
        try {
            response = await this.repository.insert(equipo, semana, bono, depto, city);
        } catch(error) {
            throw error;
        }

        return response;
    } 

   
};

module.exports = reporteModel;
