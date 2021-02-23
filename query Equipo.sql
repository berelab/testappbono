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