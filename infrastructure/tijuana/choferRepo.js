'use strict'

const { prodPoolPromise } = require ('../prodSQLClient');
const { appPoolPromise } = require ('../appSQLClient');

class ChoferRepository {

    async find() {
        let response;
        let pool;
        const queryString = "SELECT base0, dias_sucios, [$_extra_m3] FROM plantas WHERE depto = 'choferlocal' AND ciudad = 'tijuana';";

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

        const queryString = `UPDATE plantas SET base0 = ${base} , dias_sucios = '${dias_sucios}', [$_extra_m3] = '${extra_m3}' WHERE depto = 'choferlocal' AND ciudad = 'tijuana';`;
        
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
        const queryString = 
        `
        SELECT COLABORADOR.CB_CODIGO AS userID, COLABORADOR.CB_NOMBRES AS nombre, COLABORADOR.CB_APE_PAT AS a_paterno, COLABORADOR.CB_APE_MAT AS a_materno, COLABORADOR.CB_SEXO AS sexo, COLABORADOR.CB_TEL AS telefono, COLABORADOR.CB_E_MAIL AS email, turno.[TU_CODIGO] as turno, turno.[TU_DIAS] as dias, turno.[TU_VACA_HA] as factor, APP_NIVEL2.TB_ELEMENT AS depto, COLABORADOR.CB_NIVEL5 AS planta, APP_NIVEL1.TB_ELEMENT AS ciudad FROM APP_COLABORA AS COLABORADOR INNER JOIN APP_NIVEL2 ON COLABORADOR.CB_NIVEL2 = APP_NIVEL2.TB_CODIGO INNER JOIN APP_NIVEL1 ON COLABORADOR.CB_NIVEL1 = APP_NIVEL1.TB_CODIGO JOIN APP_TURNO turno ON turno.TU_CODIGO = COLABORADOR.CB_TURNO
        WHERE COLABORADOR.CB_NIVEL5 = 'TIJ' AND COLABORADOR.CB_ACTIVO = 'S' AND APP_NIVEL2.TB_ELEMENT = 'Ventas Distibución Local'
        `;
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
        const queryString = "SELECT cu.* FROM (SELECT u.CB_CODIGO AS userid, CONVERT(VARCHAR(10), c.AU_FECHA, 101) AS fecha, c.CH_H_AJUS AS entrada, c.CH_H_REAL AS entrada_real, ROW_NUMBER() OVER (PARTITION BY u.CB_CODIGO, c.AU_FECHA ORDER BY c.CH_H_AJUS) AS seqnum FROM APP_CHECADAS c JOIN APP_COLABORA u ON u.CB_CODIGO = c.CB_CODIGO JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO WHERE c.AU_FECHA BETWEEN  (SELECT DATEADD(DAY, 2 - DATEPART(WEEKDAY, GETDATE()), cast( floor( cast( getdate() as float)) as datetime))) AND (SELECT  DATEADD(DAY, 8 -  DATEPART(WEEKDAY, GETDATE()) , cast( floor( cast( getdate() as float)) as datetime)) ) AND  u.CB_NIVEL5 = 'TIJ' AND n.TB_ELEMENT = 'Ventas Distibución Local') cu WHERE seqnum = 1 "

        try {
            pool = await prodPoolPromise
            response = await pool.request()
            .query(queryString);

        } catch (error) {
            console.log(error)
        }
        return response.recordset;
    }
    async extraData(){
        let response;
        let pool;
        const queryString = "SELECT TOP(1) u.CB_CODIGO as userid, u.CB_NIVEL5 as planta, n.TB_ELEMENT AS depto, t.[TU_CODIGO] as turno, t.[TU_DIAS] as dias, t.[TU_VACA_HA] as factor FROM APP_TURNO t JOIN APP_COLABORA u ON u.CB_TURNO = t.TU_CODIGO JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO WHERE u.CB_NIVEL5 = 'TIJ' AND n.TB_ELEMENT = 'Ventas Distibución Local'";

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

module.exports = ChoferRepository;