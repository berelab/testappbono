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
            console.log(error);
        }

        return {
            'base': response.recordset[0].base0,
            'dirty_days': response.recordset[0].dias_sucios,
            'extra': response.recordset[0].$_extra_m3
        }
    }
    async findTeam() {
        let response;
        let pool;
        const queryString = "SELECT COLABORADOR.CB_NOMBRES AS nombre, COLABORADOR.CB_APE_PAT AS a_paterno, COLABORADOR.CB_APE_MAT AS a_materno, APP_NIVEL2.TB_ELEMENT AS depto, COLABORADOR.CB_NIVEL5 AS planta, APP_NIVEL1.TB_ELEMENT AS ciudad FROM APP_COLABORA AS COLABORADOR INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO WHERE COLABORADOR.CB_NIVEL5 = 'LPZ' AND APP_NIVEL2.TB_ELEMENT = 'Corte Variable'";

        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return response.recordset

        // return {
        //     'base': response.recordset[0].name,
        //     'dirty_days': response.recordset[0].dias_sucios,
        //     'extra': response.recordset[0].$_extra_m3
        // }
    }

    async update(base, dias_sucios, extra_m3) {
        let response;
        let pool;

        const queryString = `UPDATE lapaz SET base0 = ${base} , dias_sucios = '${dias_sucios}', [$_extra_m3] = '${extra_m3}' WHERE depto = 'corte';`;
        
        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);

        } catch(error) {
            console.log(error);
        }

        return response;
    }
};

module.exports = MySqlCorteRepository;