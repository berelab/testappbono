'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class produccionRepository {


    async find() {
        let response;
        let pool;
        const queryString = "SELECT * FROM produccionlp WHERE depto = 'Chofer'";

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