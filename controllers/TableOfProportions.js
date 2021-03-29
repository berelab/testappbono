'use strict'

export default class TableOfProportions {
    constructor(
        amp,
        blocks_fe,
        densidad,
        id_combustible,
        auditoria_sol,
        num_quejas_cliente,  
        rechazo_interno,
        aprove_perla_corte, 
        aprove_perla_moldeo, 
        rendimiento_agua, 
        rendimiento_combustible, 
        rendimiento_electricidad, 
        faltas_uso_epp, 
        fugas_perla, 
        fugas_vapor, 
        fugas_aceite, 
        fugas_aire,
    ){
        this.amp            = amp;
        this.blocks_fe      = blocks_fe;
        this.densidad_value = densidad;
        this.id_combustible = id_combustible;   
        this.auditoria_sol  = auditoria_sol;    
        this.num_quejas_cliente = num_quejas_cliente; 
        this.rechazo_interno = rechazo_interno
        this.aprove_perla_corte     = aprove_perla_corte
        this.aprove_perla_moldeo    = aprove_perla_moldeo
        this.rendimiento_agua          =  rendimiento_agua;
        this.rendimiento_combustible   = rendimiento_combustible;
        this.rendimiento_electricidad  = rendimiento_electricidad;
        this.faltas_uso_epp            = faltas_uso_epp;
        this.fugas_perla               = fugas_perla;
        this.fugas_vapor               = fugas_vapor;
        this.fugas_aceite              = fugas_aceite;
        this.fugas_aire                = fugas_aire;
    }
    //Getters
    get desperdicios () {
        return this.desperdicio(this.amp);
    }
    get blocksFueraEspecificacion () {
        return this.blocks_fuera_especificacion(this.blocks_fe);
    }
    get densidades () {
        return this.densidad(this.densidad_value);
    }
   
    get combustibles () {
        return this.combustible_(this.id_combustible);
    }
    get desperdicios2 () {
        return this.desperdicio_2(this.amp);
    }
    get desperdicios3 () {
        return this.desperdicio_3(this.amp);
    }
    get densidadBobedilla () {
        return this.densidad_bobedilla(this.densidad_value);
    }
    get densidadIns16() {
        return this.densidad_ins16(this.id_combustible);
    }
   
    get desperdicioN(){
        return this.desperdicio_Nogales(this.amp);
    }

    get desperdicio4(){ 
        return this.desperdicio_4(this.amp)
    }
    get desperdicio5(){ 
        return this.desperdicio_5(this.amp)
    }
  
    get desperdicio6(){
        return this.desperdicio_6(this.amp);
    }

    get desperdicio7(){
        return this.desperdicio_7(this.amp);
    }

    get desperdicio8(){
        return this.desperdicio_8(this.amp);
    }

    get desperdicio9(){
        return this.desperdicio_9(this.amp);
    }

    get desperdicio10(){
        return this.desperdicio_10(this.amp);
    }

    get desperdicio11(){
        return this.desperdicio_11(this.amp);
    }

    get desperdicio12(){
        return this.desperdicio_12(this.amp);
    }

    get desperdicio13(){
        return this.desperdicio_13(this.amp);
    }

    get desperdicio14(){
        return this.desperdicio_14(this.amp);
    }

    get desperdicio15(){
        return this.desperdicio_15(this.amp);
    }

    get desperdicio16(){
        return this.desperdicio_16(this.amp);
    }

    get desperdicio17(){
        return this.desperdicio_17(this.amp);
    }

    get desperdicio18(){
        return this.desperdicio_18(this.amp);
    }

    get condicionanteEpp(){
        return this.condicionante_epp(this.blocks_fe);
    }

     get condicionanteEpp2(){
        return this.condicionante_epp2(this.amp);
    }

    get equipoProteccion(){
        return this.equipo_proteccion(this.id_combustible);
    }

    get auditoriasolN(){
        return this.auditoria_sol_Nogales(this.auditoria_sol);
    }

    get quejas(){
        return this._quejas(this.num_quejas_cliente);
    }
    
    get quejas2(){
        return this._quejas2(this.num_quejas_cliente);
    }

    get quejas3(){
        return this._quejas3(this.num_quejas_cliente);
    }

    get quejas4(){
        return this._quejas4(this.num_quejas_cliente);
    }

    get quejas5(){
        return this._quejas5(this.num_quejas_cliente);
    }

    get quejas6(){
        return this._quejas6(this.num_quejas_cliente);
    }
    
    get quejas7(){
        return this._quejas7(this.num_quejas_cliente);
    }

    get rechazoInternoN(){
        return this.rechazo_interno_Nogales(this.rechazo_interno);
    }

    get rechazoInterno3(){
        return this.rechazo_interno3(this.blocks_fe)
    }

    get perlaCorteN(){
        return  this.perla_corte_Nogales(this.aprove_perla_corte);
    }

    get perlaMoldeoN(){
        return this.perla_moldeo_Nogales(this.aprove_perla_moldeo);
    }

    get faltasEPP(){
        return this.faltas_al_epp(this.faltas_uso_epp);
    }

    get fugasVapor(){
        return this.fugas_de_vapor(this.fugas_vapor)
    }

    get fugasPerla(){
        return this.fugas_de_perla(this.fugas_perla)
    }

    get fugasAceite(){
        return this.fugas_de_aceite(this.fugas_aceite)
    }

    get fugasAire(){
        return this.fugas_de_aire(this.fugas_aire)
    }

    get electricidad(){
        return this._electricidad(this.rendimiento_electricidad);
    }

    get combustible(){
        return this._combustible(this.rendimiento_combustible);
    }
    
    get agua(){
        return this._agua(this.rendimiento_agua);
    }

    get aprovechamientoMP(){
       return this.aprovechamientoMP_Hmo(this.amp);
    }
    get aprovechamientoMP2(){
        return this.aprovechamientoMP_2(this.amp);
     }

    get aprovechamientoMP3(){
        return this.aprovechamientoMP_3(this.amp);
    }

    get aprovechamientoMP4(){
        return this.aprovechamientoMP_4(this.amp);
    }

    
    get aprovechamientoMP5(){
        return this.aprovechamientoMP_5(this.amp);
    }

    get aprovechamientoMP6(){
        return this.aprovechamientoMP_6(this.amp);
    }

    get aprovechamientoMP7(){
        return this.aprovechamientoMP_7(this.amp);
    }


    get blocksfe(){
        return this.blocksfe_1(this.blocks_fe);
    }

    get blocksfe2(){
        return this.blocksfe_2(this.blocks_fe);
    }

    get blocksfe3(){
        return this.blocksfe_3(this.blocks_fe);
    }

    get blocksfe4(){
        return this.blocksfe_4(this.blocks_fe);
    }

    get blocksfe5(){
        return this.blocksfe_5(this.blocks_fe);
    }

    get blocksfe6(){
        return this.blocksfe_6(this.blocks_fe);
    }


    get piezasDefectuosas(){
        return this.piezas_defectuosas(this.blocks_fe)
    }
    
    get hielerasfe(){
        return this.hielerasfe_1(this.blocks_fe);
    }

    get ordenLimpieza(){
        return this.orden_limpieza(this.blocks_fe);
    }

    get planCarrera(){
       return this._planCarrera(this.amp);
    }
    
    get penalizacion(){
       return  this._penalizacion(this.amp);
    }
    
    get penalizacion2(){
        return  this._penalizacion2(this.amp);
     }
    get boletaspnc(){
        return this.boletas_pnc(this.blocks_fe);
    }
    get usoEquipoSeguridad(){
        return this.uso_equipo_seguridad(this.blocks_fe);
    }

    get usoEquipoSeguridad2(){
        return this.uso_equipo_seguridad2(this.blocks_fe);
    }

    get rechazoInterno2(){
        return this.rechazo_interno2(this.blocks_fe);
    }

    get pago(){
        return this._pago(this.amp);
    }

    get limpiezaUnidad(){
        return this.limpieza_unidad(this.amp);
    }

    get ltkgPreexpandido(){
        return this.ltkg_preexpandido(this.amp);
    }

    get difInventario(){
        return this.dif_inventario(this.blocks_fe);
    }

    get difInventario2(){
        return this.dif_inventario2(this.blocks_fe);
    }

    get descSeguridad(){
        return this.desc_seguridad(this.blocks_fe);
    }

    get descSeguridad2(){
        return this.desc_seguridad2(this.blocks_fe);
    }

    get devoluciones(){
        return this._devoluciones(this.num_quejas_cliente);
    }

    get descuentoEpp(){
        return this._descuento_epp(this.blocks_fe);
    }


    //methods

    desperdicio_13(value){ // estandar corte y bloquera 
        if(value >=0 && value <88){
            return .2
        }else if(value >=88 && value <92){
            return .15
        }else if(value >=92 && value <96){
            return .10
        }else if(value >=96 && value <100){
            return .05
        }else if(value >=100 && value <103){
            return 0
        }else if(value >=103 && value <106){
            return -.05
        }else if(value >=106 && value <109){
            return -.10
        }else if(value >=109 && value <112){
            return -.15
        }else if(value >=112 && value <115){
            return -.20
        }else if(value >=115){
            return -.25
        }else{
            return 0
        }
    }

    desperdicio_14(value){ // estandar moldeo
        if(value >=0 && value <88){
            return -.2
        }else if(value >=88 && value <92){
            return -.15
        }else if(value >=92 && value <96){
            return -.10
        }else if(value >=96 && value <100){
            return -.05
        }else if(value >=100 && value <103){
            return 0
        }else if(value >=103 && value <106){
            return .05
        }else if(value >=106 && value <109){
            return .10
        }else if(value >=109 && value <112){
            return .15
        }else if(value >=112 && value <115){
            return .20
        }else if(value >=115){
            return .25
        }else{
            return 0
        }
    }


    desperdicio(value){
        if(value >= 88 && value < 90){
            return .35;
        }else if(value >= 90 && value < 93){
            return .30;
        }else if(value >= 93 && value < 95){
            return .20;
        }else if(value >= 95 && value < 98){
            return .18;
        }else if(value >= 98 && value < 100){
            return .09;
        }else if(value >= 100 && value < 102.5){
            return 0;
        }else if(value >= 102.5 && value < 105.0){
            value = -.09;
            return value;
        }else if(value >= 105.0 && value < 107.5){
            value = -.18;
            return value;
        }else if(value >= 107.5 && value < 110.0){
            value = -.20;
            return value;
        }else if(value >= 110.0 && value < 112.5){
            value = -.30;
            return value;
        }else if(value >= 112.5){
            value = -.35;
            return value;
        }else{
            return 0;
        }
    }
    blocks_fuera_especificacion(value){
        if(value == 0){
            return 0;
        }else if(value == 1){
            return -.03;
        }else if(value == 2){
            return -.06;
        }else if(value >= 3){
            return -.09;
        }
    }
    densidad(value){
        if(value == 0){
            return 0;
        }else if(value <= .96){
            return .35;
        }else if(value >= .9601 && value < .9701){
            return .30;
        }else if(value >= .9701 && value < .9801){
            return .25;
        }else if(value >= .9801 && value < .9901){
            return .20;
        }else if(value >= .9901 && value < 1.0001){
            return .10;
        }else if(value >= 1.0001 && value < 1.025){
            return 0;
        }else if(value >= 1.025 && value < 1.05){
            return -.07;
        }else if(value >= 1.05 && value < 1.075){
            return -.14;
        }else if(value >= 1.075 && value < 1.1){
            return -.21;
        }else if(value >= 1.1 && value < 1.125){
            return -.28;
        }else if(value >= 1.125){
            return -.35;
        }
    }
    combustible_(value){
        if(value == 'rojo'){
            return -.12;
        }else if(value == 'amarillo'){
            return -.05;
        }else if(value == 'verde'){
            return .05;
        }else if(value == 'azul'){
            return .1;
        }else{
            return 0;
        }
    }
    desperdicio_2(value){
        if(value >= 0 && value < .88){
            return .25;
        }else if(value >= .88 && value < .91){
            return .20;
        }else if(value >= .91 && value < .94){
            return .15;
        }else if(value >= .94 && value < .97){
            return .10;
        }else if(value >= .97 && value < 1){
            return .05;
        }else if(value >= 1 && value < 1.03){
            return 0;
        }else if(value >= 1.03 && value < 1.06){
            return -.05;
        }else if(value >= 1.06 && value < 1.09){
            return -.10;
        }else if(value >= 1.09 && value < 1.12){
            return -.15;
        }else if(value >= 1.12 && value < 1.15){
            return -.20;
        }else if(value >= 1.15 && value < 1.18){
            return -.40;
        }else if(value >= 1.18 && value < 1.21){
            return -.60;
        }else if(value >= 1.21 && value < 1.24){
            return -.80;
        }else if(value >= 1.24){
            return -1;
        }else{
            return 0;
        }
    }
    desperdicio_3(value){
        if(value >= 0 && value < .12){
            return .30;
        }else if(value >= .12 && value < .13){
            return .20;
        }else if(value >= .13 && value < .14){
            return .15;
        }else if(value >= .14 && value < .15){
            return .10;
        }else if(value >= .15 && value < .16){
            return .05;
        }else if(value >= .16 && value < .17){
            return 0;
        }else if(value >= .17 && value < .18){
            return -.05;
        }else if(value >= .18 && value < .19){
            return -.10;
        }else if(value >= .19 && value < .20){
            return -.20;
        }else if(value >= .20 && value < .21){
            return -.40;
        }else if(value >= .21 && value < .22){
            return -.50;
        }else if(value >= .22 && value < .23){
            return -.60;
        }else if(value >= .23 && value < .24){
            return -.80;
        }else if(value >= .24 && value < .25){
            return -1;
        }else if(value >= .25){
            return -1.20;
        }else{
            return 0;
        }
    }

    desperdicio_4(value){ //moldeo nogales
        if(value >= .65 && value < .70){
            return .35;
        }else if(value >= .70 && value < .75){
            return .30;
        }else if(value >= .75 && value < .80){
            return .25;
        }else if(value >= .80 && value < .85){
            return .20;
        }else if(value >= .85 && value < .90){
            return .15;
        }else if(value >= .90 && value < .95){
            return .10;
        }else if(value >= .95 && value < 1){
            return .05;
        }else if(value >= 1 && value < 1.05){
            return 0;
        }else if(value >= 1.05 && value < 1.10){
            return -.05;
        }else if(value >= 1.10 && value < 1.15){
            return -.10;
        }else if(value >= 1.15 && value < 1.20){
            return -.15;
        }else if(value >= 1.20 && value < 1.25){
            return -.20;
        }else if(value >= 1.25 && value < 1.30){
            return -.25;
        }else if(value >= 1.30 && value < 1.35){
            return -.30;
        }else if(value >= 1.35 && value < 1.40){
            return -.35;
        }else if(value >= 1.40 && value < 1.45){
            return -.40;
        }else if(value >= 1.40){
            return -.40;
        }else{
            return 0;
        }
    }

    
    densidad_bobedilla(value){
        if(value == 0){
            return 0;
        }else if(value <= 5.0){
            return .28;
        }else if(value > 5.0 && value < 5.1){
            return .28;
        }else if(value >= 5.1 && value < 5.2){
            return .21;
        }else if(value >= 5.2 && value < 5.3){
            return .14;
        }else if(value >= 5.3 && value < 5.4){
            return .07;
        }else if(value >= 5.4 && value < 5.5){
            return 0;
        }else if(value >= 5.5 && value < 5.6){
            return -.07;
        }else if(value >= 5.6 && value < 5.7){
            return -.14;
        }else if(value >= 5.7 && value < 5.8){
            return -.21;
        }else if(value >= 5.8 && value < 5.9){
            return -.28;
        }else if(value >= 5.9){
            return -.35;
        }
    }
    densidad_ins16(value){
        if(value == 0){
            return 0;
        }else if(value <= 14){
            return .28;
        }else if(value > 14 && value < 14.1){
            return .28;
        }else if(value >= 14.1 && value < 14.2){
            return .21;
        }else if(value >= 14.2 && value < 14.3){
            return .14;
        }else if(value >= 14.3 && value < 14.4){
            return .07;
        }else if(value >= 14.4 && value < 14.8){
            return 0;
        }else if(value >= 14.8 && value < 15.2){
            return -.07;
        }else if(value >= 15.2 && value < 15.6){
            return -.14;
        }else if(value >= 15.6 && value < 16.5){
            return -.21;
        }else if(value >= 16.5 && value < 17.0){
            return -.28;
        }else if(value >= 17.0){
            return -.35;
        }
    }






    //--------------------------------  NOGALES -------------------------------------- 
    desperdicio_Nogales(value){ //dpt corte
        if(value >= .06 && value < .07){
            return .20;
        }else if(value >= .07 && value < .08){
            return .15;
        }else if(value >= .08 && value < .09){
            return .10;
        }else if(value >= .09 && value < .1){
            return .05;
        }else if(value >= .1 && value < .11){
            return .0;
        }else if(value >= .11 && value < .12){
            return -.05;
        }else if(value >= .12 && value < .13){
            return -.10;
        }else if(value >= .13 && value < .14){
            return -.15;
        }else if(value >= .14 ){
             return -.2;
        }else{
            return 0;
        }
    }

    auditoria_sol_Nogales(value){ //dpt corte
        if(value < 0){
            return 0;
        }else if(value >= 0 && value < 1){
            return .20;
        }else if(value >= 1 && value < 2){
            return -.10;
        }else if(value >= 2 && value < 3){
            return -.15;
        }else if(value >= 3 && value < 4){
            return -.20;
        }else if(value >= 4 && value < 5){
            return -.25;
        }else if(value >= 5){
            return -.30;
        }else{
            return 0;
        }
    }

     _quejas(value){ 
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.35; 
        }else if(value == 2){
            return -.7; 
        }else{
            return 0;
        }*/
        return 0;
    }

    _quejas2(value){ 
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.25; 
        }else if(value >= 2){
            return -.5;
        }else{
            return 0;
        }*/
        return 0;
    }

    _quejas3(value){
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.05; 
        }else if(value == 2){
            return -.1; 
        }else if(value == 3){
            return -.15; 
        }else if(value == 4){
            return -.2; 
        }else{
            return 0;
        }*/
        return 0;
    }

    _quejas4(value){
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.1; 
        }else if(value == 2){
            return -.2; 
        }else if(value == 3){
            return -.3; 
        }else if(value == 4){
            return -.4; 
        }else{
            return 0;
        }*/
        return 0;
    }

    
    _quejas5(value){ 
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.25; 
        }else if(value == 2){
            return -.5;
        }else if(value == 3){
            return -1;
        }else{
            return 0;
        }*/
        return 0;
    }

    _quejas6(value){ 
        /*if(value == 0){
            return 0;
        }else if(value == 1){
            return -.3; 
        }else if(value >= 1){
            return -1;
        }else{
            return 0;
        }*/
        return 0;
    }

    _quejas7(value){ 
        /*if(value ==0){
            return 0;
        }else if(value == 1 ){
            return .15;
        }else if(value == 2){
            return .20;
        }else if(value == 3){
            return .25;
        }else if(value == 4){
            return .30;
        }else if(value == 5){
            return .50;
        }else{
            return 0;
        }*/
        return 0;
    }


    rechazo_interno_Nogales(value){//dpt corte
        // faltan porcentajes excel.
        return 0;
    }

    orden_limpieza(value){ //dpto moldeo
       if(value  == 5){
           return-.30
       }else if(value ==4){
           return -.25
       }else if(value ==3){
        return -.20
       }else if(value ==2){
        return -.15
       }else if(value ==1){
        return -.10
       }else if(value ==0){
        return .20
       }else if(value ==-1){
        return 0
       }else{
           return 0
       }
    }


    perla_corte_Nogales(value){ //dpt preexpansion
    

        if(value >= .95  && value < .96 ){
            return .20;
        }else if(value >= .96 && value < .97){
            return .15;
        }else if(value >= .97 && value < .98){
            return .10;
        }else if(value >= .98 && value < .99){
            return  .5;
        }else if(value >= .99 && value < 1 ){
            return 0;
        }else if(value >= 1 && value < 1.01){
            return -.15;
        }else if(value >= 1.01){
            return -.30;
        }else{
            return 0;
        }
    }

    perla_moldeo_Nogales(value){ //dpt preexpansion
        
        if(value >= .9  && value < .91 ){
            return .25;
        }else if(value >= .91 && value < .92){
            return .20;
        }else if(value >= .92 && value < .93){
            return .18;
        }else if(value >= .93 && value < .94){
            return  .18;
        }else if(value >= .94 && value < .95 ){
            return .15;
        }else if(value >= .95 && value < .96){
            return .10;
        }else if(value >= .96 && value < .97){
            return  .5;
        }else if(value >= .97 && value < .98){
            return 0;
        }else if(value >= .98 && value < .99){
            return -.5;
        }else if(value >= .99 && value < 1){
            return -.10;
        }else if(value >= 1 && value < 1.01 ){
            return -.15;
        }else if(value >= 1.01 && value < 1.02){
            return -.20;
        }else if(value >= 1.02 ){
            return  -.30;
        }else{
            return 0;
        }
    }

    /** MANTENIMIENTO  */
    faltas_al_epp(value){
        if(value >=0  && value < 1){
            return 0;
        }else if(value >= 1 && value <2){
            return -.25;
        }else if(value >= 2 && value <3){
            return -.50;
        }else if(value >= 3){
            return -.100
        }else{
            return 0;
        }
    }

    fugas_de_vapor(value){
        if(value >=0  && value < 1){
            return .09;
        }else if(value >= 1 && value <2){
            return -.08;
        }else if(value >= 2 && value <3){
            return -.15;
        }else if(value >= 3 && value <4){
            return -.25
        }else if(value >= 4 && value <5){
            return -.30
        }else if(value >= 5){
            return -.40
        }else{
            return 0;
        }
    }

    fugas_de_perla(value){
        if(value >=0  && value < 1){
            return .1;
        }else if(value >= 1 && value <2){
            return -.1;
        }else if(value >= 2 && value <3){
            return -.15;
        }else if(value >= 3 && value <4){
            return -.25
        }else if(value >= 4 && value <5){
            return -.30
        }else if(value >= 5){
            return -.40
        }else{
            return 0;
        }
    }

    fugas_de_aceite(value){
        if(value >=0  && value < 1){
            return .05;
        }else if(value >= 1 && value <2){
            return -.05;
        }else if(value >= 2 && value <3){
            return -.10;
        }else if(value >= 3 && value <4){
            return -.15
        }else if(value >= 4 && value <5){
            return -.20
        }else if(value >= 5){
            return -.30
        }else{
            return 0;
        }
    }
    fugas_de_aire(value){
        if(value >=0  && value < 1){
            return .06;
        }else if(value >= 1 && value <2){
            return -.06;
        }else if(value >= 2 && value <3){
            return -.10;
        }else if(value >= 3 && value <4){
            return -.15
        }else if(value >= 4 && value <5){
            return -.20
        }else if(value >= 5){
            return -.30
        }else{
            return 0;
        }
    }

    

    _electricidad(value){
        if(value  == 'Rojo'){
            return .04;
        }else if(value == 'Amarillo'){
            return  .06;
        }else if(value == 'Verde'){
            return  .13;
        }else if(value == 'Azul'){
            return .15
        }else{
            return 0;
        }
    }

   
    _combustible(value){
        if(value  == 'Rojo'){
            return .04;
        }else if(value == 'Amarillo'){
            return .06;
        }else if(value == 'Verde'){
            return  .13;
        }else if(value == 'Azul'){
            return .15
        }else{
            return 0;
        }
    }

    
    _agua(value){
        if(value  == 'Rojo'){
            return .02;
        }else if(value == 'Amarillo'){
            return .03;
        }else if(value == 'Verde'){
            return  .04;
        }else if(value == 'Azul'){
            return .05
        }else{
            return 0;
        }
    }


    /** HERMOSILLO */
    aprovechamientoMP_Hmo(value){ //dpt corte
        if(value >= .84 && value < .88){
            return .20;
        }else if(value >= .88 && value < .92){
            return .15;
        }else if(value >= .92 && value < .96){
            return .10;
        }else if(value >= .96 && value < 1){
            return .05;
        }else if(value >= 1 && value < 1.03){
            return .0;
        }else if(value >= 1.03 && value < 1.06){
            return -.05;
        }else if(value >= 1.06 && value < 1.09){
            return -.10;
        }else if(value >= 1.09 && value < 1.12){
            return -.15;
        }else if(value >= 1.12 && value < 1.15 ){
             return -.20;
        }else if(value >= 1.15 ){
            return -.25;
        }else{
            return 0;
        }
    }

    desperdicio_5(value) {  //depto steelfoam hmo
        if(value == 0 ){
            return .05;
        }else if(value == 1 ){
            return -.05;
        }else if(value == 2 ){
            return -.15;
        }else if(value == 3 ){
            return -.25;
        }else if(value == 4 ){
            return -.35;
        }else if(value == 5 ){
            return -.45;
        }else if(value == 6 ){
            value = -.55;
            return value;
        }else if(value == 7 ){
            value = -.65;
            return value;
        }else if(value == 8 ){
            value = -.75;
            return value;
        }else if(value == 9 ){
            value = -.85;
            return value;
        
        }else{
            return 0;
        }
    }

    aprovechamientoMP_2(value) { 
        
        if(value == 0 ){
            return .20;
        }else if(value >= 88  && value < 92 ){
            return .15;
        }else if(value >= 92  && value < 96){
            return .10;
        }else if(value >= 96  && value < 1 ){
            return .05;
        }else if(value >= 100  && value < 103 ){
            return 0;
        }else if(value >=103  && value < 106 ){
            return -.05;
        }else if(value >= 106 && value < 109){
            return -.10;
        }else if(value >= 109 && value < 112 ){
            return -.15;
        }else if(value >= 112 && value < 115){
            return -.20;
        }else if(value >= 115 ){
            return -.25;
        
        }else{
            return 0;
        }
    }

    /** INSULPANEL */

    _planCarrera(value){
        if(value == 'NI' || value == 'ni'){
            return 600;
        }else if(value =='1'){
            return 700;
        }else if(value == '2'){ 
            return 800;
        }else if(value == '3'){
            return 950;
        }else{
            return 0;
        }
    }

    _penalizacion(value){
        if(value == 0){
            return 0;
        }else if(value == 1){
            return .25;
        }else if(value ==2){
            return .5
        }else if(value ==3){
            return .75
        }else if(value >= 4){
            return 1
        }else{
            return 0;
        }
    }

    _penalizacion2(value){
        if(value == 0){
            return 0;
        }else if(value == 1){
            return 50;
        }else if(value ==2){
            return 100
        }else if(value ==3){
            return 150
        }else if(value >= 4){
            return 200
        }else{
            return 0;
        }
    }

    /**rotulado T1 
    desperdicio_6(value){ rechazo de piezas
        if(value==0){
            return 0;
        }else if(value>=1 && value < 11){
            return -.05;
        }else if(value>=11 && value < 21){
            return -.10;
        }else if(value>=21){
            return -.20;
        }else{
            return 0;
        }
        
    }*/
    desperdicio_6(value){
        if(value==0){
            return 0;
        }else if(value>=17 && value < 18){
            return .05;
        }else if(value>=18 && value < 19){
            return .04;
        }else if(value>=19 && value < 20){
            return .05;
        }else if(value>=20 && value < 21){
            return .02;
        }else if(value>=21 && value < 22){
            return .01;
        }else if(value>=22 && value < 23){
            return 0;
        }else if(value>=23 && value < 24){
            return -.01;
        }else if(value>=24 && value < 25){
            return -.02;
        }else if(value>=25 && value < 26){
            return -.03;
        }else if(value>=26 && value < 27){
            return -.04;
        }else if(value>=27 && value < 28){
            return -.05;
        }else{
            return 0;
        }
    }

    desperdicio_12(value){
        if(value==0){
            return 0;
        }else if(value>=1 && value < 11){
            return -.05;
        }else if(value>=11 && value < 20){
            return -.10;
        }else if(value>=20){
            return -.20;
        }else{
            return 0;
        }
    }

    /** Guadalajara */
    //preexpmoldeo

    aprovechamientoMP_3(value){
        if(value >= 90 && value < 93){
            return .20
        }else if(value >= 93 && value <95){
            return .10
        }else if(value >= 95 && value <100){
            return .05
        }else if(value >= 100 && value <100.1){
            return 0
        }else if(value >= 100.1 && value <101){
            return -.05
        }else if(value >= 101 && value <102){
            return -.10
        }else if(value >= 102 && value <105){
            return -.15
        }else if(value >= 105 && value <107){
            return -.20
        }else if(value >= 107){
            return -.25
        }else{
            return 0;
        }
    }

    aprovechamientoMP_4(value){
        if(value >= 0 && value < 96){
            return .20
        }else if(value >= 96 && value <98){
            return .10
        }else if(value >= 98 && value <100){
            return .05
        }else if(value >= 100 && value <100.1){
            return 0
        }else if(value >= 100.1 && value <101){
            return -.05
        }else if(value >= 101 && value <102){
            return -.10
        }else if(value >= 102 && value <105){
            return -.15
        }else if(value >= 105 && value <107){
            return -.20
        }else if(value >= 107){
            return -.25
        }else{
            return 0;
        }
    }

    blocksfe_1(value){
        if(value >=0 && value <1){
            return 0;
        }else if(value >=1 && value <2){
            return -.03
        }else if(value >=2 && value <3){
            return -.06
        }else if(value >=3 && value <4){
            return -.09
        }else if(value >=4 && value <5){
            return -.12
        }else if(value >=5 && value <6){
            return -.20
        }else if(value >=6 && value <7){
            return -.21
        }else if(value >=7 && value <8){
            return -.22
        }else if(value >=8 && value <9){
            return -.23
        }else if(value >=9 && value <10){
            return -.24
        }else if(value >=10 && value <11){
            return -.30
        }else if(value >=11 && value <15){
            return -.50
        }else if(value >= 15){
            return -1
        }else{
            return 0;
        }
    }

    desperdicio_7(value){ // depto corte
        if(value >=0 && value < 96){
            return .15
        }else if(value >=96 && value <98){
            return.10
        }else if(value >=98 && value <100){
            return.05
        }else if(value >= 100 && value <100.1){
            return 0
        }else if(value >= 100.1 && value <101){
            return -.05
        }else if(value >= 101 && value <102){
            return -.10
        }else if(value >= 102 && value <105){
            return -.15
        }else if(value >= 105 && value <107){
            return -.20
        }else if(value >= 107){
            return -.25
        }else{
            return 0;
        }
    }

    boletas_pnc(value){
        if(value >= 1 && value <2){
            return -.05
        }else if(value >=2 && value <3){
            return -.08
        }else if(value >=3 && value <4){
            return -.10
        }else if(value >=4 && value <5){
            return -.15
        }else if(value >=5 && value <6){
            return -.16
        }else if(value >=6 && value <7){
            return -.17
        }else if(value >=7 ){
            return -.20
        }else {
            return 0
        }
        
    }

    uso_equipo_seguridad(value){
        if(value ==0){
            return 0;
        }else if(value == 1){
            return -.2;
        }else if(value == 2){
            return -.5;
        }else{
            return 0;
        }
    }

    uso_equipo_seguridad2(value){
        if(value ==0){
            return 0;
        }else if(value == 1){
            return -.07;
        }else if(value == 2){
            return -.15;
        }else{
            return 0;
        }
    }

    blocksfe_2(value){
        if(value>=0 && value <1){
            return 0;
        }else if(value>=1 && value <2){
            return -.03;
        }else if(value>=2 && value <3){
            return -.06;
        }else if(value>=3){
            return -.09;
        }else{
            return 0;
        }

    }

    blocksfe_6(value){
        if(value>=0 && value <1){
            return .02;
        }else if(value>=1 && value <2){
            return -.03;
        }else if(value>=2 && value <3){
            return -.06;
        }else if(value>=3){
            return -.09;
        }else{
            return 0;
        }

    }

    blocksfe_5(value){
        if(value>=0 && value <1){
            return 0;
        }else if(value>=1 && value <2){
            return -.03;
        }else if(value>=2 && value <3){
            return -.06;
        }else if(value>=3){
            return -.1;
        }else{
            return 0;
        }

    }

    hielerasfe_1(value){
        if(value>=0 && value <1){
            return .1
        }else if(value>=1 && value <2){
            return -.5
        }else if(value>=2){
            return -1
        }
    }

    rechazo_interno2(value){
        if(value>=0 && value <3){
            return .1
        }else if(value>=3 && value <5){
            return 0
        }else if(value>=5 && value <8){
            return -.1
        }else if(value>=8){
            return -.15
        }else{
            return 0;
        }
    }
    
    _pago(value){
        if(value=='m3'){
            return 3
        }else if(value=='km'){
            return .90
        }else{
            return 0
        }
    }

    limpieza_unidad(value){
        if(value=='Si' || value=='si' || value=='SI'){
            return 225
        }else if(value=='No' || value=='no' || value=='NO'){
            return -100
        }else{
            return 0
        }
    }

    desc_seguridad(value){
        if(value=='Si' || value=='si' || value=='SI' || value >0){
            return -.05
        }else{
            return 0
        }
    }

    desc_seguridad2(value){
        if(value=='Si' || value=='si' || value=='SI' || value >0){
            return -.1
        }else{
            return 0
        }
    }

    _devoluciones(value){
        if(value=='Si' || value=='si' || value=='SI' || value >0){
            return -.02
        }else{
            return 0
        }
    }

    _descuento_epp(value){
        if(value=='No' || value=='no' || value=='NO'){
            return -.25
        }else{
            return 0
        }
    }

    blocksfe_3(value){
        if(value>=0 && value <1){
            return 0;
        }else if(value>=1 && value <2){
            return -.03;
        }else if(value>=2 && value <3){
            return -.06;
        }else if(value>=3 && value <4){
            return -.09;
        }else if(value>=4 && value <5){
            return -.12;
        }else if(value>=5 && value <6){
            return -.15;
        }else if(value>=6 && value <7){
            return -.18;
        }else if(value>=7 && value <8){
            return -.21;
        }else if(value>=8){
            return -.09;
        }else{
            return 0;
        }

    }

    blocksfe_4(value){
        if(value>=0 && value <1){
            return 0;
        }else if(value>=1 && value <2){
            return -.03;
        }else if(value>=2 && value <3){
            return -.06;
        }else if(value>=3 && value <4){
            return -.09;
        }else if(value>=4 && value <5){
            return -.12;
        }else if(value>=5 && value <6){
            return -.15;
        }else if(value>=6 && value <7){
            return -.18;
        }else if(value>=7 && value <8){
            return -.21;
        }else if(value>=8){
            return -.24;
        }else{
            return 0;
        }

    }

    aprovechamientoMP_5(value){
        if(value >=0 &&value <88){
            return .35
        }else if(value >=88 &&value <91){
            return .28
        }else if(value >=91 &&value <94){
            return .21
        }else if(value >=94 &&value <97){
            return .14
        }else if(value >=97 &&value <100){
            return .07
        }else if(value >=100 &&value <103){
            return .0
        }else if(value >=103 &&value <106){
            return -.07
        }else if(value >=106 &&value <109){
            return -.14
        }else if(value >=109 &&value <112){
            return -.21
        }else if(value >=112 &&value <115){
            return -.28
        }else if(value >=115){
            return -.35
        }else{
            return 0;
        }
    }

    aprovechamientoMP_6(value){
        if(value >=0 &&value <88){
            return .30
        }else if(value >=88 &&value <90){
            return .25
        }else if(value >=90 &&value <92){
            return .20
        }else if(value >=92 &&value <94){
            return .15
        }else if(value >=94 &&value <98){
            return .1
        }else if(value >=98 &&value <100){
            return .05
        }else if(value >=100 &&value <102){
            return 0
        }else if(value >=102 &&value <104){
            return -.05
        }else if(value >=104 &&value <106){
            return -.1
        }else if(value >=106 &&value <108){
            return -.15
        }else if(value >=108 && value <110){
            return -.20
        }else if(value >=110 && value <112){
            return -.25
        }else if(value >=112 && value <114){
            return -.3
        }else if(value >=114 && value <116){
            return -.35
        }else if(value >=116 ){
            return -.4
        }else{
            return 0;
        }
    }

    ltkg_preexpandido(value){
        if(value >=0 && value <0.2326){
            return .1;
        }else if(value >=0.2326 && value <0.2336){
            return.08
        }else if(value >=0.2336 && value <0.2345){
            return.06
        }else if(value >=0.2345 && value <0.2355){
            return.04
        }else if(value >=0.2355 && value <0.2365){
            return.02
        }else if(value >=0.2365 && value <0.2374){
            return 0
        }else if(value >=0.2374 && value <0.2384){
            return -.02
        }else if(value >=0.2384 && value <0.2394){
            return -.04
        }else if(value >=0.2394 && value <0.2403){
            return -.06
        }else if(value >=0.2403 && value <0.2413){
            return -.08
        }else if(value >=0.2413){
            return -.1
        }else{
            return 0;
        }
    }

    desperdicio_8(value){
        if(value>=0 && value <94.40){
            return .2;
        }else if(value>=94.40 && value <94.80){
            return .18
        }else if(value>=94.80 && value <95.20){
            return .16
        }else if(value>=95.20 && value <95.60){
            return .14
        }else if(value>=95.60 && value <96){
            return .12
        }else if(value>=96 && value <96.4){
            return .10
        }else if(value>=96.4 && value <96.8){
            return .08
        }else if(value>=96.8 && value <97.2){
            return .06
        }else if(value>=97.2 && value <97.6){
            return .04
        }else if(value>=97.6 && value <98){
            return .02
        }else if(value>=98 && value <98.40){
            return 0
        }else if(value>=98.40 && value <98.80){
            return -.02
        }else if(value>=98.80 && value <99.20){
            return -.04
        }else if(value>=99.20 && value <99.60){
            return -.06
        }else if(value>=99.60 && value <100){
            return -.08
        }else if(value>=100 && value <100.4){
            return -.1
        }else if(value>=100.4 && value <100.8){
            return -.12
        }else if(value>=100.8 && value <101.2){
            return -.14
        }else if(value>=101.2 && value <101.6){
            return -.16
        }else if(value>=101.6 && value <102){
            return -.18
        }else if(value>=102){
            return -.20
        }else {
            return 0;
        }
    }


    dif_inventario(value){
        if(value >=0 && value < .5){
            return .08;
        }else if(value >=.5 && value <1){
            return .04
        }else if(value >=1 && value <1.5){
            return 0
        }else if(value >=1.5 && value <2){
            return -.04
        }else if(value >=2){
            return -.08
        }else{
            return 0;
        }
    }

    desperdicio_9(value){
        if(value>=0 && value <11){
            return .5;
        }else if(value >=11 && value <11.5){
            return .4;
        }else if(value >=11.5 && value <12){
            return .3;
        }else if(value >=12 && value <12.5){
            return .2;
        }else if(value >=12.5 && value <13){
            return .1;
        }else if(value >=13 && value <13.5){
            return 0;
        }else if(value >=13.5 && value <14){
            return -.1;
        }else if(value >=14 && value <14.5){
            return -.2;
        }else if(value >=14.5 && value <15){
            return -.3;
        }else if(value >=15 && value <15.5){
            return -.4;
        }else if(value >=13.5 ){
            return -.5;
        }else{
            return 0;
        }
    }

    desperdicio_10(value){
        if(value>=0 && value <18){
            return .5;
        }else if(value >=18 && value <18.5){
            return .4;
        }else if(value >=18.5 && value <19){
            return .3;
        }else if(value >=19&& value <19.5){
            return .2;
        }else if(value >=19.5 && value <20){
            return .1;
        }else if(value >=20 && value <20.5){
            return 0;
        }else if(value >=20.5 && value <21){
            return -.1;
        }else if(value >=21 && value <21.5){
            return -.2;
        }else if(value >=21.5 && value <22){
            return -.3;
        }else if(value >=22 && value <22.5){
            return -.4;
        }else if(value >=22.5 ){
            return -.5;
        }else{
            return 0;
        }
    }

    desperdicio_11(value){
        if(value >=0 && value <87){
            return .3
        }else if(value >=87 && value <90){
            return .25
        }else if(value >=90 && value <92){
            return .2
        }else if(value >=92 && value <95){
            return .15
        }else if(value >=95 && value <97){
            return .1
        }else if(value >=97 && value <100){
            return .03
        }else if(value >=100 && value <101){
            return 0
        }else if(value >=101 && value <102){
            return -.05
        }else if(value >=102 && value <103){
            return -.10
        }else if(value >=103 && value <104){
            return -.15
        }else if(value >=104 && value <105){
            return -.2
        }else if(value >=105 && value <106){
            return -.4
        }else if(value >=106 && value <107){
            return -.6
        }else if(value >=107 && value <108){
            return -.8
        }else if(value >=108 && value <109){
            return -1
        }else if(value >=109){
            return -1.2
        }else{
            return 0;
        }
    }

    aprovechamientoMP_7(value){
        if(value=='AZUL' || value =='azul'){
            return .3
        }else if(value=='VERDE' || value =='verde'){
            return .2
        }else if(value=='AMARILLO' || value =='amarillo'){
            return 0
        }else if(value=='ROJO' || value =='rojo'){
            return -.2
        }else{
            return 0
        }
    }

    piezas_defectuosas(value){
        if(value >=0 && value <1){
            return 0
        }else if(value >=1 && value <11){
            return -.05
        }else if(value >=11 && value <21){
            return -.1
        }else if(value >=21 ){
            return -.2
        }else{
            return 0;
        }
    }

    desperdicio_15(value){
        if(value>=0 && value <10.5){
            return .2;
        }else if(value >=10.5 && value <11){
            return .175;
        }else if(value >=11 && value <11.5){
            return .15;
        }else if(value >=11.5 && value <12){
            return .125;
        }else if(value >=12 && value <12.5){
            return .1;
        }else if(value >=12.5 && value <13){
            return .075;
        }else if(value >=13 && value <13.5){
            return .05;
        }else if(value >=13.5 && value <14){
            return .025;
        }else if(value >=14 && value <14.5){
            return 0;
        }else if(value >=14.5 && value <15){
            return -.025;
        }else if(value >=15 && value <15.5){
            return -.05;
        }else if(value >=15.5 && value <16){
            return -.075;
        }else if(value >=16 && value <16.5){
            return -.1;
        }else if(value >=16.5 && value <17){
            return -.125;
        }else if(value >=17 && value <17.5){
            return -.15;
        }else if(value >=17.5 && value <18){
            return -.175;
        }else if(value >=18 ){
            return -.2;
        }else{
            return 0;
        }
    }

    rechazo_interno3(value){
        if(value >=0 && value <1){
            return 0;
        }else if(value >=1 && value <2){
            return -.02
        }else if(value >=2 && value <3){
            return -.03
        }else if(value >=3 && value <4){
            return -.04
        }else if(value >=4 && value <5){
            return -.05
        }else if(value >=5 && value <6){
            return -.075
        }else if(value >=6 && value <7){
            return -.08
        }else if(value >=7 && value <8){
            return -.1
        }else if(value >=8 && value <9){
            return -.15
        }else if(value >=9 && value <10){
            return -.17
        }else if(value >=10){
            return -.20
        }else{
            return 0;
        }
    }

    desperdicio_16(value){
        if(value >=0 && value <5.4){
            return .2;
        }else if(value >=5.4 && value <5.8){
            return .16
        }else if(value >=5.8 && value <6.2){
            return .12
        }else if(value >=6.2 && value <6.4){
            return .08
        }else if(value >=6.4 && value <6.6){
            return .04
        }else if(value >=6.6 && value <7){
            return 0
        }else if(value >=7 && value <7.5){
            return -.04
        }else if(value >=7.5 && value <8){
            return -.08
        }else if(value >=8 && value <8.5){
            return -.12
        }else if(value >=8.5){
            return -.24
        }else{
            return 0;
        }
    }

    equipo_proteccion(value){
        if(value==0){
            return 0;
        }else if(value ==5){
            return .08;
        }else{
            return 0;
        }
    }

    condicionante_epp(value){
        if(value ==0){
            return 0;
        }else if(value==1){
            return -.01
        }else if(value==2){
            return -.05
        }else if(value==3){
            return -.08
        }else if(value==4){
            return -.12
        }else if(value==5){
            return -.15
        }else if(value==6){
            return -.30
        }else{
            return 0
        }
    }

    condicionante_epp2(value){
        if(value ==0){
            return 0;
        }else if(value==1){
            return -.01
        }else if(value==2){
            return -.05
        }else if(value==3){
            return -.08
        }else if(value==4){
            return -.12
        }else if(value==5){
            return -.15
        }else if(value==6){
            return -.20
        }else{
            return 0
        }
    }

    desperdicio_17(value){
        if(value>=0 && value <3){
            return 0;
        }else if(value >=3 && value <9){
            return -.08
        }else if(value >=9 && value <16){
            return -.1
        }else if(value >=16 ){
            return -.2
        }
    }

    dif_inventario2(value){
        if(value>=0 && value <0.5){
            return .08;
        }else if(value >=0.5 && value <1){
            return  .04
        }else if(value >=1 && value <1.5){
            return  0
        }else if(value >=1.5 && value <2){
            return -.04
        }else if(value >=2 ){
            return -.08
        }
    }

    desperdicio_18(value){
        if(value >= 0 &&  value <1){
            return 0
        }else if(value >=1 && value <6){
            return -.05
        }else if(value >=6 && value <11){
            return -.07
        }else if(value >=11 && value <16){
            return -.09
        }else if(value >=16 && value <21){
            return -.11
        }else if(value >=21 && value <26){
            return -.13
        }else if(value >=26 ){
            return -.15
        }else{
            return 0;
        }
    }
}