'use strict'

//const db = require ('../mysqlClient');
const queryString = "SELECT base0, dias_sucios, $_extra_m3 FROM lapaz WHERE depto = 'chofer-local'";

class ChoferRepository {

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
            'base': response[0].base0,
            'dirty_days': response[0].dias_sucios,
            'extra': response[0].$_extra_m3
        }
    }

    async update(base, dias_sucios, extra_m3) {
        let response;

        const queryString = `UPDATE lapaz SET base0 = ${base} , dias_sucios = '${dias_sucios}', $_extra_m3 = '${extra_m3}' WHERE depto = 'chofer-local'`;
        
        try {
            response = await new Promise((resolve, reject) => {
                db.query(queryString, (err, result)=>{
                    if(err) throw err           
                    resolve(result);   
                });
            });
        } catch(error) {
            throw error
        }

        return response;
    }
};

module.exports = ChoferRepository;