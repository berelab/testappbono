'use strict'
const { prodPoolPromise } = require ('../prodSQLClient');
const { appPoolPromise } = require ('../appSQLClient');

class usersRepository {

    async find() {
        let response; 
        let pool;
        const queryString = `SELECT 
        COLABORADOR.CB_NOMBRES AS nombre, 
        COLABORADOR.CB_APE_PAT AS a_paterno, 
        COLABORADOR.CB_APE_MAT AS a_materno, 
        COLABORADOR.CB_CODIGO AS codigo, 
        COLABORADOR.CB_PUESTO AS puesto,
        COLABORADOR.CB_E_MAIL AS email,
        APP_NIVEL2.TB_ELEMENT AS depto,
        COLABORADOR.CB_NIVEL5 AS planta,
        APP_NIVEL1.TB_ELEMENT AS ciudad 
        
        
        FROM APP_COLABORA AS COLABORADOR
        
        INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO 
        INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO 
        
        WHERE  COLABORADOR.CB_ACTIVO = 'S' 
        ORDER BY  COLABORADOR.CB_NIVEL5 , APP_NIVEL2.TB_ELEMENT `;

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return {
            response
        }
    }

    async insert(users) {
        let response;
        let pool;
        let len = users.length;
        for(var i=0; i<len; i++){
         let queryString = `INSERT INTO colaboradores (name, num, email, password,role, city, depto) VALUES ('${users[i].name}', '${users[i].num}' , '${users[i].email}', '${users[i].password}', '${users[i].role}' ,'${users[i].city}', '${users[i].depto}')`;
             try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
           
            
        } catch(error) {
            console.log(error);
        }
 
        }

        return {
            response
        }

    }

    async findUsers() {
    
        let response; 
        let pool;
        const queryString = `SELECT * FROM colaboradores`;

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return {
            response
        }
    }


    async clear() {
    
        let response; 
        let pool;
        const queryString = `TRUNCATE TABLE colaboradores`;

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return {
            response
        }
    }

    //pendiente
    async findUser(num) {
        let response;
        //const queryString = `SELECT * FROM usuarios WHERE num = '${num}' `;

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

        return response
    }

    //pendiente
    async update(num, password) {
        let response;
        //const query = `UPDATE usuarios SET password = '${password}'  WHERE num = '${num}'`;
    
        try {
            response = await new Promise((resolve, reject) => {
                db.query(query, (err, result)=>{
                    if(err) throw err           
                    resolve(result);   
                });
            });
            response = {
                status:'success',
                message: 'contraseña actualizada.',
            }
           
        } catch(error) {
            throw error
            
        }

        return response;
    }


    
};

module.exports = usersRepository;
