'use strict'

class CalcsN {
    constructor ( 
        asistencias,
        factor_dias_laborados,
        equipo,
        dias,
        tiempo_extra,
        horas_por_turno
    ) {
        
        this.asistencias            = asistencias
        this.factor_dias_laborados  = factor_dias_laborados
        this.dias                   = dias
        this.equipo                 = equipo
        this.tiempo_extra           = tiempo_extra
        this.horas_por_turno        = horas_por_turno
    }

    // Getters
    get asistencia () {
        return this.asistenciasTotalesPorDia(this.equipo, this.dias);
    }
    get asistenciaFactor () {
        return this.asistenciasTotalesPorFactor(this.factor_dias_laborados);
    }
    get asistenciaMasTiempoExtra () {
        return this.asistenciasTotalesMasTiempoExtra(this.tiempo_extra, this.horas_por_turno);
    }
    
    // Methods

    
    // asistencias por dia (sin sin factor)
    asistenciasTotalesPorDia(equipo, dias){
        let asistencia_total = [];
        let total_lunes=0;
        let total_martes=0;
        let total_miercoles=0;
        let total_jueves=0;
        let total_viernes=0;
        let total_sabado=0;
       
        

        for (var i = 0; i <dias; ++i) {
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

    /** asistencia * factor laboral */
    asistenciasTotalesPorFactor(factor_dias_laborados){
        let asistencia_total =  this.asistenciasTotalesPorDia(this.equipo,this.dias);

        for(var i = 0; i < asistencia_total.length; i++ ){
            asistencia_total[i] = asistencia_total[i] * factor_dias_laborados;
        }

        return asistencia_total;
    }

    /** asistencia + tiempo extra */
    asistenciasTotalesMasTiempoExtra(tiempo_extra, horas_por_turno){
        
        let asistencia_total =  this.asistenciasTotalesPorFactor(this.factor_dias_laborados);
        
        /* pendiente
       
        */
        

        return asistencia_total;
    }

    
   

  }
  
  module.exports = CalcsN; 

