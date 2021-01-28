'use strict'

export default class DirtyDays {
    constructor(
        dias_sucios
    ){
        this.dias_sucios = dias_sucios
    }
    // Getters
    get diasSucios () {
        return this.dirty_days(this.dias_sucios);
    }
    get auditoriaSol () {
        return this.auditoria_sol(this.dias_sucios);
    }
    get auditoriaSol2 () {
        return this.auditoria_sol_2(this.dias_sucios);
    }
    get auditoriaDiasSucios(){
        return this.auditoria_dias_sucios(this.dias_sucios);
    }

    //Methods
    dirty_days(value) {
        if(value == 0 ){
            return .05;
        }else if(value == 1 ){
            return -.05;
        }else if(value == 2 ){
            return -.15;
        }else if(value == 3 ){
            return -.25;
        }else if(value == 4 ){
            return -.35;
        }else if(value == 5 ){
            return -.45;
        }else if(value == 6 ){
            value = -.100;
            return value;
        }else{
            return 0;
        }
    }
    auditoria_sol(value){
        if(value >= 60 && value < 70){
            return -.04;
        }else if(value >= 70 && value < 80){
            return -.03;
        }else if(value >= 80 && value < 85){
            return -.02;
        }else if(value >= 85 && value < 90){
            return -.01;
        }else if(value >= 90 && value < 95){
            return 0;
        }else if(value >= 95 && value < 100){
            return .025;
        }else if(value >= 100){
            return .05;
        }else{
            return 0;
        }
    }
    auditoria_dias_sucios(value){
        if(value == 0){
            return 100;
        }else if(value == 1){
            return -100;
        }else if(value == 2){
            return -150;
        }else if(value == 3){
            return -200;
        }else if(value == 4){
            return -250;
        }else if(value == 5){
            return -300;
        }
    }
    auditoria_sol_2(value){
        if(value >= 60 && value < 70){
            return -.04;
        }else if(value >= 70 && value < 80){
            return -.03;
        }else if(value >= 80 && value < 85){
            return -.02;
        }else if(value >= 85 && value < 90){
            return -.01;
        }else if(value >= 90 && value < 95){
            return 0;
        }else if(value >= 95 && value < 100){
            return .5;
        }else if(value >= 100){
            return .10;
        }else{
            return 0;
        }
    }
}
