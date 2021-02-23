'use strict'

import express from 'express';
const router = express.Router();

//LA PAZ
import lapaz from '../controllers/lapaz/lapaz';
import corteLaPaz from '../controllers/lapaz/corteControllers.js';
import almacenLaPaz from '../controllers/lapaz/almacenControllers';
import choferLaPaz from '../controllers/lapaz/choferlocalController';
import cediLaPaz from '../controllers/lapaz/cediControllers';
import viguetaLaPaz from '../controllers/lapaz/viguetaControllers';
import moldeoLaPaz from '../controllers/lapaz/moldeoControllers';

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

//NOGALES
import corteNogales from '../controllers/nogales/corteController';
import bloqueraNogales from '../controllers/nogales/bloqueraController';
import moldeoNogales from '../controllers/nogales/moldeoController';
import almacenNogales from '../controllers/nogales/almacenController';
import choferesNogales from '../controllers/nogales/choferesController';
import preexpansionNogales from '../controllers/nogales/preexpansionController';
import mantenimientoNogales from '../controllers/nogales/mantenimientoController';

//HERMOSILLO
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
import preexpMoldeoQueretaro from '../controllers/queretaro/preexpMoldeoController';
import hieleraQueretaro from '../controllers/queretaro/hieleraController';
import corteQueretaro from '../controllers/queretaro/corteController';
import almacenQueretaro from '../controllers/queretaro/almacenController';
import insulpanelQueretaro from '../controllers/queretaro/insulpanelController';
import mantenimientoQueretaro from '../controllers/queretaro/mantenimientoController';
import choferesQueretaro from '../controllers/queretaro/choferesController';

//--------------------------------------------------------------------------------------------------
// VILLAHERMOSA
import traficoVillahermosa from '../controllers/villahermosa/traficoController';
import preexpMoldeoVillahermosa from '../controllers/villahermosa/preexpMoldeoController';
import corteVillahermosa from '../controllers/villahermosa/corteController';
import almacenVillahermosa from '../controllers/villahermosa/almacenController';
import mantenimientoVillahermosa from '../controllers/villahermosa/mantenimientoController';

//--------------------------------------------------------------------------------------------------
// CDMX
import preexpMoldeoCdmx from '../controllers/cdmx/preexpMoldeoController';
import almacenCdmx from '../controllers/cdmx/almacenController';
import mantenimientoCdmx from '../controllers/cdmx/mantenimientoController';
import corteConstCdmx from '../controllers/cdmx/corteConstController';
import corteMaquilaCdmx from '../controllers/cdmx/corteMaquilaController';
import vitroCdmx from '../controllers/cdmx/vitroController';

//--------------------------------------------------------------------------------------------------
// MONTERREY
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

router.put('/lapaz/admin/chofer-local', choferLaPaz.editInfo);
router.get('/lapaz/chofer-local', choferLaPaz.home);
router.get('/lapaz/chofer-local/calculator', choferLaPaz.calculator);
router.get('/lapaz/chofer-local/calculator/:index', choferLaPaz.calculator);

router.put('/lapaz/admin/chofercedi', cediLaPaz.editInfo);
router.get('/lapaz/chofercedi', cediLaPaz.home);
router.get('/lapaz/chofercedi/calculator', cediLaPaz.calculator);
router.get('/lapaz/chofercedi/calculator/:index', cediLaPaz.calculator);

router.get('/lapaz/vigueta', viguetaLaPaz.home);
router.get('/lapaz/vigueta/calculator', viguetaLaPaz.calculator);
router.get('/lapaz/vigueta/calculator/:index', viguetaLaPaz.calculator);

router.put('/lapaz/admin/bloquera', moldeoLaPaz.editInfo);
router.get('/lapaz/bloquera', moldeoLaPaz.home);
router.get('/lapaz/bloquera/calculator', moldeoLaPaz.calculator);
router.get('/lapaz/bloquera/calculator/:index', moldeoLaPaz.calculator);

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
//------------------------------------------------------------------------------------------------------------
//NOGALES
router.get('/nogales/corte', corteNogales.home);
router.get('/nogales/corte/calculator/', corteNogales.calculator);
router.get('/nogales/corte/calculator/:index', corteNogales.calculator);

router.get('/nogales/bloquera', bloqueraNogales.home);
router.get('/nogales/bloquera/calculator/', bloqueraNogales.calculator);
router.get('/nogales/bloquera/calculator/:index', bloqueraNogales.calculator);

router.get('/nogales/moldeo', moldeoNogales.home);
router.get('/nogales/moldeo/calculator/', moldeoNogales.calculator);
router.get('/nogales/moldeo/calculator/:index', moldeoNogales.calculator);

router.get('/nogales/almacen', almacenNogales.home);
router.get('/nogales/almacen/calculator/', almacenNogales.calculator);
router.get('/nogales/almacen/calculator/:index', almacenNogales.calculator);

router.get('/nogales/choferes', choferesNogales.home);
router.get('/nogales/choferes/calculator/', choferesNogales.calculator);
router.get('/nogales/choferes/calculator/:index', choferesNogales.calculator);


router.get('/nogales/preexpansion', preexpansionNogales.home);
router.get('/nogales/preexpansion/calculator/', preexpansionNogales.calculator);
router.get('/nogales/preexpansion/calculator/:index', preexpansionNogales.calculator);

router.get('/nogales/mantenimiento', mantenimientoNogales.home);
router.get('/nogales/mantenimiento/calculator/', mantenimientoNogales.calculator);
router.get('/nogales/mantenimiento/calculator/:index', mantenimientoNogales.calculator);


//------------------------------------------------------------------------------------------
//HERMOSILLO
router.get('/hermosillo/bloquera', bloqueraHermosillo.home);
router.get('/hermosillo/bloquera/calculator/', bloqueraHermosillo.calculator);
router.get('/hermosillo/bloquera/calculator/:index', bloqueraHermosillo.calculator);

router.get('/hermosillo/corte',  corteHermosillo.home);
router.get('/hermosillo/corte/calculator/', corteHermosillo.calculator);
router.get('/hermosillo/corte/calculator/:index',  corteHermosillo.calculator);

router.get('/hermosillo/steelfoam',  steelfoamHermosillo.home);
router.get('/hermosillo/steelfoam/calculator/',  steelfoamHermosillo.calculator);
router.get('/hermosillo/steelfoam/calculator/:index',  steelfoamHermosillo.calculator);

router.get('/hermosillo/choferes',  choferesHermosillo.home);
router.get('/hermosillo/choferes/calculator/',  choferesHermosillo.calculator);
router.get('/hermosillo/choferes/calculator/:index',  choferesHermosillo.calculator);

router.get('/hermosillo/mantenimiento', mantenimientoHermosillo.home);
router.get('/hermosillo/mantenimiento/calculator/', mantenimientoHermosillo.calculator);
router.get('/hermosillo/mantenimiento/calculator/:index', mantenimientoHermosillo.calculator);

router.get('/hermosillo/almacen', almacenoHermosillo.home);
router.get('/hermosillo/almacen/calculator', almacenoHermosillo.calculator);
router.get('/hermosillo/almacen/calculator/:index', almacenoHermosillo.calculator);

router.get('/hermosillo/moldeo', moldeoHermosillo.home);
router.get('/hermosillo/moldeo/calculator/', moldeoHermosillo.calculator);
router.get('/hermosillo/moldeo/calculator/:index', moldeoHermosillo.calculator);

router.get('/hermosillo/insulpanel', insulpanelHermosillo.home);
router.get('/hermosillo/insulpanel/calculator/', insulpanelHermosillo.calculator);
router.get('/hermosillo/insulpanel/calculator/:index', insulpanelHermosillo.calculator);

router.get('/hermosillo/rotuladot1', rotuladoT1Hermosillo.home);
router.get('/hermosillo/rotuladot1/calculator/', rotuladoT1Hermosillo.calculator);
router.get('/hermosillo/rotuladot1/calculator/:index', rotuladoT1Hermosillo.calculator);


//--------------------------------------------------------------------------------------------------
// GUADALAJARA 

router.get('/guadalajara/preexpmoldeo/', preexpMoldeoGuadalajara.home);
router.get('/guadalajara/preexpmoldeo/calculator', preexpMoldeoGuadalajara.calculator);
router.get('/guadalajara/preexpmoldeo/calculator/:index', preexpMoldeoGuadalajara.calculator);

router.get('/guadalajara/corte/', corteGuadalajara.home);
router.get('/guadalajara/corte/calculator', corteGuadalajara.calculator);
router.get('/guadalajara/corte/calculator/:index', corteGuadalajara.calculator);

router.get('/guadalajara/almacen/', almacenGuadalajara.home);
router.get('/guadalajara/almacen/calculator', almacenGuadalajara.calculator);
router.get('/guadalajara/almacen/calculator/:index', almacenGuadalajara.calculator);

router.get('/guadalajara/recupera/', recuperaGuadalajara.home);
router.get('/guadalajara/recupera/calculator', recuperaGuadalajara.calculator);
router.get('/guadalajara/recupera/calculator/:index', recuperaGuadalajara.calculator);

router.get('/guadalajara/insulpanel/', insulpanelGuadalajara.home);
router.get('/guadalajara/insulpanel/calculator', insulpanelGuadalajara.calculator);
router.get('/guadalajara/insulpanel/calculator/:index', insulpanelGuadalajara.calculator);

router.get('/guadalajara/choferes/', choferesGuadalajara.home);
router.get('/guadalajara/choferes/calculator', choferesGuadalajara.calculator);
router.get('/guadalajara/choferes/calculator/:index', choferesGuadalajara.calculator);

router.get('/guadalajara/molino/', moliendaMRGuadalajara.home);
router.get('/guadalajara/molino/calculator', moliendaMRGuadalajara.calculator);
router.get('/guadalajara/molino/calculator/:index', moliendaMRGuadalajara.calculator);

router.get('/guadalajara/mantenimiento/', mantenimientoGuadalajara.home);
router.get('/guadalajara/mantenimiento/calculator', mantenimientoGuadalajara.calculator);
router.get('/guadalajara/mantenimiento/calculator/:index', mantenimientoGuadalajara.calculator);

//--------------------------------------------------------------------------------------------------
// QUERETARO


router.get('/queretaro/preexpmoldeo/', preexpMoldeoQueretaro.home);
router.get('/queretaro/preexpmoldeo/calculator', preexpMoldeoQueretaro.calculator);
router.get('/queretaro/preexpmoldeo/calculator/:index', preexpMoldeoQueretaro.calculator);

router.get('/queretaro/hielera/', hieleraQueretaro.home);
router.get('/queretaro/hielera/calculator', hieleraQueretaro.calculator);
router.get('/queretaro/hielera/calculator/:index', hieleraQueretaro.calculator);

router.get('/queretaro/corte/', corteQueretaro.home);
router.get('/queretaro/corte/calculator',corteQueretaro.calculator);
router.get('/queretaro/corte/calculator/:index', corteQueretaro.calculator);

router.get('/queretaro/almacen/', almacenQueretaro.home);
router.get('/queretaro/almacen/calculator',almacenQueretaro.calculator);
router.get('/queretaro/almacen/calculator/:index', almacenQueretaro.calculator);

router.get('/queretaro/insulpanel/', insulpanelQueretaro.home);
router.get('/queretaro/insulpanel/calculator',insulpanelQueretaro.calculator);
router.get('/queretaro/insulpanel/calculator/:index', insulpanelQueretaro.calculator);


router.get('/queretaro/mantenimiento/', mantenimientoQueretaro.home);
router.get('/queretaro/mantenimiento/calculator',mantenimientoQueretaro.calculator);
router.get('/queretaro/mantenimiento/calculator/:index', mantenimientoQueretaro.calculator);


router.get('/queretaro/choferes/', choferesQueretaro.home);
router.get('/queretaro/choferes/calculator',choferesQueretaro.calculator);
router.get('/queretaro/choferes/calculator/:index', choferesQueretaro.calculator);



//--------------------------------------------------------------------------------------------------
// VILLAHERMOSA

router.get('/villahermosa/trafico/', traficoVillahermosa.home);
router.get('/villahermosa/trafico/calculator' ,traficoVillahermosa.calculator);
router.get('/villahermosa/trafico/calculator/:index', traficoVillahermosa.calculator);

router.get('/villahermosa/preexpmoldeo/', preexpMoldeoVillahermosa.home);
router.get('/villahermosa/preexpmoldeo/calculator', preexpMoldeoVillahermosa.calculator);
router.get('/villahermosa/preexpmoldeo/calculator/:index', preexpMoldeoVillahermosa.calculator);

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


router.get('/cdmx/almacen/', almacenCdmx.home);
router.get('/cdmx/almacen/calculator', almacenCdmx.calculator);
router.get('/cdmx/almacen/calculator/:index', almacenCdmx.calculator);

router.get('/cdmx/preexpMoldeo/', preexpMoldeoCdmx.home);
router.get('/cdmx/preexpMoldeo/calculator', preexpMoldeoCdmx.calculator);
router.get('/cdmx/preexpMoldeo/calculator/:index', preexpMoldeoCdmx.calculator);


router.get('/cdmx/mantenimiento/', mantenimientoCdmx.home);
router.get('/cdmx/mantenimiento/calculator', mantenimientoCdmx.calculator);
router.get('/cdmx/mantenimiento/calculator/:index', mantenimientoCdmx.calculator);


router.get('/cdmx/corteconst/', corteConstCdmx.home);
router.get('/cdmx/corteconst/calculator', corteConstCdmx.calculator);
router.get('/cdmx/corteconst/calculator/:index', corteConstCdmx.calculator);

router.get('/cdmx/cortemaquila/', corteMaquilaCdmx.home);
router.get('/cdmx/cortemaquila/calculator', corteMaquilaCdmx.calculator);
router.get('/cdmx/cortemaquila/calculator/:index', corteMaquilaCdmx.calculator);

router.get('/cdmx/vitro/', vitroCdmx.home);
router.get('/cdmx/vitro/calculator', vitroCdmx.calculator);
router.get('/cdmx/vitro/calculator/:index', vitroCdmx.calculator);


//--------------------------------------------------------------------------------------------------
// Monterrey
router.get('/monterrey/mantenimiento/', mantenimientoMonterrey.home);
router.get('/monterrey/mantenimiento/calculator', mantenimientoMonterrey.calculator);
router.get('/monterrey/mantenimiento/calculator/:index', mantenimientoMonterrey.calculator);

router.get('/monterrey/choferes-locales/', choferesLocalesMonterrey.home);
router.get('/monterrey/choferes-locales/calculator', choferesLocalesMonterrey.calculator);
router.get('/monterrey/choferes-locales/calculator/:index', choferesLocalesMonterrey.calculator);

router.get('/monterrey/choferes-cedi/', choferesCEDIMonterrey.home);
router.get('/monterrey/choferes-cedi/calculator', choferesCEDIMonterrey.calculator);
router.get('/monterrey/choferes-cedi/calculator/:index', choferesCEDIMonterrey.calculator);

router.get('/monterrey/molino/', moliendaMRMonterrey.home);
router.get('/monterrey/molino/calculator', moliendaMRMonterrey.calculator);
router.get('/monterrey/molino/calculator/:index', moliendaMRMonterrey.calculator);

router.get('/monterrey/almacen-cedi/', almacenCEDIMonterrey.home);
router.get('/monterrey/almacen-cedi/calculator', almacenCEDIMonterrey.calculator);
router.get('/monterrey/almacen-cedi/calculator/:index', almacenCEDIMonterrey.calculator);

router.get('/monterrey/almacen/', almacenMonterrey.home);
router.get('/monterrey/almacen/calculator', almacenMonterrey.calculator);
router.get('/monterrey/almacen/calculator/:index', almacenMonterrey.calculator);

router.get('/monterrey/moldeo/', moldeoMonterrey.home);
router.get('/monterrey/moldeo/calculator', moldeoMonterrey.calculator);
router.get('/monterrey/moldeo/calculator/:index', moldeoMonterrey.calculator);

router.get('/monterrey/emco/', emcoMonterrey.home);
router.get('/monterrey/emco/calculator', emcoMonterrey.calculator);
router.get('/monterrey/emco/calculator/:index', emcoMonterrey.calculator);

router.get('/monterrey/corte-nip/', corteNIPMonterrey.home);
router.get('/monterrey/corte-nip/calculator', corteNIPMonterrey.calculator);
router.get('/monterrey/corte-nip/calculator/:index', corteNIPMonterrey.calculator);


router.get('/monterrey/corte-l/', corteLMonterrey.home);
router.get('/monterrey/corte-l/calculator', corteLMonterrey.calculator);
router.get('/monterrey/corte-l/calculator/:index', corteLMonterrey.calculator);


router.get('/monterrey/bloquera/', bloqueraMonterrey.home);
router.get('/monterrey/bloquera/calculator', bloqueraMonterrey.calculator);
router.get('/monterrey/bloquera/calculator/:index', bloqueraMonterrey.calculator);

router.get('/monterrey/herramental/', herramentalMonterrey.home);
router.get('/monterrey/herramental/calculator', herramentalMonterrey.calculator);
router.get('/monterrey/herramental/calculator/:index', herramentalMonterrey.calculator);


router.get('/monterrey/preexpansion/', preexpansionMonterrey.home);
router.get('/monterrey/preexpansion/calculator', preexpansionMonterrey.calculator);
router.get('/monterrey/preexpansion/calculator/:index', preexpansionMonterrey.calculator);

router.get('/monterrey/rotulado-hielera-1/', rotuladoHielera1Monterrey.home);
router.get('/monterrey/rotulado-hielera-1/calculator', rotuladoHielera1Monterrey.calculator);
router.get('/monterrey/rotulado-hielera-1/calculator/:index', rotuladoHielera1Monterrey.calculator);

router.get('/monterrey/rotulado-hielera-2/', rotuladoHielera2Monterrey.home);
router.get('/monterrey/rotulado-hielera-2/calculator', rotuladoHielera2Monterrey.calculator);
router.get('/monterrey/rotulado-hielera-2/calculator/:index', rotuladoHielera2Monterrey.calculator);

router.get('/monterrey/rotulado-hielera-3/', rotuladoHielera3Monterrey.home);
router.get('/monterrey/rotulado-hielera-3/calculator', rotuladoHielera3Monterrey.calculator);
router.get('/monterrey/rotulado-hielera-3/calculator/:index', rotuladoHielera3Monterrey.calculator);

module.exports = router;