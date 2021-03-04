'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class produccionRepository {

    async find() {
        let pool;
        let response;
        const queryString = "SELECT * FROM produccionlp WHERE depto='Bloquera'";

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

module.exports = produccionRepository;