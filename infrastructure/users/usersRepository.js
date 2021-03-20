'use strict'
const { prodPoolPromise } = require ('../prodSQLClient');


class usersRepository {

    async find() {
        let response; 
        let pool;
        const queryString = `SELECT 
        [APP_COLABORA].[CB_NOMBRES], 
        [APP_COLABORA].[CB_APE_PAT],
        [APP_COLABORA].[CB_APE_MAT],
        [APP_COLABORA].[CB_CODIGO],
        [APP_COLABORA].[CB_PUESTO],
        [APP_COLABORA].[CB_G_TEX_4],
        [APP_COLABORA].[CB_ACTIVO],
        [APP_NIVEL2].[TB_ELEMENT],
        [APP_COLABORA].[CB_NIVEL2],
        [APP_COLABORA].[CB_NIVEL5]

        FROM [APP_COLABORA]
        
        INNER JOIN [APP_NIVEL2] 
        ON [APP_COLABORA].[CB_NIVEL2] = [APP_NIVEL2].[TB_CODIGO]
        
        WHERE [APP_COLABORA].[CB_ACTIVO] = 'S'

        ORDER BY  [APP_COLABORA].[CB_NIVEL5] , [APP_NIVEL2].[TB_ELEMENT] `;

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
