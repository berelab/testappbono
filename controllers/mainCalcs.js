'use strict'
import DirtyDays from './DirtyDays';
import Attendance from './Attendance';
import Production from './Production';
import BonusPenalties from './BonusPenalties';
import TableOfProportions from './TableOfProportions';
import calcsN from './calcsN';
import { city } from '../models/lapaz/lapaz';

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
        tiempo_extra,
        horas_por_turno,
        num_quejas_cliente,
        rechazo_interno,
        montos_recibidos_area, 
        participacion,
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
        pago_cargas_ip,

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
        this.tiempo_extra            = tiempo_extra;
        this.horas_por_turno         = horas_por_turno;
        this.num_quejas_cliente     = num_quejas_cliente;
        this.rechazo_interno        = rechazo_interno;
        this.montos_recibidos_area  = montos_recibidos_area;
        this.participacion          = participacion;
        this.aprove_perla_corte     = aprove_perla_corte;
        this.aprove_perla_moldeo    = aprove_perla_moldeo;
        this.rendimiento_agua          =  rendimiento_agua;
        this.rendimiento_combustible   = rendimiento_combustible;
        this.rendimiento_electricidad  = rendimiento_electricidad;
        this.faltas_uso_epp            = faltas_uso_epp;
        this.fugas_perla               = fugas_perla;
        this.fugas_vapor               = fugas_vapor;
        this.fugas_aceite              = fugas_aceite;
        this.fugas_aire                = fugas_aire;
        this.pago_cargas_ip            =pago_cargas_ip;
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
        return this.asistencia(this. equipo, this.factor_dias_laborados,this.city,this.dias, this.depto,this.horas_por_turno);
    }
    get percepcionTotal(){
        return this.percepcion_total(this.depto, this.city);
    }
    get bonoTotal(){
        return this.bono_total(this.depto, this.equipo, this.dias);
    }
    get bonoProductividad(){
        return this.perceptionTotM3(this.asistencia_total, this.extram3)
    }
    get pc_metas(){
        return this.premio_castigo_metas()
    }

    get pagoTotal(){
        return this.pago_total(this.depto, this.dias);
    }   
    get pagoPorTiempoExtra(){
        return this.pago_TiempoExtra(this.tiempo_extra, this.factor_dias_laborados,this.dias);
    }

    get pagoTotalSinPenalizacion(){
        return this.pago_TotalSinPenalizacion(this.depto);
    }

    get bonoTotalConPenalizacionPorColaborador(){
        return this.bono_TotalConPenalizacionPorColaborador(this.city, this.depto, this.dias);
    }
    
    get bonoTotalConPenalizacion(){
         return this.bono_TotalConPenalizacion(this.city, this.depto, this.dias, this.equipo)
     }

     get montoCalidadArea(){
        return this.monto_calidad_por_area(this.montos_recibidos_area, this.participacion);
    }

    get totalMontoCalidad(){
        return this.total_monto_calidad();
    }

    get totalBonoCalidad(){
        return this.total_bono_calidad(this.aprove_perla_corte, this.aprove_perla_moldeo, this.num_quejas_cliente);
    }

    get totalMantenimiento(){
        return this.total_mantenimiento(this.montos_recibidos_area, this.rendimiento_agua, this.rendimiento_combustible,this.rendimiento_electricidad, this.fugas_aire,this.fugas_perla , this.fugas_vapor, this.fugas_aceite ,this.faltas_uso_epp);
    }

    get  bonosPorNPC(){
        return this.bonos_Por_NPC(this.equipo);
    }

    get bonoTotalColaborador(){
        return this.bono_total_por_colaborador(this.equipo);
    }

    get totalViajeLocalM3(){
        return this.total_viaje_local_m3(this.equipo);
    }

    get totalViajeForaneo(){
        return this.total_viaje_foraneo(this.equipo);
    }

    get productividadLocal(){
        return this.productividad_local(this.equipo);
    }

    get productividadForaneo(){
        return this.productividad_foraneo(this.equipo);
    }

    get cuidadoUnidad(){
        return this.cuidado_unidad(this.equipo);
    }

    get bonoAPagar(){
        return this.bono_a_pagar(this.equipo);
    }

    get TotalCambioMoldes(){
        return this.total_cambio_moldes(this.m3_cortados, this.extram3);
    }

    get montoAPagar(){
        return this.monto_a_pagar(this.colaboradores, this.extram3, this.dias, this.depto, this.base, this.dias_sucios );
    }

    get montoTotal(){
        return this.monto_total(this.colaboradores, this.extram3, this.dias,  this.depto, this.base , this.dias_sucios );
    }

    get produccionPersona(){
        return this.produccion_persona(this.asistencia_total,this.dias, this.m3_cortados, );
    }

    get percepcionTotal2(){
        return this.percepcion_total_2(this.asistencia_total, this.dias, this.m3_cortados, this.base, this.extram3)
    }

    get percepcionTotal3(){
        return this.percepcion_total_3(this.extram3, this.base, this.dias_sucios);
    }
  
    // Methods

    totalM3Persona(dias, asistencia_total){
        let calc = new Production(this.m3_cortados, this.colaboradores, this.nameDay);
        let m3_persona;
        let m3_cortados_totales = calc.totalM3;
        if(this.city == 'Nogales' || this.city == 'Hermosillo' || this.city == 'Guadalajara' || this.city == 'Queretaro' || this.city == 'Monterrey' || this.city == 'Merida' || this.city=='Veracruz' || this.city=='Mexicali' || this.city=='Cancun'   || this.city=='Culiacan' || this.city=='Tijuana'){
            if((this.city=='Tijuana' && this.depto=='Bono TYG') || (this.city=='Culiacan' && (this.depto=='Almacen Const' || this.depto=='Almacen'))){
                m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total) : m3_persona = 0
            }else{
                m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total)*dias : m3_persona = 0
            }
           
            
        }else if(this.depto == 'Electrolux' || this.depto == 'Choferes'){
            m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total) : m3_persona = 0
            
        }else{
            m3_cortados_totales && asistencia_total != 0 ? m3_persona = (m3_cortados_totales / asistencia_total)*dias : m3_persona = 0
        }
      
        return m3_persona;
    }
    asistencia(equipo, factor_dias_laborados, city, dias,  depto, horas_por_turno) {
        let calc = new Attendance(equipo, factor_dias_laborados, city, dias , depto, horas_por_turno);
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
        percepcion_total_m3_base <0 ? percepcion_total_m3_base = 0 : percepcion_total_m3_base;

        return percepcion_total_m3_base;
    }
    premio_castigo_metas(){
        let total_m3_base = this.perceptionTotM3(this.asistencia_total, this.extram3);
        let total = this.percepcion_total(this.depto, this.city);

        return (total - total_m3_base);
    }
    percepcion_total(depto, city){
        let dirtyDaysCalcs = new DirtyDays(this.dias_sucios);
        let percepcion_total_m3_base = this.perceptionTotM3(this.asistencia_total, this.extram3);
        if(city=='Monterrey' && depto=='Herramental'){
            percepcion_total_m3_base = this.total_cambio_moldes(this.m3_cortados, this.extram3);
        }else if(city=='Monterrey' && depto=='PreExpansion'){
            let pc_a_pagar = this.m3_cortados;
            let len = pc_a_pagar.length;
            
            let total=0;
            for(var i=0; i<len; i++){
                total+=pc_a_pagar[i];
            }
            percepcion_total_m3_base = total;
        }
        let clacs = new BonusPenalties(this.amp, this.blocks_fe, this.densidad, this.id_combustible, percepcion_total_m3_base, depto, this.dias_sucios, this.city, this.num_quejas_cliente );
        let extra_amp;
        let extra_diasSucios;
        let percepcion_total;
        let premio_castigo_desperdicio;
        let premio_castigo_densidad;
        let premio_castigo_densidad_bobedilla;
        let premio_castigo_densidad_ins;
        let premio_castigo_combustible;
        let premio_castigo_ordenLimpieza;
        let premio_castigo_quejas;
        let premio_castigo_blocksfe;
        let premio_castigo_boletaspnc;
        let premio_castigo_usoequiseg;
        let premio_castigo_preexpandido;
        let premio_castigo_rechazo;

        /*if(depto == 'CEDI' || depto == 'Chofer Local' || depto =='Choferes'  || depto== 'Almacen' ){
            extra_diasSucios = dirtyDaysCalcs.auditoriaDiasSucios;
        }else{
            extra_diasSucios = clacs.extraDiasSucios;
        }*/

        extra_diasSucios = clacs.extraDiasSucios; //estandarizado

        if(depto == 'Corte' || depto == 'Placa' || depto == 'Aligerante'){
            extra_amp = clacs.extraDesperdicio;
            if( city =='Guadalajara'){ 
                premio_castigo_quejas=clacs.quejas;
                premio_castigo_boletaspnc=clacs.pcblocksfe;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios+ premio_castigo_boletaspnc + extra_amp + premio_castigo_quejas;
            }else if( city =='Queretaro'){
                premio_castigo_quejas=clacs.quejas;
                premio_castigo_blocksfe=clacs.pcblocksfe
                percepcion_total =percepcion_total_m3_base + extra_diasSucios + extra_amp + premio_castigo_quejas + premio_castigo_blocksfe;
            }else if( city =='Merida'){
                premio_castigo_quejas=clacs.quejas;
                percepcion_total =percepcion_total_m3_base + extra_diasSucios +premio_castigo_quejas +extra_amp;
            }else if(city =='Veracruz' || city =='Tijuana'){
                percepcion_total =percepcion_total_m3_base + extra_diasSucios +extra_amp;
            }else if(city =='Cancun'){
                premio_castigo_quejas=clacs.quejas;
                percepcion_total =percepcion_total_m3_base + extra_diasSucios +extra_amp+ premio_castigo_quejas;
            }else if(city=='Culiacan'){
                premio_castigo_quejas=clacs.quejas;
                premio_castigo_blocksfe=clacs.pcblocksfe;
                percepcion_total =percepcion_total_m3_base + extra_diasSucios + extra_amp + premio_castigo_quejas + premio_castigo_blocksfe;
            }else{
               percepcion_total = percepcion_total_m3_base + extra_amp + extra_diasSucios;
            }
        }else if((depto == 'Moldeo' || depto == 'Almacén') && city == 'La Paz'){
            if(depto== 'Moldeo'){
            premio_castigo_desperdicio = clacs.desperdicios;
            premio_castigo_densidad = clacs.densidades;
            premio_castigo_combustible = clacs.combustibles;
            percepcion_total = percepcion_total_m3_base + premio_castigo_desperdicio + extra_diasSucios + premio_castigo_densidad + premio_castigo_combustible;
            }else{
                percepcion_total =  percepcion_total_m3_base  + extra_diasSucios //+ premio_castigo_difinvt
            }
        }else if(depto == 'Moldeo' && city == 'Juarez'){
            premio_castigo_desperdicio = clacs.desperdicios;
            premio_castigo_densidad_bobedilla = clacs.densidadBobedilla;
            premio_castigo_densidad_ins = clacs.densidadIns16;
            percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_desperdicio + premio_castigo_densidad_bobedilla + premio_castigo_densidad_ins;
         }else if(depto == 'Moldeo' && city == 'Nogales'){
            premio_castigo_desperdicio = clacs.desperdicios2;
            premio_castigo_ordenLimpieza = clacs.ordenLimpieza;
            premio_castigo_quejas = clacs.quejas;
            percepcion_total =  percepcion_total_m3_base  + premio_castigo_desperdicio + premio_castigo_ordenLimpieza + premio_castigo_quejas;
        }else if((depto == 'Almacen' || depto =='Choferes' || depto =='Bloquera' )  && city== 'Nogales'){
           if(depto == 'Bloquera'){
            extra_amp = clacs.extraDesperdicio;
            percepcion_total =  percepcion_total_m3_base + extra_diasSucios + extra_amp;
          }else{
            percepcion_total =  percepcion_total_m3_base + extra_diasSucios;
          }
        }else if((depto == 'Bloquera' || depto =='Steelfoam' || depto =='Almacen' || depto =='Moldeo')&& city== 'Hermosillo'){
            if(depto=='Bloquera' ){
                extra_amp = clacs.aprovechamientoMP;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + extra_amp;
            }else if(depto == 'Steelfoam'){
                premio_castigo_desperdicio = clacs.desperdicios2;
                percepcion_total = percepcion_total_m3_base + premio_castigo_desperdicio +extra_diasSucios ;
            }else if(depto =='Almacen'){
                premio_castigo_quejas  = clacs.quejas;
                percepcion_total = percepcion_total_m3_base +extra_diasSucios  + premio_castigo_quejas;
            }else if(depto == 'Moldeo'){
                premio_castigo_desperdicio= clacs.aprovechamientoMP;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios+ premio_castigo_desperdicio;
            } 
        }else if((depto =='PreexpYMoldeo' || depto =='Almacen' || depto =='Recupera' || depto=='Choferes'  || depto=='Molienda de MR' )  &&  this.city =='Guadalajara'){
             if(depto == 'PreexpYMoldeo'){
                premio_castigo_desperdicio=clacs.aprovechamientoMP;
                premio_castigo_blocksfe=clacs.pcblocksfe;
                percepcion_total = percepcion_total_m3_base + premio_castigo_desperdicio + extra_diasSucios +premio_castigo_blocksfe;
             }else if(depto =='Almacen'){
                premio_castigo_usoequiseg=clacs.pcblocksfe;
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base +premio_castigo_usoequiseg +premio_castigo_quejas+  extra_diasSucios;
             }else if(depto =='Recupera'){
                percepcion_total = percepcion_total_m3_base;
             }else if(depto =='Choferes'){
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_quejas;
                //this.dias_sucios ==0 ? percepcion_total+=100:percepcion_total-=100;
             }else if(depto=='Molienda de MR'){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios;
             }

        }else if((depto =='PreexpYMoldeo' || depto=='Hielera' || depto =='Almacen' || depto=='Choferes'  ) &&  city =='Queretaro'){
            if(depto == 'PreexpYMoldeo'){
                premio_castigo_desperdicio=clacs.aprovechamientoMP;
                premio_castigo_blocksfe=clacs.pcblocksfe;
                percepcion_total = percepcion_total_m3_base + premio_castigo_desperdicio + extra_diasSucios + premio_castigo_blocksfe;
             }else if(depto=='Hielera'){
               premio_castigo_blocksfe=clacs.pcblocksfe;
               percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_blocksfe;
             }else if(depto =='Almacen'){
                premio_castigo_quejas =clacs.quejas;
                premio_castigo_usoequiseg=clacs.pcblocksfe;
                percepcion_total = percepcion_total_m3_base +extra_diasSucios + premio_castigo_quejas + premio_castigo_usoequiseg;
             }else if(depto =='Choferes'){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios;
             }
        }else if((depto == 'PreexpYMoldeo' || depto=='Almacen' ) && city =='Villahermosa'){
            if(depto=='PreexpYMoldeo'){
                extra_amp = clacs.extraDesperdicio;
                premio_castigo_blocksfe=clacs.pcblocksfe
                premio_castigo_preexpandido = clacs.pcltkgPreexpandido
                percepcion_total = percepcion_total_m3_base +extra_diasSucios+premio_castigo_blocksfe+ extra_amp +premio_castigo_preexpandido;
        
            }else if(depto=='Almacen'){
                percepcion_total = percepcion_total_m3_base +extra_diasSucios;   
            }
        }else if((depto == 'PreexpYMoldeo' || depto=='Almacen'  || depto=='CorteConst'  || depto=='CorteMaquila' || depto=='Vitro') && city =='CDMX'){
           if(depto=='Almacen'){
            premio_castigo_blocksfe=clacs.pcblocksfe
            percepcion_total = percepcion_total_m3_base +extra_diasSucios + premio_castigo_blocksfe;
           }else if(depto == 'PreexpYMoldeo'){
             premio_castigo_quejas =clacs.quejas;
             extra_amp = clacs.extraDesperdicio;
             percepcion_total = percepcion_total_m3_base +extra_diasSucios - extra_amp;
           
           }else if(depto == 'CorteConst' || depto=='CorteMaquila'){
            extra_amp = clacs.extraDesperdicio;
            premio_castigo_quejas =clacs.quejas;
            percepcion_total = percepcion_total_m3_base +extra_diasSucios + extra_amp + premio_castigo_quejas;
          }else if(depto == 'Vitro'){
            premio_castigo_quejas =clacs.quejas;
            percepcion_total = percepcion_total_m3_base +extra_diasSucios  + premio_castigo_quejas;
          }
         }else if((depto == 'EMCO' || depto == 'Choferes Locales' || depto == 'Choferes CEDI' || depto=='Molienda de MR' || depto=='Almacen CEDI' || depto=='Almacen'  || depto=='Moldeo' || depto=='Corte NIP' || depto=='Corte L' || depto=='Bloquera' || depto=='Herramental' || depto =='PreExpansion') && city =='Monterrey'){
            if(depto =='Choferes Locales' ||  depto == 'Choferes CEDI'){
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios   + premio_castigo_quejas;
                // this.dias_sucios ==0 ? percepcion_total+=100:percepcion_total-=100;
             }else if(depto=='Molienda de MR'){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios;
               
             }else if( depto=='Almacen CEDI'){
                premio_castigo_ordenLimpieza = dirtyDaysCalcs.auditoriaSol6;
                percepcion_total = percepcion_total_m3_base +premio_castigo_ordenLimpieza
            }else if( depto=='Almacen' || depto=='Moldeo'){
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base +extra_diasSucios +premio_castigo_quejas;
               
             }else if(depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L'){
                extra_amp = clacs.extraDesperdicio;
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + extra_amp + premio_castigo_quejas;
               
            }else if(depto=='Bloquera'){
                premio_castigo_blocksfe =clacs.pcblocksfe;
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + premio_castigo_blocksfe +extra_amp + extra_diasSucios;
               
            }else if(depto=='Herramental'){
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_amp + extra_diasSucios;
            }else if(depto =='PreExpansion'){
                let calc = new TableOfProportions(this.amp, null,null,null,null,this.blocks_fe);
                let pc_amp =  calc.aprovechamientoMP7;
                let pc_q  = calc.quejas2;
                extra_amp = (percepcion_total_m3_base + extra_diasSucios)*pc_amp;
                premio_castigo_quejas = (percepcion_total_m3_base + extra_diasSucios + extra_amp)*pc_q;
                percepcion_total = percepcion_total_m3_base + extra_amp + extra_diasSucios + premio_castigo_quejas;
            }
         }else if((depto == 'Almacen' || depto == 'Choferes' || depto=='Moldeo' || depto=='Bloquera' || depto=='Rotulado') && city =='Merida'){
             if(depto == 'Almacen' || depto == 'Choferes'){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios
             }else if(depto =='Moldeo'){
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base + premio_castigo_quejas +extra_diasSucios
             }else if( depto=='Bloquera'){
                extra_amp = clacs.extraDesperdicio;
                premio_castigo_blocksfe=clacs.pcblocksfe
                percepcion_total = percepcion_total_m3_base+ premio_castigo_blocksfe +extra_diasSucios + extra_amp
             }else if(depto=='Rotulado'){
                premio_castigo_blocksfe=clacs.pcblocksfe
                percepcion_total = percepcion_total_m3_base +extra_diasSucios + premio_castigo_blocksfe
             }
         }else if(( depto=='Bloquera' || depto =='EMCO' || depto =='Moldeo' || depto=='Almacen' || depto=='Almacen CEDI' || depto =='Steelfoam' || depto=='Choferes' || depto=='Choferes CEDI' || depto=='Construpanel') && city =='Veracruz'){
            if( depto=='Bloquera'){
                extra_amp = clacs.extraDesperdicio;
                premio_castigo_blocksfe=clacs.pcblocksfe
                percepcion_total = percepcion_total_m3_base +extra_diasSucios  + extra_amp +premio_castigo_blocksfe
            }else if(depto=='EMCO' || depto =='Moldeo'){
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base +extra_diasSucios  + extra_amp
            }else if(depto =='Steelfoam'){
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base +extra_diasSucios  + extra_amp
            }else if(depto=='Almacen' || depto=='Choferes CEDI'){
                premio_castigo_quejas =clacs.quejas;
                percepcion_total = percepcion_total_m3_base + premio_castigo_quejas +extra_diasSucios
            }else if( depto=='Almacen CEDI'){
                let limpieza_unidades = this.blocks_fe;
                limpieza_unidades =='Si' || limpieza_unidades =='SI' ? premio_castigo_ordenLimpieza = 100:  premio_castigo_ordenLimpieza = -100
                percepcion_total = percepcion_total_m3_base +  premio_castigo_ordenLimpieza
            }else if(depto=='Choferes'){
                percepcion_total = percepcion_total_m3_base  +extra_diasSucios
            }else if(depto=='Construpanel'){
                premio_castigo_rechazo =clacs.pcblocksfe
                extra_amp = clacs.extraDesperdicio;
                premio_castigo_usoequiseg = clacs.pc_equipoProtecc;
                percepcion_total = percepcion_total_m3_base +premio_castigo_usoequiseg +extra_diasSucios  +premio_castigo_rechazo +extra_amp
            }
         }else if( (depto=='Choferes' || depto=='Rotulado')&& city=='Mexicali'){
             if(depto=='Choferes'){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios
             }else if(depto=='Rotulado'){
                premio_castigo_blocksfe =clacs.pcblocksfe
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_blocksfe +extra_amp
             }
           
         }else if((depto == 'PreexpYMoldeo' || depto == 'Almacen' || depto=='Almacen Playa') && city=='Cancun'){
            if(depto=='PreexpYMoldeo'){
                premio_castigo_blocksfe =clacs.pcblocksfe
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_blocksfe +extra_amp;
            }else if(depto == 'Almacen' || depto=='Almacen Playa'){
                premio_castigo_blocksfe =clacs.pcblocksfe
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + premio_castigo_blocksfe
            }
         }else if((depto=='Silo Molino' || depto=='Almacen' || depto == 'PreexpYMoldeo' || depto=='Choferes Locales' || depto=='Bono TYG')&&city =='Tijuana'){
             if(depto=='Silo Molino' || depto=='Almacen' ){
                percepcion_total = percepcion_total_m3_base + extra_diasSucios;
             }else if(depto == 'PreexpYMoldeo'){
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios + extra_amp
             }else if(depto=='Choferes Locales'){
                // this.dias_sucios ==0? extra_diasSucios = 100: extra_diasSucios= -100
                 percepcion_total = percepcion_total_m3_base + extra_diasSucios
             }else if(depto=='Bono TYG'){
                premio_castigo_blocksfe =clacs.pcblocksfe;
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios +extra_amp +premio_castigo_blocksfe
             }
         }else if(( depto == 'PreexpYMoldeo'  || depto=='Molienda'   || depto=='Construpanel'  || depto=='Choferes Locales'  || depto=='Almacen' || depto=='Almacen Const') &&city=='Culiacan'){
            if( depto == 'PreexpYMoldeo'){
                premio_castigo_blocksfe =clacs.pcblocksfe;
                extra_amp = clacs.extraDesperdicio;
                percepcion_total = percepcion_total_m3_base + extra_diasSucios +extra_amp +premio_castigo_blocksfe
            }else if(depto=='Construpanel' || depto=='Almacen Const' || depto=='Almacen'){
                premio_castigo_quejas=clacs.quejas;
                premio_castigo_blocksfe=clacs.pcblocksfe;
                percepcion_total =percepcion_total_m3_base + extra_diasSucios  + premio_castigo_quejas + premio_castigo_blocksfe;
            }else if(depto=='Choferes Locales'){
                premio_castigo_quejas=clacs.quejas;
                percepcion_total =percepcion_total_m3_base  + extra_diasSucios  + premio_castigo_quejas;
            }else if(depto=='Molienda'){
                premio_castigo_blocksfe=clacs.pcblocksfe;
                percepcion_total =percepcion_total_m3_base  +   premio_castigo_blocksfe
            }
         }else { 
            percepcion_total = percepcion_total_m3_base + extra_diasSucios;    
        }

        percepcion_total < 0 ? percepcion_total = "0" : percepcion_total; 
                    
        return percepcion_total;
    }

    /**
     * Retorna el pago total antes de realizar las penalizaciones por faltas/retardos.
     */
    pago_total(depto, dias){
        let calc = new Attendance(this.equipo, this.factor_dias_laborados, this.city,this.dias,  this.depto, this.horas_por_turno);
        let sumatoria_asistencia = calc.asistencias;
        let equivalecia_asistencia = calc.equivaleciaAsistencias;
        let calcN = new calcsN(sumatoria_asistencia, this.factor_dias_laborados, this.equipo, this.dias, this.tiempo_extra,this.horas_por_turno, this.extram3,this.m3_cortados,this.base,this.amp,this.dias_sucios,this.num_quejas_cliente,this.rechazo_interno,this.city, this.depto,this.colaboradores);
      

        if(this.city == 'Nogales' && depto == 'Corte' ){
            if(depto == 'Corte'){
               
                var pago =[];
                let percepcion_total = calcN.percepcionTotalPorSemana;

                for(var i =0; i <equivalecia_asistencia.length; i++){
                    var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                    pago.push(total);
                }
            }
        }else if( this.city == 'Nogales' || this.city == 'Hermosillo' || this.city == 'Guadalajara' || this.city =='Queretaro'  || this.city =='Villahermosa' || this.city =='CDMX' || this.city =='Monterrey' || this.city =='Merida' || this.city=='Veracruz' || this.city=='Mexicali' || this.city=='Cancun' || this.city=='Culiacan' || this.city=='Tijuana'){
            if(depto=='Silo Molino'|| depto=='Bono TYG' || depto=='Molienda'  || depto == 'Bloquera' || depto == 'Moldeo' || depto =='Almacen' || depto=='Almacen CEDI' || depto=='Almacen Const' || depto=='Almacen Playa' || depto =='Choferes' || depto =='Choferes Locales' ||  depto == 'Choferes CEDI' || depto =='Corte' || depto =='Steelfoam' || depto =='PreexpYMoldeo' || depto =='Recupera' || depto=='Molienda de MR' || depto=='Hielera' || depto=='CorteConst' || depto=='CorteMaquila' || depto == 'Vitro' || depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Herramental' || depto=='Construpanel'){
                var pago =[];
              
                let percepcion_total = this.percepcion_total(depto, this.city);
                
                if(this.city=='Queretaro' && depto=='Almacen'){
                    //let pagoxAsistCargasIP = this.pago_cargas_ip;
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i])//(percepcion_total/dias*(equivalecia_asistencia[i]))+(pagoxAsistCargasIP*(equivalecia_asistencia[i]));
                        pago.push(total);
                    }
                }else{
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        pago.push(total);
                    }
                }
               
               
            }else if(depto =='PreExpansion'){
                var pago=[];
                if(this.city =='Monterrey'){
                    let percepcion_total = this.percepcion_total(depto, this.city);
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        pago.push(total);
                    }
                }else{
                    let total_bono_calidad = this.total_bono_calidad(this.aprove_perla_corte,this.aprove_perla_moldeo, this.num_quejas_cliente);
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = total_bono_calidad/dias*equivalecia_asistencia[i];
                        pago.push(total);
                    }
                }
            }else if(depto == 'Mantenimiento'){
                var pago=[];
                    let total_bono_calidad = this.total_mantenimiento(this.montos_recibidos_area, this.rendimiento_agua, this.rendimiento_combustible, this.rendimiento_electricidad, this.fugas_aire,this.fugas_perla , this.fugas_vapor, this.fugas_aceite , this.faltas_uso_epp);
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = total_bono_calidad/dias*equivalecia_asistencia[i];
                        pago.push(total);
                 }
            }else if(depto=='Mantenimiento Edificios'){
                var pago =[];
              
                let percepcion_total = this.percepcion_total_3(this.extram3, this.base, this.dias_sucios);
                
              
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        pago.push(total);
                    }
                
            }else if( depto == 'Insulpanel'){
                var pago=[];
                let total_bono_insulpanel = this.bono_total_por_colaborador(this.equipo)
                
                for(var i =0; i <equivalecia_asistencia.length; i++){
                    var total = total_bono_insulpanel[i]/dias*equivalecia_asistencia[i];
                    pago.push(total);
                 }

            }else if(depto=='Rotulado'){
               
                var pago=[];
                let percepcion_total = this.percepcion_total(depto, this.city);
                let equipo = this.equipo;

                if(this.city=='Mexicali'){
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        pago.push(total);
                    }
                }else{
                    for(var i=0; i<equipo.length;i++){
                        let rotulador = equipo[i].rotulador;
                        let total =0;
                        if(rotulador == 'NO' ||  rotulador == 'No'){
                            total = (percepcion_total/dias*(equivalecia_asistencia[i]))*.5;
        
                        }else{
                            total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        }
                       
                        pago.push(total);
                    }
                }
            }else if(depto=='RotuladoT1'){
               var pago =[];
               let percepcion_total = calcN.percepcionTotalPorDia;
               let equipo = this.equipo;
               for(var i=0; i<equipo.length; i++){
                   let total =0;
                   if(equipo[i].asistencia.lunes >0){
                       total += percepcion_total[0];
                   }
                   if(equipo[i].asistencia.martes >0){
                    total += percepcion_total[1];
                     }
                    if(equipo[i].asistencia.miercoles >0){
                    total += percepcion_total[2];
                        }
                    if(equipo[i].asistencia.jueves >0){
                    total += percepcion_total[3];
                        }
                    if(equipo[i].asistencia.viernes >0){
                    total += percepcion_total[4];
                        }
                    if(equipo[i].asistencia.sabado >0){
                    total += percepcion_total[5];
                        }
                   pago.push(total);
               }
              
            }else if(depto=='Rotulado Hielera 1' || depto=='Rotulado Hielera 2' || depto=='Rotulado Hielera 3'){
                var pago=[];
                let ptpd = calcN.percepcionTotalPorDia;
                let ptpdi= calcN.percepcionTotalPorDiaIndividual;
                let equipo = this.equipo;

                for(var i=0; i<equipo.length;i++){
                    let rotulador = equipo[i].rotulador;
                    let total =0;
                    if(rotulador == 'NO'){
                        total = (equipo[i].asistencia.lunes *ptpdi[0]) +(equipo[i].asistencia.martes *ptpdi[1]) +(equipo[i].asistencia.miercoles *ptpdi[2]) +(equipo[i].asistencia.jueves *ptpdi[3]) +(equipo[i].asistencia.viernes *ptpdi[4]) +(equipo[i].asistencia.sabado *ptpdi[5]) +(equipo[i].asistencia.domingo *ptpdi[6]);
    
                    }else{
                        total = (equipo[i].asistencia.lunes * ptpd[0])+(equipo[i].asistencia.martes *ptpd[1]) +(equipo[i].asistencia.miercoles *ptpd[2]) +(equipo[i].asistencia.jueves *ptpd[3]) +(equipo[i].asistencia.viernes *ptpd[4]) +(equipo[i].asistencia.sabado *ptpd[5]) +(equipo[i].asistencia.domingo *ptpd[6]);
                    }
                   
                    pago.push(total);
                }

            }else if(depto=='Empaque Perla'){
                var pago=[]
            
                let percepcion_total = this.percepcion_total_2(this.asistencia_total,dias, this.m3_cortados, this.base, this.extram3);
                
                for(var i =0; i <equivalecia_asistencia.length; i++){
                    var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                    pago.push(total);
                }
                
            }
        
        }else if(this.city == 'La Paz' || this.city == 'Juarez'){
            if(depto == 'Mantenimiento'  || depto == 'Placa' || depto == 'Molino' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Corte' ||  depto =='Commscope' || depto=='AOS Mith' || depto=='Choferes' || depto=='Aligerante' || depto=='Corte' || depto=='Almacén' || depto=='CEDI' || depto=='Chofer Local' || depto=='Moldeo'){
                var pago=[];
              

                 /* if(depto=='CEDI' || depto =='Chofer Local'){
                      let percepcion_total = this.percepcion_total(depto, this.city);
                    for(var i =0; i <sumatoria_asistencia.length; i++){
                        var total = percepcion_total/dias*(sumatoria_asistencia[i]);
                        pago.push(total);
                    }
                }else */
                if(depto == 'Mantenimiento'){
                    var pago=[];
                        let total_bono_calidad = this.total_mantenimiento(this.montos_recibidos_area, this.rendimiento_agua, this.rendimiento_combustible, this.rendimiento_electricidad, this.fugas_aire,this.fugas_perla , this.fugas_vapor, this.fugas_aceite , this.faltas_uso_epp);
                        for(var i =0; i <equivalecia_asistencia.length; i++){
                            var total = total_bono_calidad/dias*equivalecia_asistencia[i];
                            pago.push(total);
                       }
                }else{
                    let percepcion_total = this.percepcion_total(depto, this.city);
                    for(var i =0; i <equivalecia_asistencia.length; i++){
                        var total = percepcion_total/dias*(equivalecia_asistencia[i]);
                        pago.push(total);
                    }
                }  
            }
        }else{

            var pago;
            let percepcion_total = this.percepcion_total(depto, this.city);
        
            if(depto == 'CEDI' || depto == 'Chofer Local' || depto== 'Almacen'){   
                pago = (percepcion_total/dias) * sumatoria_asistencia[0]; 
            }else{
                pago = (percepcion_total/dias) * equivalecia_asistencia;            
            }
        }
       
        
        return pago;
    }

     
    pago_TiempoExtra(tiempo_extra, factor_dias_laborados, dias){
        let calc = new Attendance(equipo, this.factor_dias_laborados, this.city, dias, this.depto, this.horas_por_turno);
        let totalTiempoExtra;
        let equivalenteTiempoExtra; 
        let pago;
        
        totalTiempoExtra = tiempo_extra.lunes +tiempo_extra.martes+tiempo_extra.miercoles+tiempo_extra.jueves+tiempo_extra.viernes+tiempo_extra.sabado;

        equivalenteTiempoExtra = totalTiempoExtra * factor_dias_laborados;

        let sumatoria_asistencia = calc.asistencias;
        let calcN = new calcsN(sumatoria_asistencia, this.factor_dias_laborados, this.equipo, this.dias, this.tiempo_extra,this.horas_por_turno, this.extram3,this.m3_cortados,this.base,this.amp,this.dias_sucios,this.num_quejas_cliente,this.rechazo_interno);
        let percepcion_total = calcN.percepcionTotalPorSemana;

        pago = percepcion_total/dias*(equivalenteTiempoExtra);


        return pago;
    }

    /**
     * Retorna la sumatoria del pago total antes de las penalizaciones por faltas|retardos a los pagos de  los colaboradores. 
     * 
     */
    pago_TotalSinPenalizacion(depto){
        let sumatoriaPagoColaboradores =0;
        let pagoPorColaborador= this.pago_total(this.depto, this.dias);
        let pagoTotal =[];


        if( depto=='Mantenimiento Edificios' || depto=='Silo Molino' || depto=='Bono TYG'|| depto == 'Placa' || depto=='Molienda'  || depto == 'Molino' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Commscope' || depto=='AOS Mith' || depto=='Aligerante' || depto=='CEDI'  || depto=='Chofer Local' ||  depto =='PreExpansion' || depto == 'Mantenimiento' || depto == 'Bloquera' || depto == 'Moldeo' || depto=='Almacén'  || depto =='Almacen' || depto=='Almacen Const'  || depto=='Almacen CEDI' || depto=='Almacen Playa' || depto =='Choferes'   || depto =='Choferes Locales'  ||  depto == 'Choferes CEDI' || depto =='Corte' || depto =='Steelfoam' || depto == 'Insulpanel' || depto == 'RotuladoT1' || depto =='PreexpYMoldeo' || depto =='Recupera' || depto=='Molienda de MR' || depto=='Hielera' || depto=='CorteConst' || depto=='CorteMaquila' || depto == 'Vitro' || depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Herramental'|| depto=='Rotulado Hielera 1' || depto=='Rotulado Hielera 2' || depto=='Rotulado Hielera 3' || depto=='Rotulado' || depto=='Construpanel' || depto=='Empaque Perla'){
            for(var i=0; i<pagoPorColaborador.length; i++){
                sumatoriaPagoColaboradores = sumatoriaPagoColaboradores + pagoPorColaborador[i];
            }
            pagoTotal = sumatoriaPagoColaboradores;

        }else{ //depto corte
           // let pagoTiempoExtra = this.pago_TiempoExtra(this.tiempo_extra,this.factor_dias_laborados, this.dias);

            for(var i=0; i<pagoPorColaborador.length; i++){
                sumatoriaPagoColaboradores = sumatoriaPagoColaboradores + pagoPorColaborador[i];
            }
    
            pagoTotal =  sumatoriaPagoColaboradores //+ pagoTiempoExtra ;
        }

    
        return pagoTotal;
    }

    
    penalizacion_falta_retardos(falta, retardo, pago, depto){
        if(falta == 1){
            if((this.depto == 'Insulpanel'  || this.depto == 'Corte L'  ) && (this.city =='Guadalajara' || this.city =='Queretaro' || this.city =='Monterrey')){
                return pago;
            }else{
                return (pago * .5)
            }
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
                       if(this.depto == 'Insulpanel'){
                        if(retardo == 3){
                            return (pago*.6)
                        }else if(retardo==4){
                            return (pago*.8)
                        }else{
                            return 0;
                        }
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
    }
    bono_total(depto, equipo, dias){
        let calc = new Attendance(equipo, this.factor_dias_laborados, this.city, dias, this.depto, this.horas_por_turno);
        let faltas = calc.faltas;
        let retardos = calc.retardos;
        let pago = this.pago_total(depto, dias);
        let penalizacion_falta_retardos = this.penalizacion_falta_retardos(faltas, retardos, pago);
        let bono_total;

        penalizacion_falta_retardos > 0 ? bono_total = (pago - penalizacion_falta_retardos) : bono_total = pago;

        return bono_total;
    }


    /**
     * retorna un arreglo de cada uno de los bonos de los colaboradores conla penalizacion por retardos
     */
    bono_TotalConPenalizacionPorColaborador(city,depto, dias){
        let bonototal =[];
        let calc = new Attendance(this.equipo, this.factor_dias_laborados, city, dias, depto, this.horas_por_turno);
        let faltas = calc.faltas;
        let retardos = calc.retardos;
        let pago = this.pago_total(depto,dias);
        let penalizacion_falta_retardos;

        if( depto=='Mantenimiento Edificios' || depto=='Silo Molino'|| depto=='Bono TYG' || depto=='Molienda'  || depto == 'Placa' || depto == 'Molino' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Commscope' || depto=='AOS Mith' || depto=='Aligerante' || depto=='CEDI' || depto=='Chofer Local' || depto=='PreExpansion' || depto == 'Mantenimiento' || depto == 'Bloquera' || depto == 'Moldeo' || depto=='Almacén'  || depto =='Almacen'  || depto=='Almacen Const'  || depto=='Almacen CEDI' || depto=='Almacen Playa' || depto =='Choferes'  || depto =='Choferes Locales' ||  depto == 'Choferes CEDI' || depto =='Corte' || depto =='Steelfoam'  || depto == 'Insulpanel'  || depto == 'RotuladoT1' || depto =='PreexpYMoldeo' || depto =='Recupera' || depto=='Molienda de MR' || depto=='Hielera' || depto=='CorteConst' || depto=='CorteMaquila' || depto == 'Vitro' || depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Herramental' || depto=='Rotulado Hielera 1' || depto=='Rotulado Hielera 2' || depto=='Rotulado Hielera 3' || depto=='Rotulado' || depto=='Construpanel'  || depto=='Empaque Perla'){
            for(var i=0; i<pago.length; i++){
                penalizacion_falta_retardos = this.penalizacion_falta_retardos(faltas[i], retardos[i], pago[i]);
                if(penalizacion_falta_retardos >0){
                    let total = (pago[i] - penalizacion_falta_retardos);
                    bonototal.push(total);
                }else{
                    bonototal.push(pago[i]);
                }
            }
        }
        
        return bonototal;
    }

    /*
    * Devuelve el total de la sumatoria  de los bonos
    */
    bono_TotalConPenalizacion(city,depto, dias, equipo){
        let sumatoriaBonoColaboradores =0;
        let bonoPorColaborador;
        if(depto=='Trafico' && city=='Villahermosa'){
             bonoPorColaborador= this.bono_a_pagar(equipo);
        }else{
             bonoPorColaborador= this.bono_TotalConPenalizacionPorColaborador(city,depto,dias);
        }
      
        
        let pagoTotal;

        if(depto=='Mantenimiento Edificios' || depto=='Silo Molino'|| depto=='Bono TYG' || depto=='Molienda'  || depto == 'Placa' || depto == 'Molino' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Commscope' || depto=='AOS Mith' || depto=='Aligerante' || depto=='CEDI' || depto=='Chofer Local' || depto=='PreExpansion' || depto == 'Mantenimiento' || depto == 'Bloquera' || depto == 'Moldeo' || depto=='Almacén'  || depto =='Almacen' || depto=='Almacen Const'  || depto=='Almacen Playa' || depto=='Almacen CEDI' || depto =='Choferes'  || depto =='Choferes Locales'  ||  depto == 'Choferes CEDI' || depto =='Corte' || depto =='Steelfoam'  || depto == 'Insulpanel'  || depto == 'RotuladoT1' || depto =='PreexpYMoldeo' || depto =='Recupera' || depto=='Molienda de MR' || depto=='Hielera' || depto=='CorteConst' || depto=='CorteMaquila' || depto == 'Vitro' || depto == 'EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Herramental' || depto=='Rotulado Hielera 1' || depto=='Rotulado Hielera 2' || depto=='Rotulado Hielera 3' || depto=='Rotulado' || depto=='Construpanel' || depto=='Empaque Perla'){
            for(var i=0; i<bonoPorColaborador.length; i++){
                sumatoriaBonoColaboradores = sumatoriaBonoColaboradores + bonoPorColaborador[i];
            }

            pagoTotal = sumatoriaBonoColaboradores;
         }else if(depto=='Trafico'){
            for(var i=0; i<bonoPorColaborador.length; i++){
                sumatoriaBonoColaboradores = sumatoriaBonoColaboradores + bonoPorColaborador[i];
            }
            pagoTotal = sumatoriaBonoColaboradores;
         }else{
             pagoTotal = 0;
         }

        return pagoTotal;
    }


    /**   PREEXPANSION  */

    monto_calidad_por_area(montos_recibidos_area, participacion){
        let montoArea = [];
        let len = montos_recibidos_area.length;

        for(var i=0; i<len; i++){
            let total =0;

            let monto = montos_recibidos_area[i];
            let part = participacion[i];

            if(isNaN(monto) || monto == null || monto == ''){
                monto =0;
            }

            if(isNaN(part) || part == null || part == ''){
                part =0;
            }
            total = monto * part;
            montoArea.push(total);
        }
        

        return montoArea;
    }
    
    total_monto_calidad(){
        let total =0;
        let montoCalidadArea = this.monto_calidad_por_area(this.montos_recibidos_area, this.participacion);
        let len = montoCalidadArea.length;

        for(var i =0; i<len; i++){
            total = total + montoCalidadArea[i];
        }
     

        return total;
    }

    total_bono_calidad(aprove_perla_corte,aprove_perla_moldeo, num_quejas_cliente){
        let total=0;
        let calc = new TableOfProportions(null,null,null,null,null,null,null,aprove_perla_corte,aprove_perla_moldeo);
        
        let premcastCorte = calc.perlaCorteN;
        let premcastMoldeo = calc.perlaMoldeoN;
        let premcastQuejas = num_quejas_cliente*.5

        let montoCalidad = this.total_monto_calidad();

        total = montoCalidad+(montoCalidad*(premcastCorte+premcastMoldeo-premcastQuejas));

        return total;
    }


    /** MANTENIMIENTO */

    total_mantenimiento(montos_recibidos_area, rendimiento_agua, rendimiento_combustible, rendimiento_electricidad, fugas_aire,fugas_perla , fugas_vapor, fugas_aceite , faltas_uso_epp){
        let total=0;
        let sumatoria_montos=0;
        let montos = montos_recibidos_area;
        let len = montos_recibidos_area.length;

        for(var i=0; i<len; i++){
            sumatoria_montos = sumatoria_montos + montos[i];
        }   

        let divisor=0;

        for(var i=0; i<len; i++){
            if(montos[i]!=0){
                divisor++
            }
        }

        let promedio = sumatoria_montos/divisor;

        let monto = promedio*.4;  // el porcentaje es fijo  %40


        /** total */
        let calc = new TableOfProportions(null,null,null,null,null,null,null,null,null,rendimiento_agua,rendimiento_combustible, rendimiento_electricidad,faltas_uso_epp,fugas_perla, fugas_vapor, fugas_aceite, fugas_aire );

        let porcAgua = calc.agua;
        let porcCombustible = calc.combustible;
        let porcElectricidad = calc.electricidad;

        let premcastEnergeticos = porcAgua + porcCombustible + porcElectricidad;

        let faltasUsoEPP = calc.faltasEPP;

        let fugasPerla = calc.fugasPerla;
        let fugasVapor = calc.fugasVapor;
        let fugasAceite = calc.fugasAceite;
        let fugasAire = calc.fugasAire;

        let premcastFugas = fugasPerla + fugasAceite + fugasAire + fugasVapor;


        total = monto + (promedio*premcastEnergeticos) + (promedio*premcastFugas) + (promedio*faltasUsoEPP);
    

        return  total;
    }

    /** INSULPANEL */

    bonos_Por_NPC(equipo){
        let bonos=[];
        let calc;
        let len = equipo.length;
        
        for(var i =0; i<len; i++){
            calc = new TableOfProportions(equipo[i].nivel_dPdC);
            let total = calc.planCarrera;
            bonos.push(total);
        }
        
        return bonos;
    }

    bono_total_por_colaborador(equipo){
       
        let bono_total =[];
        let len = equipo.length;

        if(this.city == 'Guadalajara'){
            let bonos = 495;
            let clacs = new BonusPenalties(this.amp, this.blocks_fe, null, null, bonos, this.depto, null, this.city);
            let premio_castigo_retardos = clacs.pcRetardosEntrega;
            let premio_castigo_calidad = clacs.pcCalidad;
           
            for(var i =0; i<len; i++){
                let total = bonos  - premio_castigo_retardos - premio_castigo_calidad;
                if(total >0){
                    bono_total.push(total);
                }else{
                    bono_total.push(0)
                }
            }
        }else if(this.city == 'Queretaro'){
            let bonos = 200;
            let clacs = new BonusPenalties(this.amp, this.blocks_fe, null, null, bonos, this.depto, null, this.city);
            let premio_castigo_retardos = clacs.pcRetardosEntrega;
            let premio_castigo_calidad = clacs.pcCalidad;
           
            for(var i =0; i<len; i++){
                let total = bonos  - premio_castigo_retardos - premio_castigo_calidad;
                if(total >0){
                    bono_total.push(total);
                }else{
                    bono_total.push(0)
                }
            }
        }else{
            let bonos = this.bonos_Por_NPC(equipo);
            let clacs = new BonusPenalties(this.amp, this.blocks_fe, this.densidad, this.id_combustible, bonos, this.depto, null, this.city);
            let premio_castigo_retardos = clacs.pcRetardosEntrega;
            let premio_castigo_calidad = clacs.pcCalidad;
            let premio_castigo_limpieza = clacs.pcLimpieza;

            for(var i =0; i<len; i++){
                let total = bonos[i] - premio_castigo_retardos[i] - premio_castigo_calidad[i] - premio_castigo_limpieza[i];
                if(total >0){
                    bono_total.push(total);
                }else{
                    bono_total.push(0)
                }
            }
        }


        return bono_total;
    }
   
    /** Trafico Villahermosa */
    total_viaje_local_m3(equipo){
        let total= [];
        let len = equipo.length;
        
        for(var i =0; i<len; i++){
            let totalsemana=0;
            totalsemana = equipo[i].semana.lunes.local_m3 + equipo[i].semana.martes.local_m3 +equipo[i].semana.miercoles.local_m3+equipo[i].semana.jueves.local_m3+equipo[i].semana.viernes.local_m3 +equipo[i].semana.sabado.local_m3;
            total.push(totalsemana);
        }
        return total;
    }

    total_viaje_foraneo(equipo){
        let total= [];
        let len = equipo.length;
        
        for(var i =0; i<len; i++){
            let totalsemana=0;
            totalsemana = equipo[i].semana.lunes.foraneo_km + equipo[i].semana.martes.foraneo_km +equipo[i].semana.miercoles.foraneo_km+equipo[i].semana.jueves.foraneo_km+equipo[i].semana.viernes.foraneo_km +equipo[i].semana.sabado.foraneo_km;
            total.push(totalsemana);
        }
        return total;
    }

    productividad_local(equipo){
        let total =[];
        let totaleslm3 = this.total_viaje_local_m3(equipo);
        let calc = new TableOfProportions('m3')
        let pago_m3 = calc.pago;
        let len = totaleslm3.length;

        for(var i =0; i<len; i++){
            let productividadlm3 = totaleslm3[i] * pago_m3;
            total.push(productividadlm3);
        }

        return  total;
    }

    productividad_foraneo(equipo){
        let total =[];
        let totalesf = this.total_viaje_foraneo(equipo);
        let calc = new TableOfProportions('km')
        let pago_km = calc.pago;
        let len = totalesf.length;

        for(var i =0; i<len; i++){
            let productividadf = totalesf[i] * pago_km;
            total.push(productividadf);
        }

        return  total;
    }
    
    cuidado_unidad(equipo){
        let total=[];
        let calc;
        let len = equipo.length;

        for(var i=0; i<len; i++){
            let limpieza_unidad= equipo[i].limpieza_unidad;
            calc= new TableOfProportions(limpieza_unidad);
            let totalLimpieza = calc.limpiezaUnidad;
            total.push(totalLimpieza);
        }

        return total
    }

    bono_a_pagar(equipo){
        let total=[]
        let productividad_foraneo = this.productividad_foraneo(equipo);
        let productividad_local = this.productividad_local(equipo);
        let cuidado_unidad = this.cuidado_unidad(equipo);

        let len = equipo.length;

        for(var i =0; i<len; i++){
            let bono = productividad_foraneo[i]+productividad_local[i]+cuidado_unidad[i];
            total.push(bono);
        }

        return total;
    }

    /**HERRAMENTAL */
    total_cambio_moldes(m3_cortados, extram3){
        let p_r1 = m3_cortados.r1 * extram3.r1;
        let p_r2 = m3_cortados.r2 * extram3.r2;
        let p_r3 = m3_cortados.r3 * extram3.r3;
        let p_r4 = m3_cortados.r4 * extram3.r4;

        let total = p_r1 + p_r2 + p_r3 + p_r4;

        return total;
    }

    /**Mexicali*/

    monto_a_pagar(asistencias, pago, dias, depto, dias_comida, pago_dia_comida){
        let calc = new Attendance(this.equipo);
        let sumatoria_asistencia = calc.asistencias;
        let dias_laborados = dias;
        let monto =[];
        let len = asistencias.length;
        
        if(depto=='Almacen' || depto=='Bono Garantia'){
            if(depto=='Bono Garantia'){
                for(var i =0; i<sumatoria_asistencia.length; i++){
                    let total = (pago/dias_laborados)*sumatoria_asistencia[i]
                    monto.push(total);
                }
            }else{
                for(var i =0; i<len; i++){
                    let total = (pago/dias_laborados)*asistencias[i]
                    monto.push(total);
                }
            }
           
        }else if(depto=='Produccion' || depto=='Mantenimiento'){
            for(var i =0; i<len; i++){
                let total = ((pago/dias_laborados)*asistencias[i])+(dias_comida[i]*pago_dia_comida);
                monto.push(total);
            }
        }
       
        return monto
    }

    monto_total(asistencias, pago, dias, depto, dias_comida, pago_dia_comida){
        let montos =  this.monto_a_pagar(asistencias, pago, dias, depto, dias_comida, pago_dia_comida);
        let total=0;
        let len = montos.length;

        for(var i=0; i<len; i++){
            total+=montos[i];
        }

        return total;
    }

    /** empaque perla */
    produccion_persona(asistencia_total,dias, m3_cortados){
        let produccion= ((m3_cortados.bolsa_grande + (m3_cortados.bolsa_chica*1.5))/asistencia_total)*dias;
        return produccion
    }

    percepcion_total_2(asistencia_total,dias, m3_cortados, base, extram3){
        let dirtyDaysCalcs = new DirtyDays(this.dias_sucios);
        let produccion = this.produccion_persona(asistencia_total,dias, m3_cortados);
        let despuesB0 = produccion-base;
       
        let pagounidad=0;
        if(despuesB0 >=0 && despuesB0 <301){
            pagounidad=.35
        }else if(despuesB0 >=301 && despuesB0 <601){
            pagounidad=.4
        }else if(despuesB0 >=601 && despuesB0 <901){
            pagounidad=.45
        }else if(despuesB0 >=901 && despuesB0 <1201){
            pagounidad=.5
        }else if(despuesB0 >=1201){
            pagounidad=.55
        }

        let pago = despuesB0*pagounidad;
        let clacs = new BonusPenalties(this.amp, null, null, null, pago, this.depto, this.dias_sucios, this.city);
        
        let extra_amp = clacs.extraDesperdicio;
        let extra_diasSucios= clacs.extraDiasSucios;;
        let percepcion_total= pago + extra_amp + extra_diasSucios;

        percepcion_total < 0 ? percepcion_total = 0 : percepcion_total; 

        return percepcion_total;
    }

    /** MANTENIMIENTO EDIFICIOS */

    percepcion_total_3(extram3, base, dias_sucios){
        let percepcion_total;
        
        let pc_epp; 
        let epp = dias_sucios;

        /*
        if(epp >=0 && epp <1 ){
            epp = 0
        }else if(epp >=1 && epp <2){
            epp =  -.2;
        }else if(epp >=2 && epp <3){
            epp = -.5;
        }else if(epp >=3 ){
            epp =  -1;
        }else{
            epp =  0;
        }*/

        //estandar
        if(epp >=0 && epp <1 ){
            epp = 0
        }else if(epp >=1 && epp <2){
            epp =  -.1;
        }else if(epp >=2 && epp <3){
            epp = -.15;
        }else if(epp >=3 && epp <4){
            epp =  -.2;
        }else if(epp >=4 && epp <5 ){
            epp =  -.3;
        }else if(epp >=5 ){
            epp =  -.4;
        }else{
            epp =  0;
        }

        pc_epp = (extram3 * base)* epp;
        percepcion_total = (extram3* base) + pc_epp;
    
        percepcion_total < 0 ? percepcion_total = 0 : percepcion_total; 

        return percepcion_total;
    }
    

  }
  
  module.exports = MainCalcs; 