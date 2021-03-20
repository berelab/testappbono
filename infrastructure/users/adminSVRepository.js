'use strict'
const { prodPoolPromise } = require ('../prodSQLClient');

class adminRepository {

    async find() {
        let response; 
        let pool;
        const queryString = "SELECT [CB_CODIGO],[CB_NOMBRES] ,[CB_APE_MAT] ,[CB_APE_PAT], [CB_E_MAIL], [CB_PUESTO] FROM [APP_COLABORA] WHERE [CB_PUESTO] = 039";

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

module.exports = adminRepository;

/*
SELECT TOP (1000) [CB_CODIGO]
      ,[PRETTYNAME]
	  ,[CB_E_MAIL]
      ,[CB_PUESTO]
  FROM [FAN_BONO].[dbo].[APP_COLABORA]
  WHERE [CB_CODIGO] = 100018
*/