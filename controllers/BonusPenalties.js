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
        city
    ){
        this.amp                        = amp;
        this.blocks_fe                  = blocks_fe;
        this.densidad                   = densidad;
        this.id_combustible             = id_combustible;
        this.percepcion_total_m3_base   = percepcion_total_m3_base;
        this.depto                      = departamento;
        this.dias_sucios                = dias_sucios;
        this.city                       = city;
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


    //Methods
    extra_desperdicio(percepcion_total_m3_base, city){
        let calc = new TableOfProportions(this.amp, this.blocks_fe, this.densidad, this.id_combustible);
        let extra_amp;
        let premio_castigo_amp;
        if(city == 'Juarez') {
            this.depto == 'Placa' || this.depto == 'Aligerante' ? premio_castigo_amp = calc.desperdicios3 : premio_castigo_amp = calc.desperdicios2;
        } 
        else{
            premio_castigo_amp = calc.desperdicios;
        }
        premio_castigo_amp ? extra_amp = percepcion_total_m3_base * premio_castigo_amp : extra_amp = 0

        return extra_amp;
    }
    extra_dias_sucios(depto, dias_sucios, percepcion_total_m3_base, city){
        let dirtyDaysCalcs = new DirtyDays(dias_sucios);
        let extra_diasSucios;
        let premio_castigo_diasSucios;

        if(depto == 'Almacén' || depto == 'Choferes') {
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol;
        }else if(depto == 'Moldeo' && city == 'Juarez'){
            premio_castigo_diasSucios = dirtyDaysCalcs.auditoriaSol
        }else if(depto == this._check_Department(depto)){
            premio_castigo_diasSucios =  dirtyDaysCalcs.auditoriaSol2;
        }else if (depto == 'Corte' && city == 'Juarez'){
            premio_castigo_diasSucios =  dirtyDaysCalcs.auditoriaSol2;
        }else if (depto == 'Electrolux'){
            premio_castigo_diasSucios = 0;
        }else{
            premio_castigo_diasSucios = dirtyDaysCalcs.diasSucios;
        }
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
        let p_pc_densidad = calc.densidades;
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
}