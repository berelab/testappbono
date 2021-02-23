'use strict'

export default class Attendance {
    constructor(
        equipo,
        factor_dias_laborados,
        city,
        dias,
        depto,
        horas_por_turno
    ){
        this.equipo = equipo
        this.factor_dias_laborados = factor_dias_laborados;
        this.city = city,
        this.dias = dias
        this.depto = depto
        this.horas_por_turno =  horas_por_turno
    }
    //Getters
    get asistencias(){
        return this.asistencia(this.equipo, this.city, this.depto);
    }

    get asistenciasPorDias () {
        return this.asistenciasTotalesPorDia(this.equipo);
    }

    get equivaleciaAsistencias(){
        return this.equivalencia_asistencia(this.equipo, this.factor_dias_laborados, this.city, this.depto, this.horas_por_turno);
    }
    get faltas(){
        return this.falta(this.equipo);
    }
    get retardos(){
        return this.retardo(this.equipo);
    }

    //methods 
    // sumatoria de las asistencias en la semana por persona.
    asistencia(equipo,city, depto) {
        let asistencia_total = [];
        if(city=='Monterrey' && (depto=='Moldeo' || depto=='EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Bloquera' || depto=='PreExpansion')){
            for (var i = 0, len = equipo.length; i < len; ++i) {
                var total =+ equipo[i].asistencia.lunes + equipo[i].asistencia.martes + equipo[i].asistencia.miercoles + equipo[i].asistencia.jueves + equipo[i].asistencia.viernes + equipo[i].asistencia.sabado+ equipo[i].asistencia.domingo;
                asistencia_total.push(total);
            }
        }else{
            for (var i = 0, len = equipo.length; i < len; ++i) {
                var total =+ equipo[i].asistencia.lunes + equipo[i].asistencia.martes + equipo[i].asistencia.miercoles + equipo[i].asistencia.jueves + equipo[i].asistencia.viernes + equipo[i].asistencia.sabado;
                asistencia_total.push(total);
            }
        }
       
        return asistencia_total;
    }

    /**
     * Retorna un arreglo de las asistencias totales (sin factor), por cada dia de la semana
     */
    
    asistenciasTotalesPorDia(equipo){
        let len = equipo.length;
        let asistencia_total = [];
        let total_lunes=0;
        let total_martes=0;
        let total_miercoles=0;
        let total_jueves=0;
        let total_viernes=0;
        let total_sabado=0;
        let total_domingo=0;
       
        for (var i = 0; i <len; ++i) {
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
        if(this.city=='Monterrey' && (this.depto=='Moldeo' || this.depto=='EMCO' || this.depto=='Corte NIP' || this.depto=='Corte l' || depto=='Bloquera')){
            for (var i = 0; i <len; ++i) {
                total_domingo  = total_domingo + equipo[i].asistencia.domingo;
           }

           asistencia_total.push(total_domingo);
        }
      
        return asistencia_total;
     }

    equivalencia_asistencia(equipo, factor_dias_laborados, city, depto, horas_por_turno){
       
        let sumatoria_asistencia = this.asistencia(equipo, city, depto);

        if(city == 'Nogales'){
            let equivalente=[];
            let len = sumatoria_asistencia.length;

            for(var i =0; i< len; i++){
                if(sumatoria_asistencia[i]==0){
                    equivalente.push(0);
                }else{
                    var total = sumatoria_asistencia[i] * factor_dias_laborados;
                    equivalente.push(total);
                }
            }
            
            return equivalente;

        }else if(city== 'La Paz'){
            if(depto=='Corte' || depto=='Almacén' || depto=='CEDI' || depto=='Chofer Local' || depto=='Moldeo'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
            }
        }else if(city== 'Juarez'){
            if(depto == 'Placa' || depto == 'Molino' || depto =='Moldeo' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Corte' || depto=='Aligerante' || depto=='Almacén' || depto=='AOS Mith' || depto=='Choferes' || depto =='Commscope'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                return equivalente;
            }
        }else if(city== 'Hermosillo'){
            if(depto == 'Bloquera' || depto=='Corte' || depto=='Steelfoam'  || depto=='Almacen' || depto=='Moldeo' ){
                let equivalente = [];
                let len = sumatoria_asistencia.length;
                
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = (sumatoria_asistencia[i] * factor_dias_laborados) + ((equipo[i].horas_extras*2)/horas_por_turno);
                        equivalente.push(total);
                    }
                }

                return equivalente;
            }else if(depto=='Choferes'  || depto=='Mantenimiento' || depto =='RotuladoT1'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
            }else if(depto=='Insulpanel'){
                let equivalente=[];
                let len = equipo.length;
    
                for(var i =0; i< len; i++){
                    if(equipo[i].asistencia > 0){
                        var total = equipo[i].asistencia;
                        equivalente.push(total);
                    }else{
                        equivalente.push(0);
                    }
                }
                
                return equivalente;
            }
            
        }else if(city== 'Guadalajara'){ 
            if(depto =='PreexpYMoldeo' || depto=='Corte' || depto=='Almacen' || depto =='Recupera' || depto=='Choferes' || depto=='Molienda de MR' || depto=='Mantenimiento'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
            }else if(depto=='Insulpanel'){
                let equivalente=[];
                let len = equipo.length;
    
                for(var i =0; i< len; i++){
                    if(equipo[i].asistencia > 0){
                        var total = equipo[i].asistencia;
                        equivalente.push(total);
                    }else{
                        equivalente.push(0);
                    }
                }
                
                return equivalente;
            }

        }else if(city== 'Queretaro'){
            if(depto =='PreexpYMoldeo' || depto=='Hielera' || depto =='Corte'   || depto =='Almacen' || depto=='Mantenimiento' || depto=='Choferes'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
             }else if(depto=='Insulpanel'){
                let equivalente=[];
                let len = equipo.length;
    
                for(var i =0; i< len; i++){
                    if(equipo[i].asistencia > 0){
                        var total = equipo[i].asistencia;
                        equivalente.push(total);
                    }else{
                        equivalente.push(0);
                    }
                }
                
                return equivalente;
            }
        }else if(city== 'Villahermosa'){
            if(depto =='PreexpYMoldeo' || depto =='Corte' || depto=='Almacen' || depto=='Mantenimiento'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
             }
        }else if(city== 'CDMX'){
            if(depto =='PreexpYMoldeo' || depto =='CorteConst'   || depto =='CorteMaquila' || depto == 'Vitro' || depto=='Almacen' || depto=='Mantenimiento'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
             }
        }else if(city=='Monterrey'){
            if(depto=='Mantenimiento' || depto=='Choferes Locales' || depto=='Choferes CEDI' || depto=='Molienda de MR' || depto=='Almacen CEDI' || depto=='Almacen' || depto=='Moldeo' || depto=='EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Bloquera' || depto=='Herramental' || depto=='PreExpansion'){
                let equivalente=[];
                let len = sumatoria_asistencia.length;
    
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = sumatoria_asistencia[i] * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }
                
                return equivalente;
             }
        }else{

            let equivalecia_asistencia;
            equivalecia_asistencia = sumatoria_asistencia[0] * factor_dias_laborados;
            return equivalecia_asistencia;
            
        }

    }
    falta(equipo){
        let faltas_totales = [];
        for (var i = 0, len = equipo.length; i < len; ++i) {
            var total = equipo[i].faltas;
            faltas_totales.push(total);
        }
        return faltas_totales;
    }
    retardo(equipo){
        let retardos_totales = [];
        for (var i = 0, len = equipo.length; i < len; ++i) {
            var total = equipo[i].retardos;
            retardos_totales.push(total);
        }
        return retardos_totales;
    }
}

