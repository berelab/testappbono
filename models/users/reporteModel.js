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

    async executeProdColab() {
        let response;

        try {
            response = await this.repository.findProdColab();
        } catch(error) {
            throw error;
        }

     
        return response;
    }

    async executeBonosColabByNum(num) {
        let response;

        try {
            response = await this.repository.findBonosColabByNum(num);
        } catch(error) {
            throw error;
        }

     
        return response;
    }

    async executeProdColabByNum(num) {
        let response;

        try {
            response = await this.repository.findProdColabByNum(num);
        } catch(error) {
            throw error;
        }

     
        return response;
    }

    async executeProdDepto() {
        let response;

        try {
            response = await this.repository.findProdDeptos();
        } catch(error) {
            throw error;
        }

     
        return response;
    }

    async executeBonosDepto() {
        let response;

        try {
            response = await this.repository.findBonosDeptos();
        } catch(error) {
            throw error;
        }

     
        return response;
    }

    async saveWeek(equipo, semana, bono, depto, city) { //guarda los bonos de los colaboradores
        let response;
        
        try {
            response = await this.repository.insert(equipo, semana, bono, depto, city);
        } catch(error) {
            throw error;
        }

        return response;
    } 

    async saveProdColab(equipo, semana, produccion, depto, city) {
        let response;
        
        try {
            response = await this.repository.insertProdColab(equipo, semana, produccion, depto, city);
        } catch(error) {
            throw error;
        }

        return response;
    } 

    async saveProdDepto(semana, produccion, depto, city) {
        let response;
        
        try {
            response = await this.repository.insertProdDepto(semana, produccion, depto,city);
        } catch(error) {
            throw error;
        }

        return response;
    } 


    async saveBonosDepto(semana, bono, depto, city) {
        let response;
        
        try {
            response = await this.repository.insertBonosDepto(semana, bono, depto, city);
        } catch(error) {
            throw error;
        }

        return response;
    } 

   
};

module.exports = reporteModel;
