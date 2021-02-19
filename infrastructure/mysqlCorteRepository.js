'use strict'

// const { prodPoolPromise } = require ('./prodSQLClient');
const { appPoolPromise } = require ('./appSQLClient');


class MySqlCorteRepository {

    async find() {
        let response;
        let pool;
        const queryString = "SELECT base0, dias_sucios, [$_extra_m3] FROM lapaz WHERE depto = 'corte';";

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            throw error
        }

        return response[0].base0;
        // return {
        //     'base': response[0].base0,
        //     'dirty_days': response[0].dias_sucios,
        //     'extra': response[0].$_extra_m3
        // }
    }

    // async update(base, dias_sucios, extra_m3) {
    //     let response;

    //     const queryString = `UPDATE corte SET base0 = ${base} , dias_sucios = '${dias_sucios}', $_extra_m3 = '${extra_m3}' WHERE id = 1`;
        
    //     try {
    //         response = await new Promise((resolve, reject) => {
    //             db.query(queryString, (err, result)=>{
    //                 if(err) throw err           
    //                 resolve(result);   
    //             });
    //         });
    //     } catch(error) {
    //         throw error
    //     }

    //     return response;
    // }
};

module.exports = MySqlCorteRepository;