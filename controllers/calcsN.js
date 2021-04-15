'use strict'

import TableOfProportions from './TableOfProportions';
import Attendance from './Attendance';
import DirtyDays from './DirtyDays';

class CalcsN {
    constructor ( 
        asistencias,
        factor_dias_laborados,
        equipo,
        dias,
        tiempo_extra,
        horas_por_turno,
        $_extra_m3,
        m3_cortados,
        base0,
        desperdicio,    //amp
        auditoria_sol, //dias sucios
        num_quejas_cliente,
        rechazo_interno,
        city,
        depto,
        colaboradores
    ) {
        
        this.asistencias            = asistencias
        this.factor_dias_laborados  = factor_dias_laborados
        this.equipo                 = equipo
        this.dias                   = dias
        this.tiempo_extra           = tiempo_extra
        this.horas_por_turno        = horas_por_turno
        this.m3_cortados            = m3_cortados
        this.$_extra_m3             = $_extra_m3
        this.base0                  = base0
        this.desperdicio            = desperdicio
        this.auditoria_sol          = auditoria_sol
        this.num_quejas_cliente     = num_quejas_cliente
        this.rechazo_interno        = rechazo_interno
        this.city                   = city
        this.depto                  = depto
        this.colaboradores           = colaboradores
        
    }

    // Getters
    
    get asistencia () {
        return this.asistenciasTotalesPorDia(this.equipo);
    }

    get asistenciaFactor () {
        return this.asistenciasTotalesPorFactor(this.equipo, this.dias);
    }

    get asistenciaMasTiempoExtra () {
        return this.asistenciasTotalesMasTiempoExtra(this.tiempo_extra, this.horas_por_turno, this.equipo, this.dias);
    }
    
    get m3Cortados(){
        return this.m3CortadosTotalesPorDia(this.m3_cortados);
    }

    get m3CortadosPersona(){
        return this.m3CortadosPorPersona();
    }

    get m3ExtraVSBaseO(){
        return this.m3ExtraVSBaseOPorDia(this.base0, this.dias);
    }

    get percepcionTotalM3Base(){
        return this.percepcionTotalM3BasePorDia(this.$_extra_m3);
    }

    get porDesperdicio(){
        return this.porDesperdicioPorDia(this.desperdicio);
    }

    get porAuditoriaSOL(){
        return this.porAuditoriaSOLPorDia(this.auditoria_sol)
    }

    get porQuejas(){
        return this.porQuejasPorDia(this.num_quejas_cliente)
    }

    get porRechazoInterno(){
        return this.porRechazoInternoPorDia(this.rechazo_interno)
    }

    get percepcionTotalPorDia(){
        return this.percepcionTotal_PorDia();
    }

    get percepcionTotalPorDiaIndividual(){
        return this.percepcionTotal_PorDia_Individual(this.equipo);
    }

    get percepcionTotalPorSemana(){
        return this.percepcionTotal_PorSemana();
    }

    get percepcionTotalPorSemanaIndividual(){
        return this.percepcionTotal_PorSemanaIndividual(this.equipo);
    }

   


    
    // Methods

  
    
    /**
     * Retorna un arreglo de las asistencias totales (sin factor), por cada dia de la semana
     */
    asistenciasTotalesPorDia(equipo){
        let asistencia_total = [];
        let total_lunes=0;
        let total_martes=0;
        let total_miercoles=0;
        let total_jueves=0;
        let total_viernes=0;
        let total_sabado=0;

        for (var i = 0; i <equipo.length; ++i) {
             total_lunes = total_lunes + equipo[i].asistencia.lunes;
             total_martes = total_martes+ equipo[i].asistencia.martes;
             total_miercoles = total_miercoles + equipo[i].asistencia.miercoles;
             total_jueves  = total_jueves + equipo[i].asistencia.jueves;
             total_viernes  = total_viernes + equipo[i].asistencia.viernes;
             total_sabado  = total_sabado + equipo[i].asistencia.sabado;
        }

       
        asistencia_total.push(total_lunes);
        asistencia_total.push(total_martes);
        asistencia_total.push(total_miercoles);
        asistencia_total.push(total_jueves);
        asistencia_total.push(total_viernes);
        asistencia_total.push(total_sabado);

       


        return asistencia_total;
    }

     /**
     * Retorna un arreglo de las asistencias multiplicadas por el facor,  por cada dia de la semana 
     */
    asistenciasTotalesPorFactor(equipo, dias){
        let asistencia_total =  this.asistenciasTotalesPorDia(equipo,dias);
        
        for(var i = 0; i < asistencia_total.length; i++ ){
            asistencia_total[i] = asistencia_total[i] * equipo[i].factor_dias_laborados;
        }

        return asistencia_total;
    }

    /**
     * Retorna un arreglo de las asistencias por factor por las horas extra,  por cada dia de la semana 
     */
    asistenciasTotalesMasTiempoExtra(tiempo_extra, horas_por_turno,equipo,dias){
        let calc = new Attendance( equipo,null,null,dias)
        let asistencia_total = [];
        let asistencia =  calc.asistenciasPorDias;
       
        /**obtener el tiempo extra */
        let tiempoExtra=[];
        tiempoExtra.push(tiempo_extra.lunes);
        tiempoExtra.push(tiempo_extra.martes);
        tiempoExtra.push(tiempo_extra.miercoles);
        tiempoExtra.push(tiempo_extra.jueves);
        tiempoExtra.push(tiempo_extra.viernes);
        tiempoExtra.push(tiempo_extra.sabado);

        for(var i=0; i< asistencia.length;i++){
            let total = asistencia[i] + ((tiempoExtra[i]*2)/horas_por_turno);
            asistencia_total.push(total);
        }

        return asistencia_total;
    }

    /**
     * Retorna un arreglo de los materiales cortados totales  por cada dia de la semana (solo valor sin nombre del dia) 
     */
    m3CortadosTotalesPorDia(m3_cortados){
        let m3cortados = [];

        m3cortados.push(m3_cortados.lunes);
        m3cortados.push(m3_cortados.martes);
        m3cortados.push(m3_cortados.miercoles);
        m3cortados.push(m3_cortados.jueves);
        m3cortados.push(m3_cortados.viernes);
        m3cortados.push(m3_cortados.sabado);
        if(this.city=='Monterrey' &&(this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3')){
            m3cortados.push(m3_cortados.domingo);
        }

        return m3cortados;

    }

     /**
     * Retorna un arreglo de los materiales cortados por persona,  por cada dia de la semana 
     */
    m3CortadosPorPersona(){
        let m3_cortados_persona=[];
        let m3cortados = this.m3CortadosTotalesPorDia(this.m3_cortados);
        let asistenciaDiaria = this.asistenciasTotalesPorDia(this.equipo,this.dias);
       
        

        if(this.depto =='RotuladoT1'){
            let array = this.colaboradores;
            let colaboradores =[];
            colaboradores.push(array.lunes);
            colaboradores.push(array.martes);
            colaboradores.push(array.miercoles);
            colaboradores.push(array.jueves);
            colaboradores.push(array.viernes);
            colaboradores.push(array.sabado);
            for(var i=0; i<colaboradores.length; i++){
                if(m3cortados[i]==0 || colaboradores[i]==0){
                    m3_cortados_persona.push(0);
                }else{
                    let total = m3cortados[i]/colaboradores[i];
                    m3_cortados_persona.push(total);
                }
               
            }


        }else if(this.city=='Monterrey' &&(this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3')){
            let colaboradores =this.colaboradores;
            for(var i=0; i<colaboradores.length; i++){
                if(m3cortados[i]==0 || colaboradores[i]==0){
                    m3_cortados_persona.push(0);
                }else{
                    let total = m3cortados[i]/colaboradores[i];
                    m3_cortados_persona.push(total);
                }
            }
            
        }else{
            for(var i=0; i<asistenciaDiaria.length; i++){
                if(m3cortados[i]==0 || asistenciaDiaria[i]==0){
                    m3_cortados_persona.push(0);
                }else{
                    let total = m3cortados[i]/asistenciaDiaria[i];
                    m3_cortados_persona.push(total);
                }
               
            }
        }
       
      
    
        return m3_cortados_persona;
    }

    /**
     * Retorna un arreglo de los materiales extra cortados,  por cada dia de la semana 
     */
    m3ExtraVSBaseOPorDia(base0, dias){
        let m3_ExtraVSBaseO = [];
        let m3_CortadosPersona = this.m3CortadosPorPersona();
        let baseDiaria;
        if(this.depto=='RotuladoT1' || this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3' ){
            baseDiaria=base0;
        }else{
           baseDiaria = base0 /dias;
        }
        for(var i =0; i< m3_CortadosPersona.length; i++){
            if(m3_CortadosPersona[i]==0){
                m3_ExtraVSBaseO.push(0);
            }else{
                let total = m3_CortadosPersona[i]-baseDiaria;
                m3_ExtraVSBaseO.push(total);
            }
        }

            return m3_ExtraVSBaseO;
    }

     /**
     * Retorna un arreglo de la percepcion total por m3 base,  por cada dia de la semana 
     */
    percepcionTotalM3BasePorDia($_extra_m3){
        let percepcion_TotatM3Base = [];
        let asistenciaDiaria = this.asistenciasTotalesPorDia(this.equipo,this.dias); 
        let m3ExtraPorDia = this.m3ExtraVSBaseOPorDia(this.base0, this.dias)
        let precioExtraM3= $_extra_m3;

        for(var i =0; i<asistenciaDiaria.length; i++){
            if(asistenciaDiaria[i]==0){ //no asistencias
                percepcion_TotatM3Base.push(0); 
            }else{
                let total = m3ExtraPorDia[i]*precioExtraM3;
                percepcion_TotatM3Base.push(total); 
            }
        }

        return  percepcion_TotatM3Base;
    }

     /**
     * Retorna un arreglo del $ por desperdicio,  por cada dia de la semana 
     */
    porDesperdicioPorDia(desperdicio){
        let $porDesperdicio = [];
        let calc = new TableOfProportions(desperdicio); 
        let percepcion_Total_Por_M3Base = this.percepcionTotalM3BasePorDia(this.$_extra_m3);
        let preOCas;
        /** % en premio o castigo */
        if(this.depto=='RotuladoT1'){
            preOCas = 0//calc.desperdicio6;

        }else if(this.city=='Monterrey' &&(this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3')){
            preOCas = calc.desperdicio12;
        }else{
            //preOCas = calc.desperdicioN;
            preOCas = calc.desperdicio13; 

        }
       
        for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
            if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                $porDesperdicio.push(0); 
            }else{
                let total = percepcion_Total_Por_M3Base[i]*preOCas;
                $porDesperdicio.push(total); 
            }
        }

        return $porDesperdicio;
    }


     /**
     * Retorna un arreglo del $ por auditoria SOL,  por cada dia de la semana 
     */
    porAuditoriaSOLPorDia(auditoria_sol){
        let $porAuditoriaSOL = [];
        let calc = new TableOfProportions(null,null,null,null, auditoria_sol);
        let calcs = new DirtyDays(auditoria_sol);
        let percepcion_Total_Por_M3Base = this.percepcionTotalM3BasePorDia(this.$_extra_m3);
        let preOCas;
       
        /** % en premio o castigo */
        if(this.depto=='RotuladoT1'){
            //preOCas = calcs.diasSucios6;
            preOCas = calcs.diasSucios14;

        }else if(this.city=='Monterrey' &&(this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3')){
            //preOCas = calcs.auditoriaSol7;
            preOCas = calcs.diasSucios14;
        }else{
           // preOCas= calc.auditoriasolN;
           preOCas = calcs.diasSucios14;

        }

        for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
            if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                $porAuditoriaSOL.push(0); 
            }else{
                let total = percepcion_Total_Por_M3Base[i]*preOCas;
                $porAuditoriaSOL.push(total); 
            }
        }
        

        return  $porAuditoriaSOL;
    }

     /**
     * Retorna un arreglo del $ por quejas del cliente,  por cada dia de la semana 
     */
    porQuejasPorDia(num_quejas_cliente){
        let $porQuejas = [];
        let calc = new TableOfProportions(null,null,null,null,null,num_quejas_cliente);
        let percepcion_Total_Por_M3Base = this.percepcionTotalM3BasePorDia(this.$_extra_m3);

        /** % en premio o castigo */
        let preOCas = calc.quejas;

        
        for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
            if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                $porQuejas.push(0); 
            }else{
                let total = percepcion_Total_Por_M3Base[i]*preOCas;
                $porQuejas.push(total); 
            }
        }
        

        return  $porQuejas;
    }

     /**
     * Retorna un arreglo del $ rechazo interno,  por cada dia de la semana 
     */
    porRechazoInternoPorDia(rechazo_interno){
        let $porRechazoInterno = [];
        let calc = new TableOfProportions(null,null,null,null,null,null, rechazo_interno);
        let percepcion_Total_Por_M3Base = this.percepcionTotalM3BasePorDia(this.$_extra_m3);

        /** % en premio o castigo */
        let preOCas = calc.rechazoInternoN;

        
        for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
            if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                $porRechazoInterno.push(0); 
            }else{
                let total = percepcion_Total_Por_M3Base[i]*preOCas;
                $porRechazoInterno.push(total); 
            }
        }
        

        return   $porRechazoInterno;
    }

    /**
     * Retorna un arreglo de la percepcion total,  por cada dia de la semana 
     */
    percepcionTotal_PorDia(){
        let percepcionTotal = [];
        let percepcion_Total_Por_M3Base = this.percepcionTotalM3BasePorDia(this.$_extra_m3);
        let $porDesperdicio;
        let $porAuditoriaSOL;
        let $porQuejas;
        let $porRechazoInterno;

        if(this.depto=='RotuladoT1' || this.depto=='Rotulado Hielera 1' ||this.depto=='Rotulado Hielera 2' ||this.depto=='Rotulado Hielera 3'){
            $porDesperdicio = this.porDesperdicioPorDia(this.desperdicio);
            $porAuditoriaSOL = this.porAuditoriaSOLPorDia(this.auditoria_sol);
            for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
                if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                    percepcionTotal.push(0); 
                }else{
                    let total = percepcion_Total_Por_M3Base[i]+$porDesperdicio[i]+$porAuditoriaSOL[i];
                    percepcionTotal.push(total); 
                }
            }
        }else{
            $porDesperdicio = this.porDesperdicioPorDia(this.desperdicio);
            $porAuditoriaSOL = this.porAuditoriaSOLPorDia(this.auditoria_sol);
            $porQuejas  = this.porQuejasPorDia(this.num_quejas_cliente);
            $porRechazoInterno = this.porRechazoInternoPorDia(this.rechazo_interno);

            for(var i =0; i<percepcion_Total_Por_M3Base.length; i++){
                if(percepcion_Total_Por_M3Base[i]==0){  // percepcion es 0
                    percepcionTotal.push(0); 
                }else{
                    let total = percepcion_Total_Por_M3Base[i]+$porDesperdicio[i]+$porAuditoriaSOL[i]; //-$porQuejas[i]+$porRechazoInterno[i];
                    percepcionTotal.push(total); 
                }
            }
        }
           

        return  percepcionTotal;
    }

    percepcionTotal_PorDia_Individual(equipo){
        let percepcionTotalIndividual = [];
        let percepcionTotal = this.percepcionTotal_PorDia();
        let asistencia = this.asistenciasTotalesPorDia(equipo);

        for(var i=0; i<asistencia.length; i++){
            if(asistencia[i]==0 || percepcionTotal[i] ==0){
                percepcionTotalIndividual.push(0);
            }else{
                let total = percepcionTotal[i]/asistencia[i];
                percepcionTotalIndividual.push(total);
            }
        }

        return  percepcionTotalIndividual;
    }

     /**
     * Retorna la percepcion total de la semana
     */
    
    percepcionTotal_PorSemana(){
        let percepcion_total =0;
        let ptpd= this.percepcionTotal_PorDia();

        for(var i =0; i <ptpd.length; i++){
            percepcion_total += ptpd[i];
        }

        return percepcion_total;
    }

    percepcionTotal_PorSemanaIndividual(equipo){
        let percepcion_total =0;
        let ptpd= this.percepcionTotal_PorDia_Individual(equipo);

        for(var i =0; i <ptpd.length; i++){
            percepcion_total += ptpd[i];
        }

        return percepcion_total;
    }


   

   

  }
  
  module.exports = CalcsN; 

