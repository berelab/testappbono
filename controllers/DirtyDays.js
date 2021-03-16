'use strict'

export default class DirtyDays {
    constructor(
        dias_sucios
    ){
        this.dias_sucios = dias_sucios
    }
    // Getters
    get diasSucios14(){
        return this.dirty_days14(this.dias_sucios)
    }

    get diasSucios () {
        return this.dirty_days(this.dias_sucios);
    }

    get diasSucios2 () {
        return this.dirty_days2(this.dias_sucios);
    }

    get diasSucios3() {
        return this.dirty_days3(this.dias_sucios);
    }

    get diasSucios4() {
        return this.dirty_days4(this.dias_sucios);
    }

    get diasSucios5() {
        return this.dirty_days5(this.dias_sucios);
    }

    get diasSucios6() {
        return this.dirty_days6(this.dias_sucios);
    }

    get diasSucios7() {
        return this.dirty_days7(this.dias_sucios);
    }

    get diasSucios8() {
        return this.dirty_days8(this.dias_sucios);
    }

    get diasSucios9() {
        return this.dirty_days9(this.dias_sucios);
    }
    get diasSucios10() {
        return this.dirty_days10(this.dias_sucios);
    }

    get diasSucios11() {
        return this.dirty_days11(this.dias_sucios);
    }

    get diasSucios12() {
        return this.dirty_days12(this.dias_sucios);
    }

    get diasSucios13() {
        return this.dirty_days13(this.dias_sucios);
    }

    get auditoriaSol () {
        return this.auditoria_sol(this.dias_sucios);
    }
    get auditoriaSol2 () {
        return this.auditoria_sol_2(this.dias_sucios);
    }

    get auditoriaSol3 () {
        return this.auditoria_sol_3(this.dias_sucios);
    }

    get auditoriaSol4(){
        return this.auditoria_sol_4(this.dias_sucios);
    }

    get auditoriaSol5(){
        return this.auditoria_sol_5(this.dias_sucios);
    }

    get auditoriaSol6(){
        return this.auditoria_sol_6(this.dias_sucios);
    }

    get auditoriaSol7(){
        return this.auditoria_sol_7(this.dias_sucios);
    }

    get auditoriaSol8(){
        return this.auditoria_sol_8(this.dias_sucios);
    }
    
    get auditoriaDiasSucios(){
        return this.auditoria_dias_sucios(this.dias_sucios);
    }

    get auditoriaDiasSucios2(){
        return this.auditoria_dias_sucios2(this.dias_sucios);
    }

    //Methods
    dirty_days14(value){ // Estandar  
        if(value == 0){
            return 0;
        }else if(value ==1){
            return -.10
        }else if(value ==2){
            return -.15
        }else if(value ==3){
            return -.20
        }else if(value ==4){
            return -.30
        }else if(value ==5){
            return -.40
        }else{
            return 0;
        }
    }

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


    dirty_days2(value) {
        if(value == 0 ){
            return .10;
        }else if(value == 1 ){
            return -.10;
        }else if(value == 2 ){
            return -.15;
        }else if(value == 3 ){
            return -.20;
        }else if(value == 4 ){
            return -.40;
        }else if(value == 5 ){
            return -.50;
        }else if(value == 6 ){
            value = -1;
            return value;
        }else{
            return 0;
        }
    }

    dirty_days3(value) {
        if(value == 0 ){
            return .05;
        }else if(value == 1 ){
            return -.10;
        }else if(value == 2 ){
            return -.20;
        }else if(value == 3 ){
            return -.30; 
        }else if(value == 4 ){
            return -.40; 
        }else if(value == 5 ){
            return -.50; 
        }else if(value == 6 ){
            return -.60;
        }else{
            return 0;
        }
    }

    dirty_days4(value) { 
        if(value == 0 ){
            return .05;
        }else if(value == 1 ){
            return -.05;
        }else if(value == 2 ){
            return -.15;
        }else if(value == 3 ){
            return -.20;
        }else if(value == 4 ){
            return -.30;
        }else if(value == 5 ){
            return -.50; 
        }else{
            return 0;
        }
    }

    dirty_days5(value) { 
      
        if(value == 0 ){
            return 0;
        }else if(value == 1 ){
            return -.03;
        }else if(value == 2 ){
            return -.05;
        }else if(value == 3 ){
            return-.10; 
        }else if(value == 4 ){
            return -.15; 
        }else if(value == 5 ){
            return -.20; 
        }else{
            return 0;
        }
    }

    dirty_days6(value) { 
      
        if(value == 0 ){
            return -.15;
        }else if(value == 1 ){
            return -.10;
        }else if(value == 2 ){
            return -.07;
        }else if(value == 3 ){
            return-.03; 
        }else if(value == 4 ){
            return 0; 
        }else if(value == 5 ){
            return .10; 
        }else if(value >= 6 ){
            return .15; 
        }else{
            return 0;
        }
    }


    dirty_days7(value){ //depto preexpMoldeo gdlj
        if(value ==0){
            return .05;
        }else if(value ==1){
            return -.1
        }else if(value ==2){
            return -.15
        }else if(value ==3){
            return -.20
        }else if(value ==4){
            return -.3
        }else if(value ==5){
            return -.4
        }else if(value ==6){
            return -.5
        }else if(value ==7){
            return -1
        }else{
            return 0;
        }
    }

    dirty_days8(value){ //depto almacen gdlj
        if(value ==0){
            return .05;
        }else if(value ==1){
            return -.1
        }else if(value ==2){
            return -.15
        }else if(value ==3){
            return -.20
        }else if(value ==4){
            return -.3
        }else if(value ==5){
            return -.4
        }else if(value ==6){
            return -.5
        }else{
            return 0;
        }
    }

    dirty_days9(value){ 
        if(value == 0){
            return .10;
        }else if(value ==1){
            return -.10
        }else if(value ==2){
            return -.15
        }else if(value ==3){
            return -.20
        }else if(value ==4){
            return -.25
        }else if(value ==5){
            return -.3
        }else if(value ==6){
            return -.5
        }else{
            return 0;
        }
    }

    dirty_days10(value){ 
        if(value == 0){
            return 100;
        }else if(value ==1){
            return -100
        }else if(value ==2){
            return -150
        }else if(value ==3){
            return -200
        }else if(value ==4){
            return -250
        }else if(value >=5){
            return -300
        }else{
            return 0;
        }
    }

    dirty_days11(value){ 
        if(value == 0){
            return .25;
        }else if(value ==1){
            return -.25
        }else if(value==2){
            return 0;
        }else{
            return 0;
        }
    }

    dirty_days12(value){ 
        if(value == 0){
            return .10;
        }else if(value ==1){
            return -.05
        }else if(value ==2){
            return -.07
        }else if(value ==3){
            return -.1
        }else if(value ==4){
            return -.15
        }else if(value ==5){
            return -.2
        }else if(value ==6){
            return -.25
        }else{
            return 0;
        }
    }

    dirty_days13(value) { 
        if(value == 0 ){
            return .05;
        }else if(value == 1 ){
            return -.05;
        }else if(value == 2 ){
            return -.1;
        }else if(value == 3 ){
            return -.20;
        }else if(value == 4 ){
            return -.30;
        }else if(value == 5 ){
            return -.50; 
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
        }else{
            return 0;
        }
    }

    auditoria_dias_sucios2(value){
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
        }else{
            return 0;
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

    auditoria_sol_3(value){ //depto steelfoam hmo
        if(value ==70){
            return .2
        }else if(value >=75 && value < 80){
            return .2
        }else if(value >=80 && value < 85){
            return .15
        }else if(value >=85 && value < 90){
            return .1
        }else if(value >=90 && value < 95){
            return .05
        }else if(value >=95 && value < 100){
            return .0
        }else if(value >=100){
            return .05
        }else{
            return 0;
        }
    }

    auditoria_sol_4(value){ //depto molino mr gdl
        if(value == 'Si' || value == 'SI'  || value == 'si' ){
            return 0;
        }else if(value == 'No' || value == 'NO'  || value == 'no' ){
            return -.1;
        }else{
            return 0;
        }
    } 
    
    
    auditoria_sol_5(value){
        if(value>=0 && value <65){
            return -.20;
        }else if(value>=65 && value <70){
            return -.15;
        }else if(value>=70 && value <75){
            return -.1;
        }else if(value>=75 && value <80){
            return -.05;
        }else if(value>=80 && value <85){
            return  0;
        }else if(value>=85 && value <90){
            return  .05;
        }else if(value>=90 && value <95){
            return  .10;
        }else if(value>=95 && value <100){
            return  .15;
        }else if(value>=100){
            return  .2;
        }else{
            return 0;
        }
    }


    auditoria_sol_6(value){ 
        if(value == 'Si' || value == 'SI'  || value == 'si' ){
            return 100;
        }else if(value == 'No' || value == 'NO'  || value == 'no' ){
            return -100;
        }else{
            return 0;
        }
    } 

    auditoria_sol_7(value){
        if(value >=0 && value <60){
            return -.2
        }else if(value >=60 && value <70){
            return -.15
        }else if(value >=70 && value <80){
            return -.1
        }else if(value >=80 && value <90){
            return -.05
        }else if(value >=90 && value <95){
            return 0
        }else if(value >=95 && value <100){
            return .05
        }else if(value >=100){
            return .1
        }else{
            return 0;
        }

    }

    auditoria_sol_8(value){
        if(value >=0 && value <70){
            return -.2
        }else if(value >=70 && value <80){
            return -.15
        }else if(value >=80 && value <85){
            return -.1
        }else if(value >=85 && value <90){
            return -.05
        }else if(value >=90 && value <94){
            return 0
        }else if(value >=94 && value <95){
            return .05
        }else if(value >=95){
            return .1
        }else{
            return 0;
        }

    }
}
