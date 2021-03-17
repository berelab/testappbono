'use strict'
class FormatData {
    constructor ( 
       equipo,
       asistencia,
    ) {
        this.equipo               = equipo;
        this.asistencia           = asistencia;
    }

    // Getters
    get convert () {
        return this._convert(this.equipo, this.asistencia);
    }
    
    // Methods
    // Crea un solo arreglo a partir de los dos arreglos.
    _convert(equipo, asistencia){
      let  equipoResult = []
      let  persona = {} //molde
      let asistenciaConvert= this._asistenciaConvert(asistencia);
      let equipoConvert = this._equipoConvert(equipo);
      let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
     
      if(equipoConvert==null || equipoConvert.length==0){ //viene vacio
          if(asistenciaConvert==null || asistenciaConvert.length==0){ // viene vacia
              equipoResult = equipoResult; //ambos vienen vacios
          }else{
              equipoResult = asistenciaConvert; // pasamos las asistencias pero sin nombres 
          }
      }else if(asistenciaConvert==null || asistenciaConvert.length==0){ // equipo no viene vacio pero si asistencias
            equipoResult = equipoConvert; // asignamos todos los colaboradores con  0 asistencias
      }else{
          let len_ec = equipoConvert.length;
          let len_ac = asistenciaConvert.length;

          if(len_ec >= len_ac){
            //juntar ambos comparando codigos
            for(var i =0; i<len_ec; i++){
                let codigoeq = equipoConvert[i].num;
                let encontrado ='no'
                for(var k =0; k<len_ac; k++){
                    let codigoac = asistenciaConvert[k].num;
                    if(codigoeq==codigoac){
                      encontrado=k
                    }
                }

                if(encontrado!='no'){ //encontro la asistencia del colaborador 
                    equipoConvert[i].asistencia = asistenciaConvert[encontrado].asistencia //asigno las asistencias 
                    equipoResult.push(equipoConvert[i]);
                }else{
                    equipoResult.push(equipoConvert[i]);
                }

            }
          }else{
             //juntar ambos comparando codigos
             for(var i =0; i<len_ac; i++){
              let codigoac = asistenciaConvert[i].num;
              let encontrado ='no'
              for(var k =0; k<len_ec; k++){
                  let codigoec = equipoConvert[k].num;
                  if(codigoac==codigoec){
                    encontrado=k
                  }
              }

              if(encontrado!='no'){ //encontro la asistencia del colaborador 
                  equipoConvert[encontrado].asistencia = asistenciaConvert[i].asistencia //asigno las asistencias 
                  equipoResult.push(equipoConvert[encontrado]);
              }else{
                  equipoResult.push(asistenciaConvert[i]);
              }

          }
          }

      }

      return equipoResult
    }

    _asistenciaConvert(asistencia){
      let asistenciaConvert=[];
      let  persona = {} //molde
      let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

      if(asistencia == null || asistencia.length==0){
        asistenciaConvert=[];
      }else{
      
        let len_as = asistencia.length

            for(var a =0; a<len_as; a++){
              
              let num_dias_semana = asistencia[a].asistencia.length;  // obtenemos cuandos dias de la semana trae el arreglo
              
              let codigo = asistencia[a].code;

              let indices_dias=[]; // guardar el indice donde se encuentra cada dia por ejemplo la posicion indice[0] su valor sera la pocision del lunes, si su valor es 'no encontrado' es por que no lo encontro.

                  for(var i=0; i<dias.length; i++){ 
                    let encontrado ='no encontrado'
                    let dia = dias[i];  
                      for(var k=0; k<num_dias_semana; k++){  // num_dias_semana trae cuantos dias trabajo la persona
                            let valor = asistencia[a].asistencia[k][dia] 
                            valor == undefined ? encontrado : encontrado =k 
                      }
                    
                    indices_dias.push(encontrado) // añadimos el valor de encontrado, si encontro el dia añadira el indice donde encontro el dia, si no un 'no encontrado'
                  }

                  // Asignamos las asistencias
                    let indice_lunes=indices_dias[0]; // obtenemos la pocision de cada dia  
                    let lunes;
                    if(indice_lunes=='no encontrado'){ //si no se encontro el dia
                        lunes =0;
                    }else{  //si fue encontrado 
                      lunes = parseFloat(asistencia[a].asistencia[indice_lunes].lunes);
                    }
                          
                    let indice_martes=indices_dias[1];
                    let martes;
                    if(indice_martes=='no encontrado'){
                        martes =0;
                    }else{
                      martes = parseFloat(asistencia[a].asistencia[indice_martes].martes);
                    }

                    let indice_miercoles=indices_dias[2];
                    let miercoles;
                    if(indice_miercoles=='no encontrado'){
                        miercoles =0;
                    }else{
                      miercoles = parseFloat(asistencia[a].asistencia[indice_miercoles].miercoles);
                    }

                    let indice_jueves=indices_dias[3];
                    let jueves;
                    if(indice_jueves=='no encontrado'){
                        jueves =0;
                    }else{
                      jueves = parseFloat(asistencia[a].asistencia[indice_jueves].jueves);
                    }

                    let indice_viernes=indices_dias[4];
                    let viernes;
                    if(indice_viernes=='no encontrado'){
                        viernes =0;
                    }else{
                      viernes = parseFloat(asistencia[a].asistencia[indice_viernes].viernes);
                    }

                    let indice_sabado=indices_dias[5];
                    let sabado;
                    if(indice_sabado=='no encontrado'){
                        sabado =0;
                    }else{
                      sabado = parseFloat(asistencia[a].asistencia[indice_sabado].sabado);
                    }

                    let indice_domingo=indices_dias[6];
                    let domingo;
                    if(indice_domingo=='no encontrado'){
                        domingo =0;
                    }else{
                      domingo = parseFloat(asistencia[a].asistencia[indice_domingo].domingo);
                    }
                  
                  // llenar el objeto persona.
                    persona ={
                      nombre: '',
                      num: codigo,
                      asistencia: {
                          lunes: lunes,
                          martes: martes,
                          miercoles: miercoles,
                          jueves: jueves,
                          viernes:viernes,
                          sabado: sabado,
                          domingo:domingo
                      },
                      faltas : 0,
                      retardos: 0,
                      horas_extras: 0
                    }

                    asistenciaConvert.push(persona); 
                  }
            }
            return asistenciaConvert;
    }

    _equipoConvert(equipo){
      let  persona = {} //molde
      let equipoConvert =[];

      if(equipo==null || equipo.length==0){
        equipoConvert =[];
      }else{
        let len_eq = equipo.length
     
        for(var a =0; a<len_eq; a++){
             let nombre = equipo[a].nombre + ' ' + equipo[a].a_paterno + ' ' +  equipo[a].a_materno;
             let codigo = equipo[a].userID;
             // llenar el objeto persona.
             persona ={
              nombre: nombre,
              num: codigo ,
              asistencia: {
                  lunes: 0,
                  martes: 0,
                  miercoles: 0,
                  jueves: 0,
                  viernes:0,
                  sabado: 0,
                  domingo: 0
              },
              faltas : 0,
              retardos: 0,
              horas_extras: 0
            }

            equipoConvert.push(persona); 

        }

      }

      return equipoConvert;

    }

  }


  module.exports = FormatData; 
