'use strict'

export default class Attendance {
    constructor(
        equipo,
        factor_dias_laborados,
        city,
        dias,
        depto,
        horas_por_turno,
       
    ){
        this.equipo = equipo
        this.factor_dias_laborados = factor_dias_laborados;
        this.city = city
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

    get asistenciaPersona(){
        return this.asistencia_persona(this.equipo);
    }

    get diasComPersona(){
        return this.dias_com_persona(this.equipo);
    }

    get totalAsistencias(){
        return this.total_asistencias(this.equipo);
    }

    get colaboradoresPorDia(){
        return this.colaboradores_por_dia(this.equipo, this.factor_dias_laborados);
    }

    get asistenciaTotal(){
        return  this.asistencia_total(this.equipo, this.factor_dias_laborados);
    }

    //methods 
    // sumatoria de las asistencias en la semana por persona.
    asistencia(equipo,city, depto) {
        let asistencia_total  =[];
       if(city=='Monterrey' && (depto=='Moldeo' || depto=='EMCO' || depto=='Corte NIP' || depto=='Corte L' || depto=='Bloquera' || depto=='PreExpansion' || depto=='Rotulado Hielera 1' || depto=='Rotulado Hielera 2' || depto=='Rotulado Hielera 3')){
            for (var i = 0, len = equipo.length; i < len; ++i) {
                var total =+ equipo[i].asistencia.lunes + equipo[i].asistencia.martes + equipo[i].asistencia.miercoles + equipo[i].asistencia.jueves + equipo[i].asistencia.viernes + equipo[i].asistencia.sabado+ equipo[i].asistencia.domingo;
                asistencia_total.push(total);
            }
        }else if(city=='Merida' && (depto=='Moldeo')){
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
       
        let sumatoria_asistencia = this.asistencia(equipo, city, depto );

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
            if(depto=='Mantenimiento' || depto=='Corte' || depto=='Almacén' || depto=='CEDI' || depto=='Chofer Local' || depto=='Moldeo'){
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
            if(depto=='Mantenimiento' || depto == 'Placa' || depto == 'Molino' || depto =='Moldeo' || depto =='Mcs Frame' || depto =='Kbrs' || depto =='Electrolux' || depto =='Corte' || depto=='Aligerante' || depto=='Almacén' || depto=='AOS Mith' || depto=='Choferes' || depto =='Commscope'){
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
        }else if(city=='Merida'){
            if(depto=='Mantenimiento' || depto=='Almacen' || depto=='Choferes' || depto=='Moldeo' || depto=='Rotulado'){
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
             }else if(depto=='Corte' || depto=='Bloquera'){
                let equivalente = [];
                let len = sumatoria_asistencia.length;
                
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = (sumatoria_asistencia[i]  + ((equipo[i].horas_extras*2)/horas_por_turno)) * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }

                return equivalente;
             }
        }else if(city=='Veracruz'){
            if(depto=='Mantenimiento' || depto=='Almacen' || depto=='Almacen CEDI' || depto=='Choferes' || depto=='Choferes CEDI'){
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
             }else if(depto=='Bloquera'  || depto=='Corte' || depto=='EMCO' || depto =='Moldeo' || depto=='Steelfoam' || depto=='Construpanel'){
                let equivalente = [];
                let len = sumatoria_asistencia.length;
                
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = (sumatoria_asistencia[i]  + ((equipo[i].horas_extras*2)/horas_por_turno)) * factor_dias_laborados;
                        equivalente.push(total);
                    }
                }

                return equivalente;
             }
        }else if(city=='Mexicali'){
            if(depto=='Choferes' || depto=='Rotulado'){
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
        }else if(city=='Cancun'){
            if(depto=='Mantenimiento' || depto=='Corte' ||depto == 'PreexpYMoldeo'  ||depto == 'Almacen' || depto=='Almacen Playa' || depto=='Empaque Perla'){
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
        }else if(city=='Tijuana'){
            if(depto=='Silo Molino' || depto=='Mantenimiento'  || depto=='Almacen' || depto=='Corte' || depto=='PreexpYMoldeo' || depto=='Choferes Locales' ){
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
             }else if(depto=='Bono TYG'){
                let equivalente = [];
                let len = sumatoria_asistencia.length;
                
                for(var i =0; i< len; i++){
                    if(sumatoria_asistencia[i]==0){
                        equivalente.push(0);
                    }else{
                        var total = (sumatoria_asistencia[i] * factor_dias_laborados)  + ((equipo[i].horas_extras*2)/12);
                        equivalente.push(total);
                    }
                }

                return equivalente;
             }
        }else if(city=='Culiacan'){
            if(depto=='Mantenimiento' || depto=='PreexpYMoldeo' || depto=='Mantenimiento Edificios' || depto=='Molienda' || depto=='Corte' || depto=='Construpanel'  || depto=='Almacen' || depto=='Almacen Const' || depto=='Choferes Locales'){
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

    colaboradores_por_dia(equipo, factor_dias_laborados){
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
             total_domingo = total_domingo + equipo[i].asistencia.domingo;
        }
    
       
        total_lunes = total_lunes //* factor_dias_laborados;
        total_martes = total_martes //* factor_dias_laborados;
        total_miercoles = total_miercoles //* factor_dias_laborados;
        total_jueves  = total_jueves //* factor_dias_laborados;
        total_viernes = total_viernes //* factor_dias_laborados;
        total_sabado = total_sabado //* factor_dias_laborados;
        total_domingo = total_domingo //* factor_dias_laborados;
        
    
        asistencia_total.push(total_lunes);
        asistencia_total.push(total_martes);
        asistencia_total.push(total_miercoles);
        asistencia_total.push(total_jueves);
        asistencia_total.push(total_viernes);
        asistencia_total.push(total_sabado);
        asistencia_total.push(total_domingo);
       
        let colaboradores = {
            lunes: asistencia_total[0],
            martes: asistencia_total[1],
            miercoles: asistencia_total[2],
            jueves: asistencia_total[3],
            viernes: asistencia_total[4],
            sabado: asistencia_total[5],
            domingo: asistencia_total[6],
        }
        
        

      
        return colaboradores;
     }
    
     asistencia_total(equipo, factor_dias_laborados){
        let colaboradores = this.colaboradores_por_dia(equipo, factor_dias_laborados);
        let total = (colaboradores.lunes * factor_dias_laborados) + (colaboradores.martes*factor_dias_laborados) + (colaboradores.miercoles*factor_dias_laborados) + (colaboradores.jueves*factor_dias_laborados) + (colaboradores.viernes*factor_dias_laborados) + (colaboradores.sabado*factor_dias_laborados) + (colaboradores.domingo*factor_dias_laborados)
        return total;
    }


    /* Mexicali mmto, produccion almacen*/

    
   asistencia_persona(equipo){
    let len = equipo.length;
    let asistencias = [];

    for (var i = 0; i <len; ++i) {
        let asistencia_persona = equipo[i].asistencia;
        asistencias.push(asistencia_persona);
         
    }

    return asistencias;
    }

    /** mmto, produccion */
    dias_com_persona(equipo){
        let len = equipo.length;
        let dias_comida = [];
    
        for (var i = 0; i <len; ++i) {
            let dia_comida = equipo[i].dias_comida;
            dias_comida.push(dia_comida);
             
        }
    
        return dias_comida;
        }

    total_asistencias(equipo){
        let asistencias = this.asistencia_persona(equipo)
        let len = asistencias.length;
        let asistencia_total = 0;
        
        for (var i = 0; i <len; ++i) {
            asistencia_total+= asistencias[i];
        }

        return asistencia_total;
    }

}

