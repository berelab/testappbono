'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class bonosRepository {

    async find() {
        let response;
        let pool;
        const queryString = "SELECT * FROM bonoslp WHERE depto = 'Corte'";

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }
        return response.recordset;
    }

    
};

module.exports = bonosRepository;