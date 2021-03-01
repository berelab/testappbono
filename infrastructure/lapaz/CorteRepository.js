'use strict'

const { prodPoolPromise } = require ('../prodSQLClient');
const { appPoolPromise } = require ('../appSQLClient');


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
        const queryString = "SELECT COLABORADOR.CB_CODIGO AS userID, COLABORADOR.CB_NOMBRES AS nombre, COLABORADOR.CB_APE_PAT AS a_paterno, COLABORADOR.CB_APE_MAT AS a_materno, COLABORADOR.CB_SEXO AS sexo, COLABORADOR.CB_TEL AS telefono, COLABORADOR.CB_E_MAIL AS email, APP_NIVEL2.TB_ELEMENT AS depto, COLABORADOR.CB_NIVEL5 AS planta, APP_NIVEL1.TB_ELEMENT AS ciudad FROM APP_COLABORA AS COLABORADOR INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO WHERE COLABORADOR.CB_NIVEL5 = 'LPZ' AND APP_NIVEL2.TB_ELEMENT = 'Corte Variable' AND COLABORADOR.CB_ACTIVO = 'S'";

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return response.recordset
    }
    async entryTimes(){
        let response;
        let pool;
        const queryString = "SELECT cu.* FROM (SELECT u.CB_CODIGO AS userid, u.PRETTYNAME AS nombre, u.CB_NIVEL5 AS planta, n.TB_ELEMENT AS depto, c.AU_FECHA AS fecha, c.CH_H_AJUS AS entrada, c.CH_H_REAL AS entrada_real, ROW_NUMBER() OVER (PARTITION BY u.CB_CODIGO, c.AU_FECHA ORDER BY c.CH_H_AJUS) AS seqnum FROM APP_CHECADAS c JOIN APP_COLABORA u ON u.CB_CODIGO = c.CB_CODIGO JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO WHERE c.AU_FECHA BETWEEN '2021-02-22 00:00:00.000' AND '2021-02-28 00:00:00.000' AND  u.CB_NIVEL5 = 'JRZ' AND n.TB_ELEMENT = 'Corte Variable') cu WHERE seqnum = 1 "

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);

        } catch (error) {
            console.log(error)
        }
        return response.recordset
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