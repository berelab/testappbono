'use strict'
const { prodPoolPromise } = require ('../prodSQLClient');


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

    
};

module.exports = usersRepository;
