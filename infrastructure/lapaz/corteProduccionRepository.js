'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class produccionRepository {

    async find() {
        let response;
        let pool;
        const queryString = "SELECT * FROM produccionlp Where depto='Corte'";

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return response;
    }

    
};

module.exports = produccionRepository;