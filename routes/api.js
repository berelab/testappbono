'use strict'

import express from 'express';
const router = express.Router();

// users
import users from '../controllers/users/usersController';
// reportes
import reporte from '../controllers/users/reporteController';

//LA PAZ
import lapaz from '../controllers/lapaz/lapaz';
import corteLaPaz from '../controllers/lapaz/corteControllers.js';
import almacenLaPaz from '../controllers/lapaz/almacenControllers';
import choferLaPaz from '../controllers/lapaz/choferlocalController';
import cediLaPaz from '../controllers/lapaz/cediControllers';
import viguetaLaPaz from '../controllers/lapaz/viguetaControllers';
import moldeoLaPaz from '../controllers/lapaz/moldeoControllers';
import mantenimientoLaPaz from '../controllers/lapaz/mantenimientoController';

import bonosCorteLaPaz from '../controllers/lapaz/corteBonosController';
import produccionCorteLaPaz from '../controllers/lapaz/corteProduccionController';
import bonosBloqueraLaPaz from '../controllers/lapaz/bloqueraBonosController';
import produccionBloqueraLaPaz from '../controllers/lapaz/bloqueraProduccionController';
import bonosAlmacenLaPaz from '../controllers/lapaz/almacenBonosController';
import produccionAlmacenLaPaz from '../controllers/lapaz/almacenProduccionController';
import bonosChoferLaPaz from '../controllers/lapaz/choferBonosController';
import produccionChoferLaPaz from '../controllers/lapaz/choferProduccionController';
import bonosViguetaLaPaz from '../controllers/lapaz/viguetaBonosController';
import produccionViguetaLaPaz from '../controllers/lapaz/viguetaProduccionController';

//CD JUAREZ
import juarez from '../controllers/juarez/juarez';
import moldeoJuarez from '../controllers/juarez/moldeo';
import kbrsJuarez from '../controllers/juarez/kbrs';
import mcsframeJuarez from '../controllers/juarez/mcsframe';
import aosmithJuarez from '../controllers/juarez/aosmith';
import commscopeJuarez from '../controllers/juarez/commscope';
import electroluxJuarez from '../controllers/juarez/electrolux';
import corteJuarez from '../controllers/juarez/corte'
import placaJuarez from '../controllers/juarez/placa'
import aligeranteJuarez from '../controllers/juarez/aligerante';
import almacenJuarez from '../controllers/juarez/almacen';
import molinoJuarez from '../controllers/juarez/molino';
import choferesJuarez from '../controllers/juarez/choferes';
import mantenimientoJuarez from '../controllers/juarez/mantenimientoController';

import bonosAligeranteJuarez from '../controllers/juarez/aligeranteBonos';
import produccionAligeranteJuarez from '../controllers/juarez/aligeranteProduccion';
import bonosAlmacenJuarez from '../controllers/juarez/almacenBonos';
import produccionAlmacenJuarez from '../controllers/juarez/almacenProduccion';
import bonosAosmithJuarez from '../controllers/juarez/aosmithBonos';
import produccionAosmithJuarez from '../controllers/juarez/aosmithProduccion';
import bonosChoferLocalJuarez from '../controllers/juarez/choferesBonos';
import produccionChoferLocalJuarez from '../controllers/juarez/choferesProduccion';
import bonosCommscopeJuarez from '../controllers/juarez/commscopeBonos';
import produccionCommscopeJuarez from '../controllers/juarez/commscopeProduccion';
import bonosCorteJuarez from '../controllers/juarez/corteBonos';
import produccionCorteJuarez from '../controllers/juarez/corteProduccion';
import bonosElectroluxJuarez from '../controllers/juarez/electroluxBonos';
import produccionElectroluxJuarez from '../controllers/juarez/electroluxProduccion';
import bonosKbrsJuarez from '../controllers/juarez/kbrsBonos';
import produccionKbrsJuarez from '../controllers/juarez/kbrsProduccion';
import bonosMcsframeJuarez from '../controllers/juarez/mcsframeBonos';
import produccionMcsframeJuarez from '../controllers/juarez/mcsframeProduccion';
import bonosMolinoJuarez from '../controllers/juarez/molinoBonos';
import produccionMolinoJuarez from '../controllers/juarez/molinoProduccion';
import bonosMoldeoJuarez from '../controllers/juarez/moldeoBonos';
import produccionMoldeoJuarez from '../controllers/juarez/moldeoProduccion';
import bonosPlacaJuarez from '../controllers/juarez/placaBonos';
import produccionPlacaJuarez from '../controllers/juarez/placaProduccion';

//NOGALES
import nogales from '../controllers/nogales/nogales';
import corteNogales from '../controllers/nogales/corteController';
import bloqueraNogales from '../controllers/nogales/bloqueraController';
import moldeoNogales from '../controllers/nogales/moldeoController';
import almacenNogales from '../controllers/nogales/almacenController';
import choferesNogales from '../controllers/nogales/choferesController';
import preexpansionNogales from '../controllers/nogales/preexpansionController';
import mantenimientoNogales from '../controllers/nogales/mantenimientoController';

//HERMOSILLO
import hermosillo from '../controllers/hermosillo/hermosillo';
import bloqueraHermosillo from '../controllers/hermosillo/bloqueraController';
import corteHermosillo from '../controllers/hermosillo/corteController';
import steelfoamHermosillo from '../controllers/hermosillo/steelfoamController';
import choferesHermosillo from '../controllers/hermosillo/choferesController';
import mantenimientoHermosillo from '../controllers/hermosillo/mantenimientoController';
import almacenoHermosillo from '../controllers/hermosillo/almacenController';
import moldeoHermosillo from '../controllers/hermosillo/moldeoController';
import insulpanelHermosillo from '../controllers/hermosillo/insulpanelController';
import rotuladoT1Hermosillo from '../controllers/hermosillo/rotuladoT1Controller';

//GUADALAJARA
import guadalajara from '../controllers/guadalajara/guadalajara';
import preexpMoldeoGuadalajara from '../controllers/guadalajara/preexpMoldeoController';
import corteGuadalajara from '../controllers/guadalajara/corteController';
import almacenGuadalajara from '../controllers/guadalajara/almacenController';
import recuperaGuadalajara from '../controllers/guadalajara/recuperaController';
import insulpanelGuadalajara from '../controllers/guadalajara/insulpanelController';
import choferesGuadalajara from '../controllers/guadalajara/choferesController';
import moliendaMRGuadalajara from '../controllers/guadalajara/moliendaMRController';
import mantenimientoGuadalajara from '../controllers/guadalajara/mantenimientoController';

//--------------------------------------------------------------------------------------------------
// QUERETARO
import queretaro from '../controllers/queretaro/queretaro';
import preexpMoldeoQueretaro from '../controllers/queretaro/preexpMoldeoController';
import hieleraQueretaro from '../controllers/queretaro/hieleraController';
import corteQueretaro from '../controllers/queretaro/corteController';
import almacenQueretaro from '../controllers/queretaro/almacenController';
import insulpanelQueretaro from '../controllers/queretaro/insulpanelController';
import mantenimientoQueretaro from '../controllers/queretaro/mantenimientoController';
import choferesQueretaro from '../controllers/queretaro/choferesController';

//--------------------------------------------------------------------------------------------------
// VILLAHERMOSA
import villahermosa from '../controllers/villahermosa/villahermosa';
import traficoVillahermosa from '../controllers/villahermosa/traficoController';
import preexpMoldeoVillahermosa from '../controllers/villahermosa/preexpMoldeoController';
import corteVillahermosa from '../controllers/villahermosa/corteController';
import almacenVillahermosa from '../controllers/villahermosa/almacenController';
import mantenimientoVillahermosa from '../controllers/villahermosa/mantenimientoController';

//--------------------------------------------------------------------------------------------------
// CDMX
import cdmex from '../controllers/cdmx/cdmex';
import preexpMoldeoCdmx from '../controllers/cdmx/preexpMoldeoController';
import almacenCdmx from '../controllers/cdmx/almacenController';
import mantenimientoCdmx from '../controllers/cdmx/mantenimientoController';
import corteConstCdmx from '../controllers/cdmx/corteConstController';
import corteMaquilaCdmx from '../controllers/cdmx/corteMaquilaController';
import vitroCdmx from '../controllers/cdmx/vitroController';

import bonosBloqueraCdmx from '../controllers/cdmx/bloqueraBonosController';
import produccionBloqueraCdmx from '../controllers/cdmx/bloqueraProduccionController';
import bonosCorteCdmx from '../controllers/cdmx/corteBonosController';
import produccionCorteCdmx from '../controllers/cdmx/corteProduccionController';
import bonosMantenimientoCdmx from '../controllers/cdmx/mantenimientoBonosController';
//--------------------------------------------------------------------------------------------------
// MONTERREY
import monterrey from '../controllers/monterrey/monterrey';
import mantenimientoMonterrey from '../controllers/monterrey/mantenimientoController';
import choferesLocalesMonterrey from '../controllers/monterrey/choferesLocalesController';
import choferesCEDIMonterrey from '../controllers/monterrey/choferesCEDIController';
import moliendaMRMonterrey from '../controllers/monterrey/moliendaMRController';
import almacenCEDIMonterrey from '../controllers/monterrey/almacenCEDIController';
import almacenMonterrey from '../controllers/monterrey/almacenController';
import moldeoMonterrey from '../controllers/monterrey/moldeoController';
import emcoMonterrey from '../controllers/monterrey/emcoController';
import corteNIPMonterrey from '../controllers/monterrey/corteNIPController';
import corteLMonterrey from '../controllers/monterrey/corteLController';
import bloqueraMonterrey from '../controllers/monterrey/bloqueraController';
import herramentalMonterrey from '../controllers/monterrey/herramentalController';
import preexpansionMonterrey from '../controllers/monterrey/preexpansionController';
import rotuladoHielera1Monterrey from '../controllers/monterrey/rotuladoHielera1Controller';
import rotuladoHielera2Monterrey from '../controllers/monterrey/rotuladoHielera2Controller';
import rotuladoHielera3Monterrey from '../controllers/monterrey/rotuladoHielera3Controller';

//--------------------------------------------------------------------------------------------------
// MERIDA
import merida from '../controllers/merida/merida';
import mantenimientoMerida from '../controllers/merida/mantenimientoController';
import almacenMerida from '../controllers/merida/almacenController';
import choferesMerida from '../controllers/merida/choferesController';
import moldeoMerida from '../controllers/merida/moldeoController';
import corteMerida from '../controllers/merida/corteController';
import bloqueraMerida from '../controllers/merida/bloqueraController';
import rotuladoMerida from '../controllers/merida/rotuladoController';

//--------------------------------------------------------------------------------------------------
// VERACRUZ
import veracruz from '../controllers/veracruz/veracruz';
import bloqueraVeracruz from '../controllers/veracruz/bloqueraController';
import corteVeracruz from '../controllers/veracruz/corteController';
import emcoVeracruz from '../controllers/veracruz/emcoController';
import mantenimientoVeracruz from '../controllers/veracruz/mantenimientoController';
import moldeoVeracruz from '../controllers/veracruz/moldeoController';
import almacenVeracruz from '../controllers/veracruz/almacenController';
import almacenCediVeracruz from '../controllers/veracruz/almacenCediController';
import steelfoamVeracruz from '../controllers/veracruz/steelfoamController';
import choferesVeracruz from '../controllers/veracruz/choferesController';
import choferCediVeracruz from '../controllers/veracruz/choferCediController';
import construpanelVeracruz from '../controllers/veracruz/construpanelController';

//--------------------------------------------------------------------------------------------------
// MEXICALI
import choferesMexicali from '../controllers/mexicali/choferesController';
import rotuladoMexicali from '../controllers/mexicali/rotuladoController';
import almacenMexicali from '../controllers/mexicali/almacenController';
import produccionMexicali from '../controllers/mexicali/produccionController';
import mantenimientoMexicali from '../controllers/mexicali/mantenimientoController';

//--------------------------------------------------------------------------------------------------
// CANCUN
import cancun from '../controllers/cancun/cancun';
import mantenimientoCancun from '../controllers/cancun/mantenimientoController';
import corteCancun from '../controllers/cancun/corteController';
import preexpYMoldeoCancun from '../controllers/cancun/preexpYMoldeoController';
import almacenCancun from '../controllers/cancun/almacenController';
import almacenPlayaCancun from '../controllers/cancun/almacenPlayaController';
import empaquePerlaCancun from '../controllers/cancun/empaquePerlaController';
import traficoCancun from '../controllers/cancun/traficoController';

import bonosAlmacenCancun from '../controllers/cancun/almacenBonosController';
import produccionAlmacenCancun from '../controllers/cancun/almacenProduccionController';
import bonosCorteCancun from '../controllers/cancun/corteBonosController';
import produccionCorteCancun from '../controllers/cancun/corteProduccionController';
import bonosBloqueraCancun from '../controllers/cancun/bloqueraBonosController';
import produccionBloqueraCancun from '../controllers/cancun/bloqueraProduccionController';
import bonosMantenimientoCancun from '../controllers/cancun/mantenimientoBonosController';

// TIJUANA -----------------------------------------------------------------------------------------------
import tijuana from '../controllers/tijuana/tijuana';
import mantenimientoTijuana from '../controllers/tijuana/mantenimientoController';
import bonoGarantiaTijuana from '../controllers/tijuana/bonoGarantiaController';
import siloMolinoTijuana from '../controllers/tijuana/siloMolinoController';
import almacenTijuana from '../controllers/tijuana/almacenController';
import corteTijuana from '../controllers/tijuana/corteController';
import corteMaqTijuana from '../controllers/tijuana/corteMaqController';
import preexpYMoldeoTijuana from '../controllers/tijuana/preexpYMoldeoController';
import choferesLocalesTijuana from '../controllers/tijuana/choferesLocalesController';
import bonoTYGTijuana from '../controllers/tijuana/bonoTYGController';

// CULIACAN -------------------------------------------------------------------------------------
import culiacan from '../controllers/culiacan/culiacan'
import mantenimientoCuliacan  from '../controllers/culiacan/mantenimientoController';
import preexpYMoldeoCuliacan  from '../controllers/culiacan/preexpYMoldeoController';
import corteCuliacan  from '../controllers/culiacan/corteController';
import construpanelCuliacan  from '../controllers/culiacan/construpanelController';
import almacenConstCuliacan  from '../controllers/culiacan/almacenConstController';
import almacenCuliacan  from '../controllers/culiacan/almacenController';
import choferesLocalesCuliacan  from '../controllers/culiacan/choferesLocalesController';
import moliendaCuliacan  from '../controllers/culiacan/moliendaController';
import mantenimientoEdificiosCuliacan  from '../controllers/culiacan/mantenimientoEdificiosController';

import bonosBloqueraCuliacan from '../controllers/culiacan/bloqueraBonosController';
import produccionBloqueraCuliacan from '../controllers/culiacan/bloqueraProduccionController';
import bonosMantenimientoCuliacan from '../controllers/culiacan/manetenimientoBonosController';
import bonosCorteCuliacan from '../controllers/culiacan/corteBonosController';
import produccionCorteCuliacan from '../controllers/culiacan/corteProduccionController';
import bonosPanelCuliacan from '../controllers/culiacan/construpanelBonosController';
import produccionPanelCuliacan from '../controllers/culiacan/construpanelProduccionController';
import bonosAlmacenCuliacan from '../controllers/culiacan/almacenBonosController';
import produccionAlmacenCuliacan from '../controllers/culiacan/almacenProduccionController';
import bonosChoferLocalCuliacan from '../controllers/culiacan/choferLocalBonosController';
import produccionChoferLocalCuliacan from '../controllers/culiacan/choferLocalProduccionController';

//----------------------------------------------------------------------------------------------------
// users
router.get('/test', users.home);
router.post('/login', users.login);
router.post('/reenviar-codigo', users.resendCode);
router.post('/cambiar-pass', users.changePass);

router.get('/guardar', users.save); 
//router.get('/vaciar-tabla', users.clear); 

//Reportes
router.get('/colab-bonos', reporte.getBonosColab);
router.get('/colab-produccion', reporte.getProdColab);
router.get('/deptos-bonos', reporte.getBonosDepto);
router.get('/deptos-produccion', reporte.getProdDepto);

//------------------------------------------------------------------------------------------------------------
//LA PAZ
router.get('/lapaz', lapaz.data)
router.put('/lapaz/admin/corte', corteLaPaz.editInfo);
router.get('/lapaz/corte', corteLaPaz.home);
router.get('/lapaz/corte/calculator', corteLaPaz.calculator);
router.get('/lapaz/corte/calculator/:index', corteLaPaz.calculator);

router.put('/lapaz/admin/almacen', almacenLaPaz.editInfo);
router.get('/lapaz/almacen', almacenLaPaz.home);
router.get('/lapaz/almacen/calculator', almacenLaPaz.calculator);
router.get('/lapaz/almacen/calculator/:index', almacenLaPaz.calculator);

router.put('/lapaz/admin/choferlocal', choferLaPaz.editInfo);
router.get('/lapaz/choferlocal', choferLaPaz.home);
router.get('/lapaz/choferlocal/calculator', choferLaPaz.calculator);
router.get('/lapaz/choferlocal/calculator/:index', choferLaPaz.calculator);

router.put('/lapaz/admin/chofercedi', cediLaPaz.editInfo);
router.get('/lapaz/chofercedi', cediLaPaz.home);
router.get('/lapaz/chofercedi/calculator', cediLaPaz.calculator);
router.get('/lapaz/chofercedi/calculator/:index', cediLaPaz.calculator);

router.put('/lapaz/admin/vigueta', viguetaLaPaz.editInfo);
router.get('/lapaz/vigueta', viguetaLaPaz.home);
router.get('/lapaz/vigueta/calculator', viguetaLaPaz.calculator);
router.get('/lapaz/vigueta/calculator/:index', viguetaLaPaz.calculator);

router.put('/lapaz/admin/bloquera', moldeoLaPaz.editInfo);
router.get('/lapaz/bloquera', moldeoLaPaz.home);
router.get('/lapaz/bloquera/calculator', moldeoLaPaz.calculator);
router.get('/lapaz/bloquera/calculator/:index', moldeoLaPaz.calculator);

router.get('/lapaz/mantenimiento', mantenimientoLaPaz.home);
router.get('/lapaz/mantenimiento/calculator', mantenimientoLaPaz.calculator);
router.get('/lapaz/mantenimiento/calculator/:index', mantenimientoLaPaz.calculator);

/* produccion y montos */
router.get('/lapaz/corte/bonos', bonosCorteLaPaz.home);
router.get('/lapaz/corte/produccion', produccionCorteLaPaz.home);

router.get('/lapaz/bloquera/bonos', bonosBloqueraLaPaz.home);
router.get('/lapaz/bloquera/produccion', produccionBloqueraLaPaz.home);

router.get('/lapaz/almacen/bonos', bonosAlmacenLaPaz.home);
router.get('/lapaz/almacen/produccion', produccionAlmacenLaPaz.home);

router.get('/lapaz/choferlocal/bonos', bonosChoferLaPaz.home);
router.get('/lapaz/choferlocal/produccion', produccionChoferLaPaz.home);

router.get('/lapaz/vigueta/bonos', bonosViguetaLaPaz.home);
router.get('/lapaz/vigueta/produccion', produccionViguetaLaPaz.home);
//------------------------------------------------------------------------------------------------------------
//CD JUAREZ
router.get('/juarez', juarez.data)
router.put('/juarez/admin/bloquera', moldeoJuarez.editInfo);
router.get('/juarez/bloquera', moldeoJuarez.home);
router.get('/juarez/bloquera/calculator', moldeoJuarez.calculator);
router.get('/juarez/bloquera/calculator/:index', moldeoJuarez.calculator);

router.put('/juarez/admin/kbrs', kbrsJuarez.editInfo);
router.get('/juarez/kbrs', kbrsJuarez.home);
router.get('/juarez/kbrs/calculator', kbrsJuarez.calculator);
router.get('/juarez/kbrs/calculator/:index', kbrsJuarez.calculator);

router.put('/juarez/admin/mcsframe', mcsframeJuarez.editInfo);
router.get('/juarez/mcsframe', mcsframeJuarez.home);
router.get('/juarez/mcsframe/calculator', mcsframeJuarez.calculator);
router.get('/juarez/mcsframe/calculator/:index', mcsframeJuarez.calculator);

router.put('/juarez/admin/aosmith', aosmithJuarez.editInfo);
router.get('/juarez/aosmith', aosmithJuarez.home);
router.get('/juarez/aosmith/calculator', aosmithJuarez.calculator);
router.get('/juarez/aosmith/calculator/:index', aosmithJuarez.calculator);

router.put('/juarez/admin/commscope', commscopeJuarez.editInfo);
router.get('/juarez/commscope', commscopeJuarez.home);
router.get('/juarez/commscope/calculator', commscopeJuarez.calculator);
router.get('/juarez/commscope/calculator/:index', commscopeJuarez.calculator);

router.put('/juarez/admin/electrolux', electroluxJuarez.editInfo);
router.get('/juarez/electrolux', electroluxJuarez.home);
router.get('/juarez/electrolux/calculator', electroluxJuarez.calculator);
router.get('/juarez/electrolux/calculator/:index', electroluxJuarez.calculator);

router.put('/juarez/admin/corte', corteJuarez.editInfo);
router.get('/juarez/corte', corteJuarez.home);
router.get('/juarez/corte/calculator', corteJuarez.calculator);
router.get('/juarez/corte/calculator/:index', corteJuarez.calculator);

router.put('/juarez/admin/placa', placaJuarez.editInfo);
router.get('/juarez/placa', placaJuarez.home);
router.get('/juarez/placa/calculator', placaJuarez.calculator);
router.get('/juarez/placa/calculator/:index', placaJuarez.calculator);

router.put('/juarez/admin/aligerante', aligeranteJuarez.editInfo);
router.get('/juarez/aligerante', aligeranteJuarez.home);
router.get('/juarez/aligerante/calculator', aligeranteJuarez.calculator);
router.get('/juarez/aligerante/calculator/:index', aligeranteJuarez.calculator);

router.put('/juarez/admin/almacen', almacenJuarez.editInfo);
router.get('/juarez/almacen', almacenJuarez.home);
router.get('/juarez/almacen/calculator', almacenJuarez.calculator);
router.get('/juarez/almacen/calculator/:index', almacenJuarez.calculator);

router.put('/juarez/admin/molino', molinoJuarez.editInfo);
router.get('/juarez/molino', molinoJuarez.home);
router.get('/juarez/molino/calculator', molinoJuarez.calculator);
router.get('/juarez/molino/calculator/:index', molinoJuarez.calculator);

router.put('/juarez/admin/choferes', choferesJuarez.editInfo);
router.get('/juarez/choferes', choferesJuarez.home);
router.get('/juarez/choferes/calculator', choferesJuarez.calculator);
router.get('/juarez/choferes/calculator/:index', choferesJuarez.calculator);

router.get('/juarez/mantenimiento', mantenimientoJuarez.home);
router.get('/juarez/mantenimiento/calculator', mantenimientoJuarez.calculator);
router.get('/juarez/mantenimiento/calculator/:index', mantenimientoJuarez.calculator);

/** produccion y bonos juarez */
router.get('/juarez/choferes/bonos', bonosChoferLocalJuarez.home);
router.get('/juarez/choferes/produccion', produccionChoferLocalJuarez.home);

router.get('/juarez/almacen/bonos', bonosAlmacenJuarez.home);
router.get('/juarez/almacen/produccion', produccionAlmacenJuarez.home);

router.get('/juarez/aligerante/bonos', bonosAligeranteJuarez.home);
router.get('/juarez/aligerante/produccion', produccionAligeranteJuarez.home);

router.get('/juarez/commscope/bonos', bonosCommscopeJuarez.home);
router.get('/juarez/commscope/produccion', produccionCommscopeJuarez.home);

router.get('/juarez/aosmith/bonos', bonosAosmithJuarez.home);
router.get('/juarez/aosmith/produccion', produccionAosmithJuarez.home);

router.get('/juarez/corte/bonos', bonosCorteJuarez.home);
router.get('/juarez/corte/produccion', produccionCorteJuarez.home);

router.get('/juarez/electrolux/bonos', bonosElectroluxJuarez.home);
router.get('/juarez/electrolux/produccion', produccionElectroluxJuarez.home);

router.get('/juarez/kbrs/bonos', bonosKbrsJuarez.home);
router.get('/juarez/kbrs/produccion', produccionKbrsJuarez.home);

router.get('/juarez/mcsframe/bonos', bonosMcsframeJuarez.home);
router.get('/juarez/mcsframe/produccion', produccionMcsframeJuarez.home);

router.get('/juarez/moldeo/bonos', bonosMoldeoJuarez.home);
router.get('/juarez/moldeo/produccion', produccionMoldeoJuarez.home);

router.get('/juarez/molino/bonos', bonosMolinoJuarez.home);
router.get('/juarez/molino/produccion', produccionMolinoJuarez.home);

router.get('/juarez/placa/bonos', bonosPlacaJuarez.home);
router.get('/juarez/placa/produccion', produccionPlacaJuarez.home);

//------------------------------------------------------------------------------------------------------------
//NOGALES
router.get('/nogales', nogales.data)
router.put('/nogales/admin/corte', corteNogales.editInfo);
router.get('/nogales/corte', corteNogales.home);
router.get('/nogales/corte/calculator/', corteNogales.calculator);
router.get('/nogales/corte/calculator/:index', corteNogales.calculator);

router.put('/nogales/admin/bloquera', bloqueraNogales.editInfo);
router.get('/nogales/bloquera', bloqueraNogales.home);
router.get('/nogales/bloquera/calculator/', bloqueraNogales.calculator);
router.get('/nogales/bloquera/calculator/:index', bloqueraNogales.calculator);

router.put('/nogales/admin/moldeo', moldeoNogales.editInfo);
router.get('/nogales/moldeo', moldeoNogales.home);
router.get('/nogales/moldeo/calculator/', moldeoNogales.calculator);
router.get('/nogales/moldeo/calculator/:index', moldeoNogales.calculator);

router.put('/nogales/admin/almacen', almacenNogales.editInfo);
router.get('/nogales/almacen', almacenNogales.home);
router.get('/nogales/almacen/calculator/', almacenNogales.calculator);
router.get('/nogales/almacen/calculator/:index', almacenNogales.calculator);

router.put('/nogales/admin/choferlocal', choferesNogales.editInfo);
router.get('/nogales/choferlocal', choferesNogales.home);
router.get('/nogales/choferlocal/calculator/', choferesNogales.calculator);
router.get('/nogales/choferlocal/calculator/:index', choferesNogales.calculator);

router.get('/nogales/preexpansion', preexpansionNogales.home);
router.get('/nogales/preexpansion/calculator/', preexpansionNogales.calculator);
router.get('/nogales/preexpansion/calculator/:index', preexpansionNogales.calculator);

router.get('/nogales/mantenimiento', mantenimientoNogales.home);
router.get('/nogales/mantenimiento/calculator/', mantenimientoNogales.calculator);
router.get('/nogales/mantenimiento/calculator/:index', mantenimientoNogales.calculator);

//------------------------------------------------------------------------------------------
//HERMOSILLO

router.get('/hermosillo', hermosillo.data)
router.put('/hermosillo/admin/bloquera', bloqueraHermosillo.editInfo);
router.get('/hermosillo/bloquera', bloqueraHermosillo.home);
router.get('/hermosillo/bloquera/calculator/', bloqueraHermosillo.calculator);
router.get('/hermosillo/bloquera/calculator/:index', bloqueraHermosillo.calculator);

router.put('/hermosillo/admin/corte', corteHermosillo.editInfo);
router.get('/hermosillo/corte',  corteHermosillo.home);
router.get('/hermosillo/corte/calculator/', corteHermosillo.calculator);
router.get('/hermosillo/corte/calculator/:index',  corteHermosillo.calculator);

router.put('/hermosillo/admin/steelfoam', steelfoamHermosillo.editInfo);
router.get('/hermosillo/steelfoam',  steelfoamHermosillo.home);
router.get('/hermosillo/steelfoam/calculator/',  steelfoamHermosillo.calculator);
router.get('/hermosillo/steelfoam/calculator/:index',  steelfoamHermosillo.calculator);

router.put('/hermosillo/admin/choferlocal', choferesHermosillo.editInfo);
router.get('/hermosillo/choferlocal',  choferesHermosillo.home);
router.get('/hermosillo/choferlocal/calculator/',  choferesHermosillo.calculator);
router.get('/hermosillo/choferlocal/calculator/:index',  choferesHermosillo.calculator);

router.get('/hermosillo/mantenimiento', mantenimientoHermosillo.home);
router.get('/hermosillo/mantenimiento/calculator/', mantenimientoHermosillo.calculator);
router.get('/hermosillo/mantenimiento/calculator/:index', mantenimientoHermosillo.calculator);

router.put('/hermosillo/admin/almacen', almacenoHermosillo.editInfo);
router.get('/hermosillo/almacen', almacenoHermosillo.home);
router.get('/hermosillo/almacen/calculator', almacenoHermosillo.calculator);
router.get('/hermosillo/almacen/calculator/:index', almacenoHermosillo.calculator);

router.put('/hermosillo/admin/moldeo', moldeoHermosillo.editInfo);
router.get('/hermosillo/moldeo', moldeoHermosillo.home);
router.get('/hermosillo/moldeo/calculator/', moldeoHermosillo.calculator);
router.get('/hermosillo/moldeo/calculator/:index', moldeoHermosillo.calculator);

router.get('/hermosillo/insulpanel', insulpanelHermosillo.home);
router.get('/hermosillo/insulpanel/calculator/', insulpanelHermosillo.calculator);
router.get('/hermosillo/insulpanel/calculator/:index', insulpanelHermosillo.calculator);

router.put('/hermosillo/admin/rotulado', rotuladoT1Hermosillo.editInfo);
router.get('/hermosillo/rotulado', rotuladoT1Hermosillo.home);
router.get('/hermosillo/rotulado/calculator/', rotuladoT1Hermosillo.calculator);
router.get('/hermosillo/rotulado/calculator/:index', rotuladoT1Hermosillo.calculator);


//--------------------------------------------------------------------------------------------------
// GUADALAJARA 

router.get('/guadalajara', guadalajara.data)
router.put('/guadalajara/admin/bloquera', preexpMoldeoGuadalajara.editInfo);
router.get('/guadalajara/bloquera/', preexpMoldeoGuadalajara.home);
router.get('/guadalajara/bloquera/calculator', preexpMoldeoGuadalajara.calculator);
router.get('/guadalajara/bloquera/calculator/:index', preexpMoldeoGuadalajara.calculator);

router.put('/guadalajara/admin/corte', corteGuadalajara.editInfo);
router.get('/guadalajara/corte/', corteGuadalajara.home);
router.get('/guadalajara/corte/calculator', corteGuadalajara.calculator);
router.get('/guadalajara/corte/calculator/:index', corteGuadalajara.calculator);

router.put('/guadalajara/admin/almacen', almacenGuadalajara.editInfo);
router.get('/guadalajara/almacen/', almacenGuadalajara.home);
router.get('/guadalajara/almacen/calculator', almacenGuadalajara.calculator);
router.get('/guadalajara/almacen/calculator/:index', almacenGuadalajara.calculator);

router.get('/guadalajara/recupera/', recuperaGuadalajara.home);
router.get('/guadalajara/recupera/calculator', recuperaGuadalajara.calculator);
router.get('/guadalajara/recupera/calculator/:index', recuperaGuadalajara.calculator);

router.get('/guadalajara/insulpanel/', insulpanelGuadalajara.home);
router.get('/guadalajara/insulpanel/calculator', insulpanelGuadalajara.calculator);
router.get('/guadalajara/insulpanel/calculator/:index', insulpanelGuadalajara.calculator);

router.put('/guadalajara/admin/choferlocal', choferesGuadalajara.editInfo);
router.get('/guadalajara/choferlocal/', choferesGuadalajara.home);
router.get('/guadalajara/choferlocal/calculator', choferesGuadalajara.calculator);
router.get('/guadalajara/choferlocal/calculator/:index', choferesGuadalajara.calculator);

router.put('/guadalajara/admin/molino', moliendaMRGuadalajara.editInfo);
router.get('/guadalajara/molino/', moliendaMRGuadalajara.home);
router.get('/guadalajara/molino/calculator', moliendaMRGuadalajara.calculator);
router.get('/guadalajara/molino/calculator/:index', moliendaMRGuadalajara.calculator);

router.get('/guadalajara/mantenimiento/', mantenimientoGuadalajara.home);
router.get('/guadalajara/mantenimiento/calculator', mantenimientoGuadalajara.calculator);
router.get('/guadalajara/mantenimiento/calculator/:index', mantenimientoGuadalajara.calculator);

//--------------------------------------------------------------------------------------------------
// QUERETARO
router.get('/queretaro', queretaro.data)
router.put('/queretaro/admin/bloquera', preexpMoldeoQueretaro.editInfo);
router.get('/queretaro/bloquera/', preexpMoldeoQueretaro.home);
router.get('/queretaro/bloquera/calculator', preexpMoldeoQueretaro.calculator);
router.get('/queretaro/bloquera/calculator/:index', preexpMoldeoQueretaro.calculator);

router.put('/queretaro/admin/moldeo', hieleraQueretaro.editInfo);
router.get('/queretaro/moldeo/', hieleraQueretaro.home);
router.get('/queretaro/moldeo/calculator', hieleraQueretaro.calculator);
router.get('/queretaro/moldeo/calculator/:index', hieleraQueretaro.calculator);

router.put('/queretaro/admin/corte', corteQueretaro.editInfo);
router.get('/queretaro/corte/', corteQueretaro.home);
router.get('/queretaro/corte/calculator',corteQueretaro.calculator);
router.get('/queretaro/corte/calculator/:index', corteQueretaro.calculator);

router.put('/queretaro/admin/almacen', almacenQueretaro.editInfo);
router.get('/queretaro/almacen/', almacenQueretaro.home);
router.get('/queretaro/almacen/calculator',almacenQueretaro.calculator);
router.get('/queretaro/almacen/calculator/:index', almacenQueretaro.calculator);

router.get('/queretaro/insulpanel/', insulpanelQueretaro.home);
router.get('/queretaro/insulpanel/calculator',insulpanelQueretaro.calculator);
router.get('/queretaro/insulpanel/calculator/:index', insulpanelQueretaro.calculator);

router.get('/queretaro/mantenimiento/', mantenimientoQueretaro.home);
router.get('/queretaro/mantenimiento/calculator',mantenimientoQueretaro.calculator);
router.get('/queretaro/mantenimiento/calculator/:index', mantenimientoQueretaro.calculator);

router.put('/queretaro/admin/choferlocal', choferesQueretaro.editInfo);
router.get('/queretaro/choferlocal/', choferesQueretaro.home);
router.get('/queretaro/choferlocal/calculator',choferesQueretaro.calculator);
router.get('/queretaro/choferlocal/calculator/:index', choferesQueretaro.calculator);

//--------------------------------------------------------------------------------------------------
// VILLAHERMOSA
router.get('/villahermosa', villahermosa.data)
router.get('/villahermosa/trafico/', traficoVillahermosa.home);
router.get('/villahermosa/trafico/calculator' ,traficoVillahermosa.calculator);
router.get('/villahermosa/trafico/calculator/:index', traficoVillahermosa.calculator);

router.put('/villahermosa/admin/bloquera', preexpMoldeoVillahermosa.editInfo);
router.get('/villahermosa/bloquera/', preexpMoldeoVillahermosa.home);
router.get('/villahermosa/bloquera/calculator', preexpMoldeoVillahermosa.calculator);
router.get('/villahermosa/bloquera/calculator/:index', preexpMoldeoVillahermosa.calculator);

router.put('/villahermosa/admin/corte', corteVillahermosa.editInfo);
router.get('/villahermosa/corte/', corteVillahermosa.home);
router.get('/villahermosa/corte/calculator', corteVillahermosa.calculator);
router.get('/villahermosa/corte/calculator/:index', corteVillahermosa.calculator);

router.get('/villahermosa/almacen/', almacenVillahermosa.home);
router.get('/villahermosa/almacen/calculator', almacenVillahermosa.calculator);
router.get('/villahermosa/almacen/calculator/:index', almacenVillahermosa.calculator);

router.get('/villahermosa/mantenimiento/', mantenimientoVillahermosa.home);
router.get('/villahermosa/mantenimiento/calculator', mantenimientoVillahermosa.calculator);
router.get('/villahermosa/mantenimiento/calculator/:index', mantenimientoVillahermosa.calculator);

//--------------------------------------------------------------------------------------------------
// CDMX

router.get('/cdmexico', cdmex.data)
router.get('/cdmexico/almacen/', almacenCdmx.home);
router.get('/cdmexico/almacen/calculator', almacenCdmx.calculator);
router.get('/cdmexico/almacen/calculator/:index', almacenCdmx.calculator);

router.put('/cdmexico/admin/bloquera', preexpMoldeoCdmx.editInfo);
router.get('/cdmexico/bloquera/', preexpMoldeoCdmx.home);
router.get('/cdmexico/bloquera/calculator', preexpMoldeoCdmx.calculator);
router.get('/cdmexico/bloquera/calculator/:index', preexpMoldeoCdmx.calculator);

router.get('/cdmexico/mantenimiento/', mantenimientoCdmx.home);
router.get('/cdmexico/mantenimiento/calculator', mantenimientoCdmx.calculator);
router.get('/cdmexico/mantenimiento/calculator/:index', mantenimientoCdmx.calculator);

router.put('/cdmexico/admin/corte', corteConstCdmx.editInfo);
router.get('/cdmexico/corte/', corteConstCdmx.home);
router.get('/cdmexico/corte/calculator', corteConstCdmx.calculator);
router.get('/cdmexico/corte/calculator/:index', corteConstCdmx.calculator);

router.get('/cdmexico/cortemaquila/', corteMaquilaCdmx.home);
router.get('/cdmexico/cortemaquila/calculator', corteMaquilaCdmx.calculator);
router.get('/cdmexico/cortemaquila/calculator/:index', corteMaquilaCdmx.calculator);

router.get('/cdmexico/vitro/', vitroCdmx.home);
router.get('/cdmexico/vitro/calculator', vitroCdmx.calculator);
router.get('/cdmexico/vitro/calculator/:index', vitroCdmx.calculator);

/** bonos y produccion rutas */
router.get('/cdmexico/bloquera/bonos', bonosBloqueraCdmx.home);
router.get('/cdmexico/bloquera/produccion', produccionBloqueraCdmx.home);

router.get('/cdmexico/corte/bonos', bonosCorteCdmx.home);
router.get('/cdmexico/corte/produccion', produccionCorteCdmx.home);

router.get('/cdmexico/corte/bonos', bonosMantenimientoCdmx.home);

//--------------------------------------------------------------------------------------------------
// Monterrey
router.get('/monterrey', monterrey.data)
router.get('/monterrey/mantenimiento/', mantenimientoMonterrey.home);
router.get('/monterrey/mantenimiento/calculator', mantenimientoMonterrey.calculator);
router.get('/monterrey/mantenimiento/calculator/:index', mantenimientoMonterrey.calculator);

router.put('/monterrey/admin/choferlocal', choferesLocalesMonterrey.editInfo);
router.get('/monterrey/choferlocal/', choferesLocalesMonterrey.home);
router.get('/monterrey/choferlocal/calculator', choferesLocalesMonterrey.calculator);
router.get('/monterrey/choferlocal/calculator/:index', choferesLocalesMonterrey.calculator);

router.get('/monterrey/choferes-cedi/', choferesCEDIMonterrey.home);
router.get('/monterrey/choferes-cedi/calculator', choferesCEDIMonterrey.calculator);
router.get('/monterrey/choferes-cedi/calculator/:index', choferesCEDIMonterrey.calculator);

router.put('/monterrey/admin/molino', moliendaMRMonterrey.editInfo);
router.get('/monterrey/molino/', moliendaMRMonterrey.home);
router.get('/monterrey/molino/calculator', moliendaMRMonterrey.calculator);
router.get('/monterrey/molino/calculator/:index', moliendaMRMonterrey.calculator);

router.get('/monterrey/almacen-cedi/', almacenCEDIMonterrey.home);
router.get('/monterrey/almacen-cedi/calculator', almacenCEDIMonterrey.calculator);
router.get('/monterrey/almacen-cedi/calculator/:index', almacenCEDIMonterrey.calculator);

router.put('/monterrey/admin/almacen', almacenMonterrey.editInfo);
router.get('/monterrey/almacen/', almacenMonterrey.home);
router.get('/monterrey/almacen/calculator', almacenMonterrey.calculator);
router.get('/monterrey/almacen/calculator/:index', almacenMonterrey.calculator);

router.put('/monterrey/admin/moldeo', moldeoMonterrey.editInfo);
router.get('/monterrey/moldeo/', moldeoMonterrey.home);
router.get('/monterrey/moldeo/calculator', moldeoMonterrey.calculator);
router.get('/monterrey/moldeo/calculator/:index', moldeoMonterrey.calculator);

router.put('/monterrey/admin/emcorte', emcoMonterrey.editInfo);
router.get('/monterrey/emcorte/', emcoMonterrey.home);
router.get('/monterrey/emcorte/calculator', emcoMonterrey.calculator);
router.get('/monterrey/emcorte/calculator/:index', emcoMonterrey.calculator);

router.put('/monterrey/admin/cortenip', corteNIPMonterrey.editInfo);
router.get('/monterrey/cortenip/', corteNIPMonterrey.home);
router.get('/monterrey/cortenip/calculator', corteNIPMonterrey.calculator);
router.get('/monterrey/cortenip/calculator/:index', corteNIPMonterrey.calculator);

router.get('/monterrey/corte-l/', corteLMonterrey.home);
router.get('/monterrey/corte-l/calculator', corteLMonterrey.calculator);
router.get('/monterrey/corte-l/calculator/:index', corteLMonterrey.calculator);

router.put('/monterrey/admin/bloquera', bloqueraMonterrey.editInfo);
router.get('/monterrey/bloquera/', bloqueraMonterrey.home);
router.get('/monterrey/bloquera/calculator', bloqueraMonterrey.calculator);
router.get('/monterrey/bloquera/calculator/:index', bloqueraMonterrey.calculator);

router.get('/monterrey/herramental/', herramentalMonterrey.home);
router.get('/monterrey/herramental/calculator', herramentalMonterrey.calculator);
router.get('/monterrey/herramental/calculator/:index', herramentalMonterrey.calculator);

router.get('/monterrey/preexpansion/', preexpansionMonterrey.home);
router.get('/monterrey/preexpansion/calculator', preexpansionMonterrey.calculator);
router.get('/monterrey/preexpansion/calculator/:index', preexpansionMonterrey.calculator);

router.put('/monterrey/admin/rotulado', rotuladoHielera1Monterrey.editInfo);
router.get('/monterrey/rotulado/', rotuladoHielera1Monterrey.home);
router.get('/monterrey/rotulado/calculator', rotuladoHielera1Monterrey.calculator);
router.get('/monterrey/rotulado/calculator/:index', rotuladoHielera1Monterrey.calculator);

router.get('/monterrey/rotulado-hielera-2/', rotuladoHielera2Monterrey.home);
router.get('/monterrey/rotulado-hielera-2/calculator', rotuladoHielera2Monterrey.calculator);
router.get('/monterrey/rotulado-hielera-2/calculator/:index', rotuladoHielera2Monterrey.calculator);

router.get('/monterrey/rotulado-hielera-3/', rotuladoHielera3Monterrey.home);
router.get('/monterrey/rotulado-hielera-3/calculator', rotuladoHielera3Monterrey.calculator);
router.get('/monterrey/rotulado-hielera-3/calculator/:index', rotuladoHielera3Monterrey.calculator);

// Merida ------------------------------------------------------------------------------------------
router.get('/merida/mantenimiento/', mantenimientoMerida.home);
router.get('/merida/mantenimiento/calculator',mantenimientoMerida.calculator);
router.get('/merida/mantenimiento/calculator/:index', mantenimientoMerida.calculator);

router.get('/merida', merida.data)
router.put('/merida/admin/almacen', almacenMerida.editInfo);
router.get('/merida/almacen/', almacenMerida.home);
router.get('/merida/almacen/calculator', almacenMerida.calculator);
router.get('/merida/almacen/calculator/:index', almacenMerida.calculator);

router.put('/merida/admin/choferlocal', choferesMerida.editInfo);
router.get('/merida/choferlocal/', choferesMerida.home);
router.get('/merida/choferlocal/calculator', choferesMerida.calculator);
router.get('/merida/choferlocal/calculator/:index', choferesMerida.calculator);

router.put('/merida/admin/moldeo', moldeoMerida.editInfo);
router.get('/merida/moldeo/', moldeoMerida.home);
router.get('/merida/moldeo/calculator', moldeoMerida.calculator);
router.get('/merida/moldeo/calculator/:index', moldeoMerida.calculator);

router.put('/merida/admin/corte', corteMerida.editInfo);
router.get('/merida/corte/', corteMerida.home);
router.get('/merida/corte/calculator', corteMerida.calculator);
router.get('/merida/corte/calculator/:index', corteMerida.calculator);

router.put('/merida/admin/bloquera', bloqueraMerida.editInfo);
router.get('/merida/bloquera/', bloqueraMerida.home);
router.get('/merida/bloquera/calculator', bloqueraMerida.calculator);
router.get('/merida/bloquera/calculator/:index', bloqueraMerida.calculator);

router.put('/merida/admin/rotulado', rotuladoMerida.editInfo);
router.get('/merida/rotulado/', rotuladoMerida.home);
router.get('/merida/rotulado/calculator', rotuladoMerida.calculator);
router.get('/merida/rotulado/calculator/:index', rotuladoMerida.calculator);

//VERACRUZ ------------------------------------------------------------------------------

router.get('/veracruz/bloquera/', bloqueraVeracruz.home);
router.get('/veracruz/bloquera/calculator', bloqueraVeracruz.calculator);
router.get('/veracruz/bloquera/calculator/:index', bloqueraVeracruz.calculator);

router.put('/veracruz/admin/corte', corteVeracruz.editInfo);
router.get('/veracruz/corte/', corteVeracruz.home);
router.get('/veracruz/corte/calculator', corteVeracruz.calculator);
router.get('/veracruz/corte/calculator/:index', corteVeracruz.calculator);

router.get('/veracruz', veracruz.data)
router.put('/veracruz/admin/emcorte', emcoVeracruz.editInfo);
router.get('/veracruz/emcorte/', emcoVeracruz.home);
router.get('/veracruz/emcorte/calculator', emcoVeracruz.calculator);
router.get('/veracruz/emcorte/calculator/:index', emcoVeracruz.calculator);

router.put('/veracruz/admin/moldeo', moldeoVeracruz.editInfo);
router.get('/veracruz/moldeo/', moldeoVeracruz.home);
router.get('/veracruz/moldeo/calculator', moldeoVeracruz.calculator);
router.get('/veracruz/moldeo/calculator/:index', moldeoVeracruz.calculator);

router.get('/veracruz/almacen/', almacenVeracruz.home);
router.get('/veracruz/almacen/calculator', almacenVeracruz.calculator);
router.get('/veracruz/almacen/calculator/:index', almacenVeracruz.calculator);

router.get('/veracruz/almacen-cedi/', almacenCediVeracruz.home);
router.get('/veracruz/almacen-cedi/calculator', almacenCediVeracruz.calculator);
router.get('/veracruz/almacen-cedi/calculator/:index', almacenCediVeracruz.calculator);

router.get('/veracruz/mantenimiento/', mantenimientoVeracruz.home);
router.get('/veracruz/mantenimiento/calculator', mantenimientoVeracruz.calculator);
router.get('/veracruz/mantenimiento/calculator/:index', mantenimientoVeracruz.calculator);

router.put('/veracruz/admin/steelfoam', steelfoamVeracruz.editInfo);
router.get('/veracruz/steelfoam/', steelfoamVeracruz.home);
router.get('/veracruz/steelfoam/calculator', steelfoamVeracruz.calculator);
router.get('/veracruz/steelfoam/calculator/:index', steelfoamVeracruz.calculator);

router.put('/veracruz/admin/choferlocal', choferesVeracruz.editInfo);
router.get('/veracruz/choferlocal/', choferesVeracruz.home);
router.get('/veracruz/choferlocal/calculator', choferesVeracruz.calculator);
router.get('/veracruz/choferlocal/calculator/:index', choferesVeracruz.calculator);

router.get('/veracruz/chofer-cedi/', choferCediVeracruz.home);
router.get('/veracruz/chofer-cedi/calculator', choferCediVeracruz.calculator);
router.get('/veracruz/chofer-cedi/calculator/:index', choferCediVeracruz.calculator);

router.put('/veracruz/admin/panel', construpanelVeracruz.editInfo);
router.get('/veracruz/panel/', construpanelVeracruz.home);
router.get('/veracruz/panel/calculator', construpanelVeracruz.calculator);
router.get('/veracruz/panel/calculator/:index', construpanelVeracruz.calculator);

//MEXICALI ---------------------------------------------------------------------
router.get('/mexicali/choferes/', choferesMexicali.home);
router.get('/mexicali/choferes/calculator', choferesMexicali.calculator);
router.get('/mexicali/choferes/calculator/:index', choferesMexicali.calculator);

router.get('/mexicali/rotulado/', rotuladoMexicali.home);
router.get('/mexicali/rotulado/calculator', rotuladoMexicali.calculator);
router.get('/mexicali/rotulado/calculator/:index', rotuladoMexicali.calculator);

router.get('/mexicali/almacen/', almacenMexicali.home);
router.get('/mexicali/almacen/calculator', almacenMexicali.calculator);
router.get('/mexicali/almacen/calculator/:index', almacenMexicali.calculator);

router.get('/mexicali/produccion/', produccionMexicali.home);
router.get('/mexicali/produccion/calculator', produccionMexicali.calculator);
router.get('/mexicali/produccion/calculator/:index', produccionMexicali.calculator);

router.get('/mexicali/mantenimiento/', mantenimientoMexicali.home);
router.get('/mexicali/mantenimiento/calculator', mantenimientoMexicali.calculator);
router.get('/mexicali/mantenimiento/calculator/:index', mantenimientoMexicali.calculator);

//CANCUN-----------------------------------------------------------------------------

router.get('/cancun', cancun.data)
router.get('/cancun/mantenimiento/', mantenimientoCancun.home);
router.get('/cancun/mantenimiento/calculator', mantenimientoCancun.calculator);
router.get('/cancun/mantenimiento/calculator/:index', mantenimientoCancun.calculator);

router.put('/cancun/admin/corte', corteCancun.editInfo);
router.get('/cancun/corte/', corteCancun.home);
router.get('/cancun/corte/calculator', corteCancun.calculator);
router.get('/cancun/corte/calculator/:index', corteCancun.calculator);

router.put('/cancun/admin/bloquera', preexpYMoldeoCancun.editInfo);
router.get('/cancun/bloquera/', preexpYMoldeoCancun.home);
router.get('/cancun/bloquera/calculator', preexpYMoldeoCancun.calculator);
router.get('/cancun/bloquera/calculator/:index', preexpYMoldeoCancun.calculator);

router.put('/cancun/admin/almacen', almacenCancun.editInfo);
router.get('/cancun/almacen/', almacenCancun.home);
router.get('/cancun/almacen/calculator', almacenCancun.calculator);
router.get('/cancun/almacen/calculator/:index', almacenCancun.calculator);

/** bonos y produccion rutas */
router.get('/cancun/corte/bonos', bonosCorteCancun.home);
router.get('/cancun/corte/produccion', produccionCorteCancun.home);

router.get('/cancun/bloquera/bonos', bonosBloqueraCancun.home);
router.get('/cancun/bloquera/produccion', produccionBloqueraCancun.home);

router.get('/cancun/almacen/bonos', bonosAlmacenCancun.home);
router.get('/cancun/almacen/produccion', produccionAlmacenCancun.home);

router.get('/cancun/mantenimiento/bonos', bonosMantenimientoCancun.home);



router.get('/cancun/almacen-playa/', almacenPlayaCancun.home);
router.get('/cancun/almacen-playa/calculator', almacenPlayaCancun.calculator);
router.get('/cancun/almacen-playa/calculator/:index', almacenPlayaCancun.calculator);

router.get('/cancun/empaque-perla/', empaquePerlaCancun.home);
router.get('/cancun/empaque-perla/calculator', empaquePerlaCancun.calculator);
router.get('/cancun/empaque-perla/calculator/:index', empaquePerlaCancun.calculator);

router.get('/cancun/trafico/', traficoCancun.home);
router.get('/cancun/trafico/calculator', traficoCancun.calculator);
router.get('/cancun/trafico/calculator/:index', traficoCancun.calculator);



//TIJUANA--------------------------------------------------------------------------------------
router.get('/tijuana/mantenimiento/', mantenimientoTijuana.home);
router.get('/tijuana/mantenimiento/calculator', mantenimientoTijuana.calculator);
router.get('/tijuana/mantenimiento/calculator/:index', mantenimientoTijuana.calculator);

router.get('/tijuana/bono-garantia/', bonoGarantiaTijuana.home);
router.get('/tijuana/bono-garantia/calculator', bonoGarantiaTijuana.calculator);
router.get('/tijuana/bono-garantia/calculator/:index', bonoGarantiaTijuana.calculator);

router.get('/tijuana', tijuana.data)
router.put('/tijuana/admin/molino', siloMolinoTijuana.editInfo);
router.get('/tijuana/molino/', siloMolinoTijuana.home);
router.get('/tijuana/molino/calculator', siloMolinoTijuana.calculator);
router.get('/tijuana/molino/calculator/:index', siloMolinoTijuana.calculator);

router.put('/tijuana/admin/almacen', almacenTijuana.editInfo);
router.get('/tijuana/almacen/', almacenTijuana.home);
router.get('/tijuana/almacen/calculator', almacenTijuana.calculator);
router.get('/tijuana/almacen/calculator/:index', almacenTijuana.calculator);

router.put('/tijuana/admin/corte', corteTijuana.editInfo);
router.get('/tijuana/corte/', corteTijuana.home);
router.get('/tijuana/corte/calculator', corteTijuana.calculator);
router.get('/tijuana/corte/calculator/:index', corteTijuana.calculator);

router.put('/tijuana/admin/cortemaq', corteMaqTijuana.editInfo);
router.get('/tijuana/cortemaq/', corteMaqTijuana.home);
router.get('/tijuana/cortemaq/calculator', corteMaqTijuana.calculator);
router.get('/tijuana/cortemaq/calculator/:index', corteMaqTijuana.calculator);

router.put('/tijuana/admin/bloquera', preexpYMoldeoTijuana.editInfo);
router.get('/tijuana/bloquera/', preexpYMoldeoTijuana.home);
router.get('/tijuana/bloquera/calculator', preexpYMoldeoTijuana.calculator);
router.get('/tijuana/bloquera/calculator/:index', preexpYMoldeoTijuana.calculator);

router.put('/tijuana/admin/choferlocal', choferesLocalesTijuana.editInfo);
router.get('/tijuana/choferlocal/', choferesLocalesTijuana.home);
router.get('/tijuana/choferlocal/calculator', choferesLocalesTijuana.calculator);
router.get('/tijuana/choferlocal/calculator/:index', choferesLocalesTijuana.calculator);

router.put('/tijuana/admin/bonotyg', bonoTYGTijuana.editInfo);
router.get('/tijuana/bonotyg/', bonoTYGTijuana.home);
router.get('/tijuana/bonotyg/calculator', bonoTYGTijuana.calculator);
router.get('/tijuana/bonotyg/calculator/:index', bonoTYGTijuana.calculator);

// CULIACAN -------------------------------------------------------------------------------------

router.get('/culiacan', culiacan.data);
router.get('/culiacan/mantenimiento/', mantenimientoCuliacan.home);
router.get('/culiacan/mantenimiento/calculator', mantenimientoCuliacan.calculator);
router.get('/culiacan/mantenimiento/calculator/:index', mantenimientoCuliacan.calculator);

router.put('/culiacan/admin/bloquera', preexpYMoldeoCuliacan.editInfo);
router.get('/culiacan/bloquera/', preexpYMoldeoCuliacan.home);
router.get('/culiacan/bloquera/calculator', preexpYMoldeoCuliacan.calculator);
router.get('/culiacan/bloquera/calculator/:index', preexpYMoldeoCuliacan.calculator);

router.put('/culiacan/admin/corte', corteCuliacan.editInfo);
router.get('/culiacan/corte/', corteCuliacan.home);
router.get('/culiacan/corte/calculator', corteCuliacan.calculator);
router.get('/culiacan/corte/calculator/:index', corteCuliacan.calculator);

router.put('/culiacan/admin/panel', construpanelCuliacan.editInfo);
router.get('/culiacan/panel/', construpanelCuliacan.home);
router.get('/culiacan/panel/calculator', construpanelCuliacan.calculator);
router.get('/culiacan/panel/calculator/:index', construpanelCuliacan.calculator);

router.get('/culiacan/almacen-const/', almacenConstCuliacan.home);
router.get('/culiacan/almacen-const/calculator', almacenConstCuliacan.calculator);
router.get('/culiacan/almacen-const/calculator/:index', almacenConstCuliacan.calculator);

router.put('/culiacan/admin/almacen', almacenCuliacan.editInfo);
router.get('/culiacan/almacen/', almacenCuliacan.home);
router.get('/culiacan/almacen/calculator', almacenCuliacan.calculator);
router.get('/culiacan/almacen/calculator/:index', almacenCuliacan.calculator);

router.put('/culiacan/admin/choferlocal', choferesLocalesCuliacan.editInfo);
router.get('/culiacan/choferlocal/', choferesLocalesCuliacan.home);
router.get('/culiacan/choferlocal/calculator', choferesLocalesCuliacan.calculator);
router.get('/culiacan/choferlocal/calculator/:index', choferesLocalesCuliacan.calculator);

router.get('/culiacan/molienda/', moliendaCuliacan.home);
router.get('/culiacan/molienda/calculator', moliendaCuliacan.calculator);
router.get('/culiacan/molienda/calculator/:index', moliendaCuliacan.calculator);

router.get('/culiacan/mantenimiento-edificios/', mantenimientoEdificiosCuliacan.home);
router.get('/culiacan/mantenimiento-edificios/calculator', mantenimientoEdificiosCuliacan.calculator);
router.get('/culiacan/mantenimiento-edificios/calculator/:index', mantenimientoEdificiosCuliacan.calculator);


/** bonos y produccion rutas */
router.get('/culiacan/bloquera/bonos', bonosBloqueraCuliacan.home);
router.get('/culiacan/bloquera/produccion', produccionBloqueraCuliacan.home);

router.get('/culiacan/mantenimiento/bonos', bonosMantenimientoCuliacan.home);

router.get('/culiacan/corte/bonos', bonosCorteCuliacan.home);
router.get('/culiacan/corte/produccion', produccionCorteCuliacan.home);

router.get('/culiacan/panel/bonos', bonosPanelCuliacan.home);
router.get('/culiacan/panel/produccion', produccionPanelCuliacan.home);

router.get('/culiacan/almacen/bonos', bonosAlmacenCuliacan.home);
router.get('/culiacan/almacen/produccion', produccionAlmacenCuliacan.home);

router.get('/culiacan/choferlocal/bonos', bonosChoferLocalCuliacan.home);
router.get('/culiacan/choferlocal/produccion', produccionChoferLocalCuliacan.home);

module.exports = router;