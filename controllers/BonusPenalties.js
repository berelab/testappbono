'use stict'

import TableOfProportions from './TableOfProportions';
import DirtyDays from './DirtyDays';

export default class BonusPenalties {
    constructor(
        amp,
        blocks_fe,
        densidad,
        id_combustible,
        percepcion_total_m3_base,
        departamento,
        dias_sucios,
        city,
        num_quejas_cliente 
    ){
        this.amp                        = amp;
        this.blocks_fe                  = blocks_fe;
        this.densidad                   = densidad;
        this.id_combustible             = id_combustible;
        this.percepcion_total_m3_base   = percepcion_total_m3_base;
        this.depto                      = departamento;
        this.dias_sucios                = dias_sucios;
        this.city                       = city;
        this.num_quejas_cliente         = num_quejas_cliente 
    }

    //Getters
    get extraDesperdicio(){
        return this.extra_desperdicio(this.percepcion_total_m3_base, this.city);
    }
    get extraDiasSucios(){
        return this.extra_dias_sucios(this.depto, this.dias_sucios, this.percepcion_total_m3_base, this.city)
    }
    get desperdicios(){
        return this.pc_desperdicio(this.percepcion_total_m3_base);
    }
    get densidades(){
        return this.pc_densidad_moldeo(this.percepcion_total_m3_base);
    }
    get combustibles(){
        return this.pc_combustible_moldeo(this.percepcion_total_m3_base);
    }
    get densidadBobedilla(){
        return this.pc_densidad_bobedilla(this.percepcion_total_m3_base);
    }
    get densidadIns16(){
        return this.pc_densidad_ins16(this.percepcion_total_m3_base);
    }
    get aprovechamientoMP(){
        return this.pc_aprovechamientoMP(this.percepcion_total_m3_base);
    }
    
    get desperdicios2(){
        return this.pc_desperdicio2(this.percepcion_total_m3_base)
    }

    get ordenLimpieza(){
        return this.pc_ordenLimpieza(this.percepcion_total_m3_base);
    }

    get quejas(){
        return this.pc_quejas(this.percepcion_total_m3_base);
    }

    get pcRetardosEntrega(){
        return this.pc_retardosEntrega(this.percepcion_total_m3_base, this.amp);
    }

    get pcCalidad(){
        return this.pc_Calidad(this.percepcion_total_m3_base, this.blocks_fe)
    }

    get pcLimpieza(){
        return this.pc_limpieza(this.percepcion_total_m3_base, this.densidad)
    }

     get pcblocksfe(){
         return this.pc_blocksfe(this.percepcion_total_m3_base, this.blocks_fe);
     }

     get  pcltkgPreexpandido(){
         return this.pc_ltkgPreexpandido(this.percepcion_total_m3_base, this.densidad);
     }

     get pc_equipoProtecc(){
         return this.pc_equipo_protecc(this.percepcion_total_m3_base, this.city);
     }

    //Methods
    extra_desperdicio(percepcion_total_m3_base, city){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let extra_amp;
        let premio_castigo_amp;
        if(city == 'Juarez') {
            premio_castigo_amp = calc.desperdicio13//this.depto == 'Placa' || this.depto == 'Aligerante' ? premio_castigo_amp = calc.desperdicios3 : premio_castigo_amp = calc.desperdicio13//calc.desperdicios2;
        }else if(city == 'La Paz'){
            if(this.depto=='Corte'){
                premio_castigo_amp = calc.desperdicio13;
            }else{
                premio_castigo_amp = calc.desperdicios;
            }
        }else if(city == 'Guadalajara'){
            //premio_castigo_amp =calc.desperdicio7;
            premio_castigo_amp = calc.desperdicio13;
        }else if(city == 'Hermosillo'){
            if(this.depto =='Corte'){
                premio_castigo_amp = calc.desperdicio13;
            }else{
                premio_castigo_amp = calc.aprovechamientoMP2;
            }

        }else if(city=='Queretaro'){
            //premio_castigo_amp= calc.aprovechamientoMP4;
            premio_castigo_amp = calc.desperdicio13;
        }else if(city=='Villahermosa'){
            if(this.depto =='Corte'){
                //premio_castigo_amp= calc.desperdicio8;
                premio_castigo_amp = calc.desperdicio13;
            }else{
                //premio_castigo_amp= calc.aprovechamientoMP5;
                premio_castigo_amp = calc.desperdicio13;
            }
            
        }else if(city=='CDMX'){
            if(this.depto=='CorteConst'){
               // premio_castigo_amp = calc.desperdicio9;
               premio_castigo_amp = calc.desperdicio13;
            }else if(this.depto=='CorteMaquila'){
                //premio_castigo_amp = calc.desperdicio10;
                premio_castigo_amp = calc.desperdicio13;
            }else{
                //premio_castigo_amp= this.amp;
                premio_castigo_amp = calc.desperdicio13;
            }
           
        }else if(city =='Monterrey'){
            if(this.depto=='EMCO' || this.depto=='Corte NIP'  || this.depto=='Corte L'){
                //premio_castigo_amp = calc.desperdicio11;
                premio_castigo_amp = calc.desperdicio13;
            }else if(this.depto=='Bloquera'){
                //premio_castigo_amp= calc.aprovechamientoMP6;
                premio_castigo_amp = calc.desperdicio13;
            }else if(this.depto=='Herramental'){
                premio_castigo_amp = this.amp/100;
            }
        }else if(city=='Nogales' || city=='Merida' || city=='Veracruz' || city=='Cancun' || city=='Tijuana' || city=='Culiacan' ){
            if(this.depto=='Corte' || this.depto=='EMCO' ||this.depto=='Bloquera' || this.depto=='PreexpYMoldeo'){
                premio_castigo_amp = calc.desperdicio13;
            }else if(this.depto=='Moldeo'){
                premio_castigo_amp = calc.desperdicio14;
            }else if(this.depto=='Steelfoam'){
                premio_castigo_amp = calc.desperdicio15;
            }else if(this.depto=='Construpanel'){
                premio_castigo_amp = calc.desperdicio16;
            }else if(this.depto=='Rotulado'){
                premio_castigo_amp = calc.desperdicio17;
            }else if(this.depto=='Empaque Perla'){
                premio_castigo_amp = calc.condicionanteEpp2;
            }else if(this.depto=='Bono TYG'){
                premio_castigo_amp = calc.desperdicio18;
            }
           
        }else{  
            premio_castigo_amp = calc.desperdicios;
        }
        premio_castigo_amp ? extra_amp = percepcion_total_m3_base * premio_castigo_amp : extra_amp = 0

        return extra_amp;
    }

    pc_equipo_protecc(percepcion_total_m3_base, city){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let extra_ep;
        let premio_castigo_ep;
       
        premio_castigo_ep = calc.equipoProteccion;
    
        premio_castigo_ep ? extra_ep = percepcion_total_m3_base * premio_castigo_ep : extra_ep = 0

        return extra_ep;
    }
    
    extra_dias_sucios(depto, dias_sucios, percepcion_total_m3_base, city){
        let dirtyDaysCalcs = new DirtyDays(dias_sucios);
        let extra_diasSucios;
        let premio_castigo_diasSucios;

        /*
        if(depto == 'Almacén' || depto == 'Choferes') {
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol;
        }else if(depto == 'Moldeo' && city == 'Juarez'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol
        }else if(depto == 'Moldeo' && city == 'Hermosillo'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios5
        }else if(depto == 'Almacen' && city == 'Nogales'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios3
        }else if(depto == 'Almacen' && city == 'Hermosillo'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios4
        }else if(depto == this._check_Department(depto)){
            premio_castigo_diasSucios =  dirtyDaysCalcs.auditoriaSol2;
        }else if (depto == 'Corte' && city == 'Juarez'){
            premio_castigo_diasSucios =  dirtyDaysCalcs.auditoriaSol2;
        }else if (depto == 'Electrolux'){
            premio_castigo_diasSucios = 0;
        }else if(depto == 'Bloquera' && city == 'Hermosillo'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios2;
        }else if(depto == 'Steelfoam' && city == 'Hermosillo'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol3;
            premio_castigo_diasSucios =   premio_castigo_diasSucios *.2;
        }else if((depto == 'PreexpYMoldeo' || depto =='Corte') && city == 'Guadalajara'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios7;
        }else if(depto == 'Almacen'  && city == 'Guadalajara'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios8;
        }else if(depto == 'Molienda de MR'  && city == 'Guadalajara'){ 
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol4;
        }else if((depto == 'PreexpYMoldeo' || depto == 'Corte' || depto == 'Almacen') && city == 'Queretaro'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios9;
        }else if(depto == 'Hielera' && city == 'Queretaro' ){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios6;
        }else if(depto =='PreexpYMoldeo' && city =='Villahermosa'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol;
        }else if(depto =='Corte' && city =='Villahermosa'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol5;
        }else if(depto =='Almacen' && city =='Villahermosa'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios11;
        }else if(depto =='Almacen' && city=='CDMX'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol;
        }else if((depto =='PreexpYMoldeo' || depto =='CorteConst'  || depto =='Vitro' || depto =='CorteMaquila') && city=='CDMX'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios12;
        }else if(depto == 'Molienda de MR'  && city == 'Monterrey'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol2
        }else if((depto == 'Almacen'  || depto == 'moldeo' || depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Herramental') && city == 'Monterrey'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol7
        }else if(depto == 'Bloquera'  && city == 'Monterrey'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol8
        }else if(depto=='PreExpansion' && city == 'Monterrey'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios13
        }else if(city=='Merida' || city=='Veracruz' || city=='Mexicali' || city=='Cancun' || city=='Tijuana' || city=='Culiacan'){
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios14
        }else{
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios;
        }
        */

        premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios14 // estandar

        premio_castigo_diasSucios ? extra_diasSucios = percepcion_total_m3_base * premio_castigo_diasSucios : extra_diasSucios = 0
        
        return extra_diasSucios;
    }
    pc_desperdicio(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let p_blocks_fe = calc.blocksFueraEspecificacion;
        let premio_castigo_desperdicio;
        p_blocks_fe ? premio_castigo_desperdicio = percepcion_total_m3_base * p_blocks_fe : premio_castigo_desperdicio = 0;
        
        return premio_castigo_desperdicio;
    }
    pc_densidad_moldeo(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let p_pc_densidad  = calc.desperdicio13; ; //calc.densidades; bloquera la paz
        let premio_castigo_densidad;
        p_pc_densidad ? premio_castigo_densidad = percepcion_total_m3_base * p_pc_densidad : premio_castigo_densidad = 0;

        return premio_castigo_densidad;
    }
    pc_combustible_moldeo(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let p_combustible = calc.combustibles;
        let premio_castigo_combustible;
        p_combustible ? premio_castigo_combustible = p_combustible * percepcion_total_m3_base : premio_castigo_combustible = 0;

        return premio_castigo_combustible;
    }
    pc_densidad_bobedilla(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let p_pc_densidad_bobedilla = calc.densidadBobedilla;
        let premio_castigo_densidad;
        p_pc_densidad_bobedilla ? premio_castigo_densidad = percepcion_total_m3_base * p_pc_densidad_bobedilla : premio_castigo_densidad = 0;

        return premio_castigo_densidad;
    }
    pc_densidad_ins16(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let p_pc_densidad_ins = calc.densidadIns16;
        let premio_castigo_densidad;
        p_pc_densidad_ins ? premio_castigo_densidad = percepcion_total_m3_base * p_pc_densidad_ins : premio_castigo_densidad = 0;

        return premio_castigo_densidad;
    }
    _check_Department(depto){
        const departments = ['Kbrs', 'Mcs Frame', 'AOS Mith', 'Commscope', 'Placa', 'Aligerante', 'Molino'];
        const result = departments.find( dep => dep === depto );
        return result;
    }

    pc_aprovechamientoMP(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp);
        let p_pc_amp;
        let premio_castigo_amp;

        if(this.depto=='Moldeo'){
           // p_pc_amp = calc.aprovechamientoMP2;
            p_pc_amp = calc.desperdicio14; //estandar moldeo
        }else if(this.depto=='PreexpYMoldeo'){   
           //this.city =='Queretaro' ? p_pc_amp = calc.aprovechamientoMP4 :p_pc_amp = calc.aprovechamientoMP3;
           p_pc_amp = calc.desperdicio13
        }else{ // bloquera
           // p_pc_amp = calc.aprovechamientoMP;
            p_pc_amp = calc.desperdicio13
        }
        p_pc_amp ? premio_castigo_amp = percepcion_total_m3_base * p_pc_amp : premio_castigo_amp = 0;
     
        return premio_castigo_amp;
    }

    pc_desperdicio2(percepcion_total_m3_base){
        let calc = new TableOfProportions(this.amp);
        let p_desperdicio ;
        let premio_castigo_desperdicio;
        if(this.depto=='Steelfoam'){
            p_desperdicio = calc.desperdicio5
            p_desperdicio = p_desperdicio*.2
        }else{ //moldeo nogales
            //p_desperdicio = calc.desperdicio4
            p_desperdicio  = calc.desperdicio14; //estandar moldeo
        }
       
        p_desperdicio ? premio_castigo_desperdicio = percepcion_total_m3_base * p_desperdicio : premio_castigo_desperdicio = 0;
       
        return premio_castigo_desperdicio;
    }

    pc_ordenLimpieza(percepcion_total_m3_base){
        let calc = new TableOfProportions(null, this.blocks_fe);
        let pc_ordenLimpieza = calc.ordenLimpieza;
        let premio_castigo_desperdicio;
        pc_ordenLimpieza ? premio_castigo_desperdicio = percepcion_total_m3_base * pc_ordenLimpieza : premio_castigo_desperdicio = 0;
       
        return premio_castigo_desperdicio;
    }

    pc_quejas(percepcion_total_m3_base){
        let calc = new TableOfProportions(null, null,null,null,null, this.num_quejas_cliente );
        let pc_quejas;

        if(this.depto =='Almacen'   && (this.city =='Guadalajara' || this.city =='Hermosillo' || this.city =='Monterrey' || this.city =='Veracruz' ) ){
            pc_quejas = calc.quejas2;
        }else if(this.depto =='Corte'  && (this.city =='Queretaro' || this.city =='Guadalajara' )){
            pc_quejas = calc.quejas2;
        }else if( this.depto =='Almacen' && this.city=='Queretaro' ){
            pc_quejas = calc.quejas4;
        }else if((this.depto =='Choferes' || this.depto =='Choferes Locales'  || this.depto =='Choferes CEDI') && (this.city =='Guadalajara' || this.city =='Monterrey')){
            pc_quejas = calc.quejas3;
        }else if(this.depto=='PreexpYMoldeo'  && this.city=='CDMX'){
            pc_quejas = calc.quejas5;
        }else if((this.depto=='CorteConst' || this.depto =='CorteMaquila'  || this.depto =='Vitro') && this.city=='CDMX' ){
            pc_quejas = calc.quejas2;
        }else if((this.depto =='Moldeo' || this.depto =='EMCO' || this.depto=='Corte NIP' || this.depto=='Corte')   &&  (this.city =='Merida' || this.city =='Monterrey')){
            pc_quejas = calc.quejas2;
        }else if(this.depto=='Corte L'   && this.city =='Monterrey'){
            pc_quejas = calc.quejas6;
        }else if(this.depto=='Choferes CEDI' &&  this.city =='Veracruz' ){
            pc_quejas = calc.quejas2;
        }else if(this.depto=='Corte'   && this.city =='Cancun'){
            pc_quejas = calc.quejas7;
        }else if((this.depto=='Corte' || this.depto =='Construpanel' )  && this.city =='Culiacan'){
            pc_quejas = calc.devoluciones;
        }else if((this.depto=='Almacen Const' || this.depto=='Almacen') && this.city =='Culiacan'){
            pc_quejas = calc.quejas2;
        }else if(this.depto=='Choferes Locales' && this.city=='Culiacan'){
            pc_quejas = calc.quejas3;
        }else{
            pc_quejas = calc.quejas;
        }

        let premio_castigo_desperdicio;
        pc_quejas ? premio_castigo_desperdicio = percepcion_total_m3_base * pc_quejas : premio_castigo_desperdicio = 0;
       
        
    
        
        return premio_castigo_desperdicio;
    }

    pc_blocksfe(percepcion_total_m3_base, blocks_fe){
        let calc = new TableOfProportions(null,blocks_fe);
        let premio_castigo_blocksfe;
        let pcblocksfe;
        if(this.depto =='Corte'  && this.city =='Guadalajara'){
            pcblocksfe = calc.boletaspnc;
        }else if(this.depto =='Almacen'  && this.city =='Guadalajara'){
            pcblocksfe = calc.usoEquipoSeguridad; 
        }else if(this.depto =='Almacen'  && this.city =='Queretaro'){
            pcblocksfe = calc.usoEquipoSeguridad2; 
        }else if(this.depto =='PreexpYMoldeo'  && this.city =='Queretaro'){
            pcblocksfe = calc.blocksfe2;
        }else if(this.depto =='Corte'  && this.city =='Queretaro'){
            pcblocksfe = calc.rechazoInterno2;
        }else if(this.depto == 'Hielera' && this.city == 'Queretaro'){
            pcblocksfe = calc.hielerasfe;
        }else if(this.depto == 'PreexpYMoldeo' && this.city == 'Villahermosa'){
            pcblocksfe = calc.blocksfe3;
        }else if(this.depto =='Almacen'  && this.city =='CDMX'){
            pcblocksfe = calc.difInventario;
        }else if(this.depto == 'Bloquera' && this.city == 'Monterrey'){
            pcblocksfe = calc.blocksfe4;
        }else if(this.depto == 'Bloquera' && this.city == 'Merida'){
            pcblocksfe = calc.blocksfe2;
        }else if(this.depto == 'Bloquera' && this.city == 'Veracruz'){
            pcblocksfe = calc.blocksfe5;
        }else if(this.depto == 'Construpanel' && this.city == 'Veracruz'){
            pcblocksfe = calc.rechazoInterno3;
        }else if(this.depto == 'Rotulado' && this.city == 'Merida'){
            pcblocksfe = calc.piezasDefectuosas;
        }else if(this.depto == 'Rotulado' && this.city == 'Mexicali'){
            pcblocksfe = calc.condicionanteEpp;
        }else if(this.depto =='PreexpYMoldeo'  && this.city =='Cancun'){
            pcblocksfe = calc.blocksfe6;
        }else if(this.depto =='PreexpYMoldeo'  && this.city =='Culiacan'){
            pcblocksfe = calc.descSeguridad;
        }else if(this.depto =='Molienda'  && this.city =='Culiacan'){
            pcblocksfe = calc.descuentoEpp;
        }else if((this.depto =='Corte' || this.depto =='Construpanel' || this.depto=='Almacen Const' || this.depto=='Almacen')  && this.city =='Culiacan'){
            pcblocksfe = calc.descSeguridad2;
        }else if((this.depto =='Almacen'  || this.depto=='Almacen Playa') && this.city =='Cancun'){
            pcblocksfe = calc.difInventario2;
        }else if(this.depto=='Bono TYG' && this.city=='Tijuana'){
            pcblocksfe = calc.condicionanteEpp2;
        }else{
            pcblocksfe = calc.blocksfe;
        }
      

        pcblocksfe ? premio_castigo_blocksfe = percepcion_total_m3_base * pcblocksfe : premio_castigo_blocksfe = 0;
        return premio_castigo_blocksfe;
    }

    /**insupanel */

    pc_retardosEntrega(percepcion_total_m3_base, amp){
        let calc = new TableOfProportions(amp);
        let pcpenalizacion = calc.penalizacion;

        if(this.city =='Guadalajara'){
            let pc_re;
            let bonos;
            bonos = percepcion_total_m3_base;
            pc_re = bonos * pcpenalizacion
            return pc_re;
        }else if(this.city =='Queretaro'){
          let pc_re = pcpenalizacion;
          return pc_re;
        }else{
            let pc_re =[];
            let bonos =[]
            bonos = percepcion_total_m3_base;
            let len = bonos.length;
            
            for(var i=0; i<len; i++){
                var total = bonos[i] * pcpenalizacion
                pc_re.push(total)
            } 
            return pc_re;
        }

    }

    pc_Calidad(percepcion_total_m3_base, blocks_fe){
        let calc = new TableOfProportions(blocks_fe);
        let pcpenalizacion = calc.penalizacion;

        if(this.city=='Guadalajara'){
            let pc_calidad;
            let bonos;
            bonos = percepcion_total_m3_base;
            pc_calidad= bonos * pcpenalizacion

            return pc_calidad;
        }else if(this.city =='Queretaro'){
            let pc_calidad = pcpenalizacion;
            return pc_calidad;
        }else{
            let pc_calidad =[];
            let bonos =[]
            bonos = percepcion_total_m3_base;
            let len = bonos.length;
            
            for(var i=0; i<len; i++){
                var total = bonos[i] * pcpenalizacion
                pc_calidad.push(total)
            } 
 
            return pc_calidad;
        }
       
    }

    pc_limpieza(percepcion_total_m3_base, densidad){
        let calc = new TableOfProportions(densidad);
        let pcpenalizacion = calc.penalizacion;
        let pclimpieza =[];
        let bonos =[]
        bonos = percepcion_total_m3_base;
        let len = bonos.length;
        
        for(var i=0; i<len; i++){
            var total = bonos[i] * pcpenalizacion
            pclimpieza.push(total)
        } 
          

        return pclimpieza;
    }

    pc_ltkgPreexpandido(percepcion_total_m3_base, densidad){
        let calc = new TableOfProportions(densidad);
        let extra_preexpandido;
        let premio_castigo_preexpandido = calc.ltkgPreexpandido ;

        premio_castigo_preexpandido ? extra_preexpandido = percepcion_total_m3_base * premio_castigo_preexpandido : extra_preexpandido = 0

        return extra_preexpandido;
    }



}