'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class produccionRepository {

    async find() {
        let response;
        let pool;
        const queryString = `
        SELECT TOP (8) * FROM bonos_deptos where depto = 'Chofer Local' and city='Culiacan' order by id DESC
        `;

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