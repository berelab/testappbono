'use strict'

const { prodPoolPromise } = require ('../prodSQLClient');
const { appPoolPromise } = require ('../appSQLClient');

class CediRepository {

    async find() {
        let response;
        let pool;
        const queryString = "SELECT base0, dias_sucios, [$_extra_m3] FROM lapaz WHERE depto = 'cedi';";

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
    async update(base, dias_sucios, extra_m3) {
        let response;
        let pool;

        const queryString = `UPDATE lapaz SET base0 = ${base} , dias_sucios = '${dias_sucios}', [$_extra_m3] = '${extra_m3}' WHERE depto = 'cedi';`;
        
        try {
            pool = await appPoolPromise
            response = await pool.request()
            .query(queryString);

        } catch(error) {
            console.log(error);
        }

        return response;
    }
    async findTeam() {
        let response;
        let pool;
        const queryString = "SELECT COLABORADOR.CB_CODIGO AS userID, COLABORADOR.CB_NOMBRES AS nombre, COLABORADOR.CB_APE_PAT AS a_paterno, COLABORADOR.CB_APE_MAT AS a_materno, COLABORADOR.CB_SEXO AS sexo, COLABORADOR.CB_TEL AS telefono, COLABORADOR.CB_E_MAIL AS email, APP_NIVEL2.TB_ELEMENT AS depto, COLABORADOR.CB_NIVEL5 AS planta, APP_NIVEL1.TB_ELEMENT AS ciudad FROM APP_COLABORA AS COLABORADOR INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO WHERE COLABORADOR.CB_NIVEL5 = 'LPZ' AND APP_NIVEL2.TB_ELEMENT = 'Ventas Distribución' AND APP_NIVEL1.TB_ELEMENT = 'Los Cabos'  AND COLABORADOR.CB_ACTIVO = 'S'";

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
        const queryString = "SELECT cu.* FROM (SELECT u.CB_CODIGO AS userid, CONVERT(VARCHAR(10), c.AU_FECHA, 101) AS fecha, c.CH_H_AJUS AS entrada, c.CH_H_REAL AS entrada_real, ROW_NUMBER() OVER (PARTITION BY u.CB_CODIGO, c.AU_FECHA ORDER BY c.CH_H_AJUS) AS seqnum FROM APP_CHECADAS c JOIN APP_COLABORA u ON u.CB_CODIGO = c.CB_CODIGO JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO JOIN APP_NIVEL1 ni ON u.CB_NIVEL1 = ni.TB_CODIGO WHERE c.AU_FECHA BETWEEN '2021-01-18 00:00:00.000' AND '2021-01-24 00:00:00.000' AND  u.CB_NIVEL5 = 'LPZ' AND n.TB_ELEMENT = 'Ventas Distribución' AND ni.TB_ELEMENT = 'Los Cabos') cu WHERE seqnum = 1 "

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);

                console.log(response.recordset)

        } catch (error) {
            console.log(error)
        }
        return response.recordset;
    }
    async extraData(){
        let response;
        let pool;
        const queryString = "SELECT TOP(1) u.CB_CODIGO as userid, u.CB_NIVEL5 as planta, n.TB_ELEMENT AS depto, t.[TU_CODIGO] as turno, t.[TU_DIAS] as dias, t.[TU_VACA_HA] as factor FROM APP_TURNO t JOIN APP_COLABORA u ON u.CB_TURNO = t.TU_CODIGO JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO JOIN APP_NIVEL1 ni ON u.CB_NIVEL1 = ni.TB_CODIGO WHERE u.CB_NIVEL5 = 'LPZ' AND n.TB_ELEMENT = 'Ventas Distribución' AND ni.TB_ELEMENT = 'Los Cabos'";

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);
        } catch (error) {
            console.log(error);
        }
        return{
            'dias': response.recordset[0].dias,
            'factor': response.recordset[0].factor
        }
    }
};

module.exports = CediRepository;