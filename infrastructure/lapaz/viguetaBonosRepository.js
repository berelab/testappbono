'use strict'

const db = require ('../mysqlClient');
const queryString = "SELECT * FROM bonoslp WHERE depto = 'Vigueta'";

class bonosRepository {

    async find() {
        let response;
        try {
            response = await new Promise((resolve, reject) => {
                db.query(queryString,  (err, result) => {
                    if (err) throw err;
                    resolve(result);  
                });
            });
        } catch(error) {
            throw error
        }

        return {
           response
        }
    }

    
};

module.exports = bonosRepository;