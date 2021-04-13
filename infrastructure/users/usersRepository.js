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

    async findInfo(num) {
        let response; 
        let pool;
        const queryString = `SELECT 
        COLABORADOR.CB_PUESTO AS puesto,
        APP_NIVEL2.TB_ELEMENT AS depto,
        COLABORADOR.CB_NIVEL5 AS planta,
        APP_NIVEL1.TB_ELEMENT AS ciudad 
        
        FROM APP_COLABORA AS COLABORADOR
        
        INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO 
        INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO 
        
        WHERE  COLABORADOR.CB_ACTIVO = 'S' and COLABORADOR.CB_CODIGO = '${num}'
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
         let queryString = `INSERT INTO colaboradores (name, num, email, password) VALUES ('${users[i].name}', '${users[i].num}' , '${users[i].email}', '${users[i].password}')`;
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

   
    async findUser(num) {
        let response;
        let pool;
        const queryString = `SELECT * FROM colaboradores WHERE num = '${num}' `;

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

   
    async update(num, password) {
        let response;
        let pool;
        const queryString = `UPDATE colaboradores SET password = '${password}'  WHERE num = '${num}'`;
    
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


    
};

module.exports = usersRepository;
