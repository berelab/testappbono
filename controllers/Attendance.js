'use strict'

export default class Attendance {
    constructor(
        equipo,
        factor_dias_laborados
    ){
        this.equipo = equipo
        this.factor_dias_laborados = factor_dias_laborados;
    }
    //Getters
    get asistencias(){
        return this.asistencia(this.equipo);
    }
    get equivaleciaAsistencias(){
        return this.equivalencia_asistencia(this.equipo, this.factor_dias_laborados);
    }
    get faltas(){
        return this.falta(this.equipo);
    }
    get retardos(){
        return this.retardo(this.equipo);
    }

    //methods
    asistencia(equipo) {
        let asistencia_total = [];
        for (var i = 0, len = equipo.length; i < len; ++i) {
            var total =+ equipo[i].asistencia.lunes + equipo[i].asistencia.martes + equipo[i].asistencia.miercoles + equipo[i].asistencia.jueves + equipo[i].asistencia.viernes + equipo[i].asistencia.sabado;
            asistencia_total.push(total);
        }
        return asistencia_total;
    }
    equivalencia_asistencia(equipo, factor_dias_laborados){
        let sumatoria_asistencia = this.asistencia(equipo);
        let equivalecia_asistencia = sumatoria_asistencia[0] * factor_dias_laborados;

        return equivalecia_asistencia;
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

