'use strict'

export default class TableOfProportions {
    constructor(
        amp,
        blocks_fe,
        densidad,
        id_combustible        
    ){
        this.amp            = amp;
        this.blocks_fe      = blocks_fe;
        this.densidad_value = densidad;
        this.id_combustible = id_combustible;        
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
        return this.combustible(this.id_combustible);
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

    //methods
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
    combustible(value){
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
}