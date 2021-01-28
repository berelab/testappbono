'use strict'

import express from 'express';
const router = express.Router();

//LA PAZ
import corteLaPaz from '../controllers/lapaz/corteControllers.js';
import almacenLaPaz from '../controllers/lapaz/almacenControllers';
import choferLaPaz from '../controllers/lapaz/choferlocalController';
import cediLaPaz from '../controllers/lapaz/cediControllers';
import viguetaLaPaz from '../controllers/lapaz/viguetaControllers';
import moldeoLaPaz from '../controllers/lapaz/moldeoControllers';
//CD JUAREZ
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

//NOGALES
import corteNogales from '../controllers/nogales/corteController'



//------------------------------------------------------------------------------------------------------------
//LA PAZ
router.put('/lapaz/admin/corte', corteLaPaz.editInfo);
router.get('/lapaz/corte', corteLaPaz.home);
router.get('/lapaz/corte/calculator', corteLaPaz.calculator);

router.get('/lapaz/almacen', almacenLaPaz.home);
router.get('/lapaz/almacen/calculator', almacenLaPaz.calculator);

router.get('/lapaz/chofer-local', choferLaPaz.home);
router.get('/lapaz/chofer-local/calculator', choferLaPaz.calculator);

router.get('/lapaz/cedi', cediLaPaz.home);
router.get('/lapaz/cedi/calculator', cediLaPaz.calculator);

router.get('/lapaz/vigueta', viguetaLaPaz.home);
router.get('/lapaz/vigueta/calculator', viguetaLaPaz.calculator);

router.get('/lapaz/moldeo', moldeoLaPaz.home);
router.get('/lapaz/moldeo/calculator', moldeoLaPaz.calculator);

//------------------------------------------------------------------------------------------------------------
//CD JUAREZ
router.get('/juarez/moldeo', moldeoJuarez.home);
router.get('/juarez/moldeo/calculator', moldeoJuarez.calculator);

router.get('/juarez/kbrs', kbrsJuarez.home);
router.get('/juarez/kbrs/calculator', kbrsJuarez.calculator);

router.get('/juarez/mcsframe', mcsframeJuarez.home);
router.get('/juarez/mcsframe/calculator', mcsframeJuarez.calculator);

router.get('/juarez/aosmith', aosmithJuarez.home);
router.get('/juarez/aosmith/calculator', aosmithJuarez.calculator);

router.get('/juarez/commscope', commscopeJuarez.home);
router.get('/juarez/commscope/calculator', commscopeJuarez.calculator);

router.get('/juarez/electrolux', electroluxJuarez.home);
router.get('/juarez/electrolux/calculator', electroluxJuarez.calculator);

router.get('/juarez/corte', corteJuarez.home);
router.get('/juarez/corte/calculator', corteJuarez.calculator);

router.get('/juarez/placa', placaJuarez.home);
router.get('/juarez/placa/calculator', placaJuarez.calculator);

router.get('/juarez/aligerante', aligeranteJuarez.home);
router.get('/juarez/aligerante/calculator', aligeranteJuarez.calculator);

router.get('/juarez/almacen', almacenJuarez.home);
router.get('/juarez/almacen/calculator', almacenJuarez.calculator);

router.get('/juarez/molino', molinoJuarez.home);
router.get('/juarez/molino/calculator', molinoJuarez.calculator);

router.get('/juarez/choferes', choferesJuarez.home);
router.get('/juarez/choferes/calculator', choferesJuarez.calculator);

//------------------------------------------------------------------------------------------------------------
//NOGALES
router.get('/nogales/corte', corteNogales.home);
router.get('/nogales/corte/calculator/', corteNogales.calculator);
router.get('/nogales/corte/calculator/:index', corteNogales.calculator);

module.exports = router;