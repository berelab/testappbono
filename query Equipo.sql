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