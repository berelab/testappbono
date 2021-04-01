'use strict'

const { appPoolPromise } = require ('../appSQLClient');

class reporteRepository {

    async find() {
        let response; 
        let pool;
        const queryString = `SELECT * FROM reportes `;

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return  response.recordset
        
    }

    async insert(equipo, semana, bono, depto, city) {
        let response;
        let pool;
        const queryString = `SELECT * FROM reportes WHERE semana = '${semana}' AND  depto = '${depto}'  AND city = '${city}'`;

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
           let resultados = response.recordset.length // si es mayor a 0 se encontro la semana, entonces ya esta registrada.
           if(resultados == 0){
                 let len = equipo.length;
                 for(var i=0; i<len; i++){
                    let query = `INSERT INTO reportes (num, clave, bono, semana, depto, city) VALUES ('${equipo[i].num}', '21' , '${bono[i]}', '${semana}', '${depto}' ,'${city}')`;
                   try {
                    pool = await appPoolPromise
                    response = await pool.request()
                    .query(query);
                    
                   } catch(error) {
                     console.log(error);
                 }

               }
               response = {
                status:'success',
                message: 'Semana  registrada.',
                data:{
                    week: semana,
                    depto: depto,
                    city: city
                }
                
                 }
           }else{
                response = {
                    status:'error',
                    message: 'Esta semana ya se encuentra registrada',
                    data:{
                        week: semana,
                        depto: depto,
                        city: city
                    }
                }
           }


        } catch(error) {
            console.log(error);
        }

        return  response

    }

};

module.exports = reporteRepository;