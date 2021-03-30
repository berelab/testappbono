SELECT TOP (10000) 
	   [CB_CODIGO]
	  ,[CB_NOMBRES]
	  ,[CB_APE_PAT]
      ,[CB_APE_MAT]
	  ,[CB_SEXO]
	  ,[CB_NIVEL5]
	  ,[CB_TURNO]
	  ,[CB_PUESTO]
      ,[CB_CLASIFI]
      ,[CB_TEL]
      ,[CB_E_MAIL]
	  ,[CB_CHECA]
	  ,[CB_ACTIVO] 
	  ,[CB_NIVEL2]
  FROM [FAN_BONO].[dbo].[APP_COLABORA]
  WHERE [CB_ACTIVO] = 'S';


-- SOLO EQUIPO DE LA PAZ
SELECT TOP (10000) 
	   [CB_CODIGO]
	  ,[CB_NOMBRES]
	  ,[CB_APE_PAT]
      ,[CB_APE_MAT]
	  ,[CB_SEXO]
	  ,[CB_NIVEL5]
	  ,[CB_TURNO]
	  ,[CB_PUESTO]
      ,[CB_CLASIFI]
      ,[CB_TEL]
      ,[CB_E_MAIL]
	  ,[CB_CHECA]
	  ,[CB_ACTIVO] 
  FROM [FAN_BONO].[dbo].[APP_COLABORA]
  WHERE [CB_ACTIVO] = 'S' and
  [CB_NIVEL5] = 'LPZ';

  -- aparcen nombre de departamentos
  SELECT TOP (10000) 
	[TB_CODIGO]
	,[TB_ELEMENT]
  FROM [FAN_BONO].[dbo].[APP_NIVEL2]


-- SIGNIFICADO CODIGO DE CIUDAD
-- CLN   	Culiacán
-- CMX   	Ciudad de Mexico
-- COR   	Corporativo
-- CUN   	Cancun
-- GDL   	Guadalajara
-- HMO   	Hermosillo
-- JRZ   	Juárez
-- LPZ   	La Paz
-- MDA   	Merida
-- MTY   	Monterrey
-- MXL   	Mexicali
-- NOG   	Nogales
-- QRO   	Querétaro
-- RSA   	Reynosa
-- TIJ   	Tijuana
-- VH    	Villahermosa
-- VZ    	Veracruz

-- NOMBRE EQUIPO, DEPTO Y CIUDAD
SELECT [FAN_BONO].[dbo].[APP_COLABORA].[CB_NOMBRES], 
	[FAN_BONO].[dbo].[APP_COLABORA].[CB_APE_PAT],
	[FAN_BONO].[dbo].[APP_COLABORA].[CB_APE_MAT],
	[FAN_BONO].[dbo].[APP_NIVEL2].[TB_ELEMENT],
	[FAN_BONO].[dbo].[APP_COLABORA].[CB_NIVEL5]

FROM [FAN_BONO].[dbo].[APP_COLABORA]

INNER JOIN [FAN_BONO].[dbo].[APP_NIVEL2] 
ON [FAN_BONO].[dbo].[APP_COLABORA].[CB_NIVEL2] = [FAN_BONO].[dbo].[APP_NIVEL2].[TB_CODIGO]

WHERE [FAN_BONO].[dbo].[APP_COLABORA].[CB_NIVEL5] = 'LPZ' 

ORDER BY [FAN_BONO].[dbo].[APP_NIVEL2].[TB_ELEMENT]


-- QUERY PARA ASISTENCIAS!!

DECLARE @WEEKSTART NVARCHAR(100),
		@WEEKEND NVARCHAR(100)

SET @WEEKSTART = (SELECT DATEADD(DAY, 2 - DATEPART(WEEKDAY, GETDATE()), cast( floor( cast( getdate() as float)) as datetime)))
SET @WEEKEND = (SELECT  DATEADD(DAY, 8 -  DATEPART(WEEKDAY, GETDATE()) , cast( floor( cast( getdate() as float)) as datetime)) )


SELECT cu.*
FROM (SELECT u.CB_CODIGO AS userid, 
		     u.PRETTYNAME AS nombre, 
			 u.CB_NIVEL5 AS planta,
			 n.TB_ELEMENT AS depto,
             c.AU_FECHA AS fecha, 
			 c.CH_H_AJUS AS entrada, 
			 c.CH_H_REAL AS entrada_real,
             ROW_NUMBER() 
	  OVER (PARTITION BY u.CB_CODIGO, c.AU_FECHA 
	        ORDER BY c.CH_H_AJUS) AS seqnum
      FROM APP_CHECADAS c 
	  JOIN APP_COLABORA u ON u.CB_CODIGO = c.CB_CODIGO 
	  JOIN APP_NIVEL2 n ON u.CB_NIVEL2 = n.TB_CODIGO
      WHERE c.AU_FECHA BETWEEN @WEEKSTART AND @WEEKEND 
	  AND  u.CB_NIVEL5 = 'JRZ'
	  AND n.TB_ELEMENT = 'Corte Variable'
     ) cu

WHERE seqnum = 1 


-- QUERY LOGIN
SELECT 
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
ORDER BY  COLABORADOR.CB_NIVEL5 , APP_NIVEL2.TB_ELEMENT 


--indicadores BD TABLEROS

-- plantas -- tabla Entidad
/*
 EntidadID	Nombre
    1	Tijuana
    2	Mexicali
    3	Nogales
    4	Cd. Juárez
    5	La Paz
    6	Hermosillo
    7	Culiacan
    8	Monterrey
    9	Querétaro
    10	Guadalajara
    11	Villahermosa
    12	Mérida
    13	Cancún
    14	Veracruz
    15	Ciudad de México
    99	Division Exportacion
    100	Global
*/

-- tabla indicador
/*
 IndicadorID	| Nombre	                   |  NombreCorto	 |    
|    15	        | % de desperdicio en corte    |       P3-1	     |   
*/


--desperdicio corte lapaz para marzo 2021
-- ValorReal3 seria para abril... ValorReal4 para mayo ...
SELECT 
      ValorReal2 as desperdicio 
  FROM DatoReporte where IndicadorID = 15 and EntidadID = 5 and Periodo = 2021


-- combustible 
  SELECT 
     ValorReal2 as vreal,
	 ValorMinimo2 as vminimo,
	 ValorSatisfactorio2 as vsatisfactorio,
	 ValorSobresaliente2 as vsobresaliente
  FROM DatoReporte where IndicadorID = 40 and EntidadID = 13 and Periodo = 2021

  -- agua
  SELECT 
     ValorReal2 as vreal,
	 ValorMinimo2 as vminimo,
	 ValorSatisfactorio2 as vsatisfactorio,
	 ValorSobresaliente2 as vsobresaliente
  FROM DatoReporte where IndicadorID = 41 and EntidadID = 13 and Periodo = 2021


  -- electricidad
  SELECT 
     ValorReal2 as vreal,
	 ValorMinimo2 as vminimo,
	 ValorSatisfactorio2 as vsatisfactorio,
	 ValorSobresaliente2 as vsobresaliente
  FROM DatoReporte where IndicadorID = 39 and EntidadID = 13 and Periodo = 2021 