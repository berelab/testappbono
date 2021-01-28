'use strict'
import DirtyDays from './DirtyDays';
import Attendance from './Attendance';
import Production from './Production';
import BonusPenalties from './BonusPenalties';

class MainCalcs {
    constructor ( 
        dias,
        m3_cortados,
        colaboradores,
        asistencia_total,
        nameDay,
        equipo,
        base,
        extram3,
        dias_sucios,       
        factor_dias_laborados,
        message,
        city,
        amp,
        blocks_fuera_especificacion,
        densidad,
        indicador_combustible,
    ) {
        this.dias                   = dias;
        this.m3_cortados            = m3_cortados;
        this.colaboradores          = colaboradores;
        this.asistencia_total       = asistencia_total;
        this.nameDay                = nameDay;
        this.equipo                 = equipo;
        this.base                   = base;
        this.extram3                = extram3;
        this.dias_sucios            = dias_sucios;        
        this.factor_dias_laborados  = factor_dias_laborados;
        this.depto                  = message;
        this.city                   = city;
        this.amp                    = amp;
        this.blocks_fe              = blocks_fuera_especificacion;
        this.densidad               = densidad;
        this.id_combustible         = indicador_combustible;
    }

    // Getters
    get m3Persona () {
        return this.totalM3Persona(this.dias, this.asistencia_total);
    }
    get dailyProd(){
        return this.production(this.m3_cortados, this.colaboradores, this.nameDay);
    }
    get progress_bar() {
        return this.progress(this.m3_cortados, this.colaboradores, this.nameDay);
    }
    get totalAsistencia(){
        return this.asistencia(this. equipo, this.factor_dias_laborados);
    }
    get percepcionTotal(){
        return this.percepcion_total(this.depto, this.city);
    }
    get bonoTotal(){
        return this.bono_total(this.depto, this.equipo, this.dias);
    }

    // Methods

    totalM3Persona(dias, asistencia_total){
        let calc = new Production(this.m3_cortados, this.colaboradores, this.nameDay);
        let m3_persona;
        let m3_cortados_totales = calc.totalM3;
        if(this.depto == 'Electrolux' || this.depto == 'Choferes' ){
            m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total) : m3_persona = 0
        }else{
            m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total)*dias : m3_persona = 0
        }
        return m3_persona;
    }
    asistencia(equipo, factor_dias_laborados) {
        let calc = new Attendance(equipo, factor_dias_laborados);
        let asistencia_total = calc.asistencias;
        return asistencia_total;
    }
    production(m3_cortados, colaboradores, nameDay){
        let calc = new Production(m3_cortados, colaboradores, nameDay);
        let m3_persona = calc.dailyProduction;

        return m3_persona;
    }
    progress(m3_cortados, colaboradores, nameDay){
        let calc = new Production(m3_cortados, colaboradores, nameDay);
        let progres_bar = calc.progressBar;

        return progres_bar;
    }
    extra_vs_base(base0){
        let extra_vs_base = 0;
        let m3_persona = this.totalM3Persona(this.dias, this.asistencia_total);

        m3_persona > 0 ? extra_vs_base = (m3_persona - base0) : extra_vs_base = 0        
        return extra_vs_base;
    }
    perceptionTotM3(asistencia_total, $_extra_m3){
        let percepcion_total_m3_base;
        let extra_vs_base = this.extra_vs_base(this.base)

        asistencia_total != 0 ? percepcion_total_m3_base = extra_vs_base * $_extra_m3 : percepcion_total_m3_base = 0

        return percepcion_total_m3_base;
    }
    percepcion_total(depto, city){
        let dirtyDaysCalcs = new DirtyDays(this.dias_sucios);
        let percepcion_total_m3_base = this.perceptionTotM3(this.asistencia_total, this.extram3);
        let clacs = new BonusPenalties(this.amp, this.blocks_fe, this.densidad, this.id_combustible, percepcion_total_m3_base, depto, this.dias_sucios, this.city);
        let extra_amp;
        let extra_diasSucios;
        let percepcion_total;
        let premio_castigo_desperdicio;
        let premio_castigo_densidad;
        let premio_castigo_densidad_bobedilla;
        let premio_castigo_densidad_ins;
        let premio_castigo_combustible;

        if(depto == 'CEDI' || depto == 'Chofer Local'){
            extra_diasSucios = dirtyDaysCalcs.auditoriaDiasSucios;
        }else{
            extra_diasSucios = clacs.extraDiasSucios;
        }

        if(depto == 'Corte' || depto == 'Placa' || depto == 'Aligerante'){
            extra_amp = clacs.extraDesperdicio;
            percepcion_total = percepcion_total_m3_base + extra_amp + extra_diasSucios;
        }else if(depto == 'Moldeo' && city == 'La Paz'){
            premio_castigo_desperdicio = clacs.desperdicios;
            premio_castigo_densidad = clacs.densidades;
            premio_castigo_combustible = clacs.combustibles;
            percepcion_total = percepcion_total_m3_base + premio_castigo_desperdicio + extra_diasSucios + premio_castigo_densidad + premio_castigo_combustible;
        }else if(depto == 'Moldeo' && city == 'Juarez'){
            premio_castigo_desperdicio = clacs.desperdicios;
            premio_castigo_densidad_bobedilla = clacs.densidadBobedilla;
            premio_castigo_densidad_ins = clacs.densidadIns16;
            percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_desperdicio + premio_castigo_densidad_bobedilla + premio_castigo_densidad_ins;
        }else {
            percepcion_total = percepcion_total_m3_base + extra_diasSucios;
        }

        percepcion_total < 0 ? percepcion_total = "0" : percepcion_total;        

        return percepcion_total;
    }
    pago_total(depto, dias){
        let calc = new Attendance(this.equipo, this.factor_dias_laborados);
        let pago;
        let sumatoria_asistencia;
        let percepcion_total = this.percepcion_total(depto, this.city);
        let equivalecia_asistencia = calc.equivaleciaAsistencias;

        if(depto == 'CEDI' || depto == 'Chofer Local'){
            sumatoria_asistencia = calc.asistencias;
            pago = (percepcion_total/dias) * sumatoria_asistencia[0];
        }else{
            pago = (percepcion_total/dias) * equivalecia_asistencia;            
        }
        
        return pago;
    }
    penalizacion_falta_retardos(falta, retardo, pago){
        if(falta == 1){
            return (pago * .5)
        }else{
            if(falta>1){
                return pago;
            }else{
                if(retardo == 1){
                    return (pago * .2);
                }else{
                    if(retardo == 2){
                        return (pago * .4);
                    }else{
                        if(retardo >= 3){
                            return pago;
                        }else{
                            return 0;
                        }
                    }
                }
            }
        }
    }
    bono_total(depto, equipo, dias){
        let calc = new Attendance(equipo, this.factor_dias_laborados);
        let faltas = calc.faltas;
        let retardos = calc.retardos;
        let pago = this.pago_total(depto, dias);
        let penalizacion_falta_retardos = this.penalizacion_falta_retardos(faltas, retardos, pago);
        let bono_total;

        penalizacion_falta_retardos > 0 ? bono_total = (pago - penalizacion_falta_retardos) : bono_total = pago;

        return bono_total;
    }

  }
  
  module.exports = MainCalcs; 