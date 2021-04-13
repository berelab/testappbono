'use strict'
class FormatData {
    constructor ( 
       equipo,
       asistencia,
       citycode, 
       depto, 
       ciudad
    ) {
        this.equipo               = equipo;
        this.asistencia           = asistencia;
        this.citycode             = citycode;
        this.depto                = depto;
        this.ciudad               = ciudad;
    }

    // Getters
    get convert () {
        return this._convert(this.equipo, this.asistencia);
    }

    get convertDepto (){
      return this._convertDepto(this.citycode,this.depto, this.ciudad);
    }

    get convertCity (){
      return this._convertCity(this.citycode);
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
                    equipoConvert[i].retardos = asistenciaConvert[encontrado].retardos
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
                  equipoConvert[encontrado].retardos = asistenciaConvert[i].retardos
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
                    let lunesR;
                    if(indice_lunes=='no encontrado'){ //si no se encontro el dia
                        lunes =0;
                        lunesR = 0;
                    }else{  //si fue encontrado 
                      lunes = parseFloat(asistencia[a].asistencia[indice_lunes].lunes);  
                      lunesR =  parseFloat(asistencia[a].retardos[indice_lunes].lunes);           
                    }
                          
                    let indice_martes=indices_dias[1];
                    let martes;
                    let martesR;
                    if(indice_martes=='no encontrado'){
                        martes =0;
                        martesR = 0;
                    }else{
                      martes = parseFloat(asistencia[a].asistencia[indice_martes].martes);
                      martesR =  parseFloat(asistencia[a].retardos[indice_martes].martes);     
                     // console.log({'parse float': asistencia[a].retardos});
                    }

                    let indice_miercoles=indices_dias[2];
                    let miercoles;
                    let miercolesR;
                    if(indice_miercoles=='no encontrado'){
                        miercoles =0;
                        miercolesR = 0;
                    }else{
                      miercoles = parseFloat(asistencia[a].asistencia[indice_miercoles].miercoles);
                      miercolesR =  parseFloat(asistencia[a].retardos[indice_miercoles].miercoles);   
                    }

                    let indice_jueves=indices_dias[3];
                    let jueves;
                    let juevesR;
                    if(indice_jueves=='no encontrado'){
                        jueves =0;
                        juevesR = 0;
                    }else{
                      jueves = parseFloat(asistencia[a].asistencia[indice_jueves].jueves);
                      juevesR =  parseFloat(asistencia[a].retardos[indice_jueves].jueves);  
                    }

                    let indice_viernes=indices_dias[4];
                    let viernes;
                    let viernesR;
                    if(indice_viernes=='no encontrado'){
                        viernes =0;
                        viernesR = 0;
                    }else{
                      viernes = parseFloat(asistencia[a].asistencia[indice_viernes].viernes);
                      viernesR =  parseFloat(asistencia[a].retardos[indice_viernes].viernes);  
                    }

                    let indice_sabado=indices_dias[5];
                    let sabado;
                    let sabadoR;
                    if(indice_sabado=='no encontrado'){
                        sabado =0;
                        sabadoR = 0;
                    }else{
                      sabado = parseFloat(asistencia[a].asistencia[indice_sabado].sabado);
                      sabadoR =  parseFloat(asistencia[a].retardos[indice_sabado].sabado); 
                    }

                    let indice_domingo=indices_dias[6];
                    let domingo;
                    let domingoR
                    if(indice_domingo=='no encontrado'){
                        domingo =0;
                        domingoR = 0;
                    }else{
                      domingo = parseFloat(asistencia[a].asistencia[indice_domingo].domingo);
                      domingoR =  parseFloat(asistencia[a].retardos[indice_domingo].domingo); 
                    }
                    
                    let retardos = lunesR + martesR + miercolesR + juevesR + viernesR + sabadoR + domingoR;

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
                      retardos: retardos,
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
             let factor = equipo[a].factor;
             let dias = equipo[a].dias;
             // llenar el objeto persona.
             persona ={
              nombre: nombre,
              num: codigo ,
              factor_dias_laborados: factor,
              dias: dias,
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

    _convertDepto(citycode, depto, ciudad){
      if(citycode == 'LPZ'){
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Ventas Distribución'){
              if(ciudad == 'Los Cabos'){
                  return 'chofercedi'
              }else{
                  return 'choferlocal'
              }
          }else if(depto == 'Vigueta'){
              return 'vigueta'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'JRZ'){ //-----------------------------------------
          if(depto == 'Aligerante'){
              return 'aligerante'
          }else if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Ao Smith'){
              return 'aosmith'
          }else if(depto == 'CBP'){
              return 'kbrs'
          }else if(depto == 'Mcs frame'){
              return 'mcsframe'
          }else if(depto == 'Commscope'){
              return 'commscope'
          }else if(depto == 'Electrolux'){
              return 'electrolux'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Placa'){
              return 'placa'
          }else if(depto == 'Molino'){
              return 'molino'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferes'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido' //deptos que no se encuentran en la app
          } 
      }else if(citycode == 'CUN'){//-----------------------------------------
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'CLN'){//-----------------------------------------
         if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Panel'){
              return 'panel'
          }else if(depto == 'Ventas Distibución'){
              return 'choferlocal'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'HMO'){//-----------------------------------------
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Corte'){
              return 'corte'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Insulpanel Variable'){
              return 'insulpanel'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else if(depto == 'Moldeo Variable'){
              return 'moldeo'
          }else if(depto == 'Steelfoam'){
              return 'steelfoam'
          }else if(depto == 'Rotulado'){
              return 'rotulado'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'GDL'){//-----------------------------------------
          if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Insulpanel Variable'){
              return 'insulpanel'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else if(depto == 'Molino'){
              return 'molino'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'MDA'){//-----------------------------------------
          if(depto == 'Corte Variable'  || depto == 'EM Cortado'  ){
              return 'corte'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Moldeo Variable'){
              return 'moldeo'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else if(depto == 'Rotulado'){
              return 'rotulado'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'MTY'){//-----------------------------------------
          if(depto == 'EM Cortado'  ){
              return 'emcorte'
          }else if(depto == 'Corte NIP'){
              return 'cortenip'
          }else if(depto == 'Corte'){
              return 'cortel'
          }else if(depto == 'Rotulado'){
              return 'rotulado'
          }else if(depto == 'Molino'){
              return 'molino'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Almacén'){
              return 'almacen'
          }else if(depto == 'Moldeo'){
              return 'moldeo'
          }else if(depto == 'Mantenimiento Industrial'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'NOG'){//-----------------------------------------
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Corte Variable'  || depto == 'EM Cortado'  ){
              return 'corte'
          }else if(depto == 'Moldeo Variable'){
              return 'moldeo'
          }else if(depto == 'Preexpanción Moldeo'){
              return 'preexpansion'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'VH'){//----------------------------------------- pendiente almacen y mantenimiento
          if(depto == 'Preexpansión Bloquera'){
              return 'bloquera'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'VZ'){//----------------------------------------- 
          if(depto == 'EM Cortado'){
              return 'emcorte'
          }else if(depto == 'Moldeo Variable'){
              return 'moldeo'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'Panel'){
              return 'panel'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Steelfoam'){
              return 'steelfoam'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'TIJ'){//-----------------------------------------
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Emco T&G'){
              return 'bonotyg'
          }else if(depto == 'Garantia Corte'){
              return 'bonogarantia'
          }else if(depto == 'Corte Variable'){
              return 'corte'
          }else if(depto == 'EM Cortado'){
              return 'cortemaq'
          }else if(depto == 'Molino'){
              return 'molino'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'QRO'){//-----------------------------------------
          if(depto == 'Almacén Variable'){
              return 'almacen'
          }else if(depto == 'Bloqueras'){
              return 'bloquera'
          }else if(depto == 'Moldeo Variable'){
              return 'moldeo'
          }else if(depto == 'Corte Variable'  || depto == 'EM Cortado'  ){
              return 'corte'
          }else if(depto == 'Ventas Distibución Local'){
              return 'choferlocal'
          }else if(depto == 'Mantenimiento Ind. Variable'){
              return 'mantenimiento'
          }else{
              return 'no-valido'
          } 
      }else if(citycode == 'MXL'){//-----------------------------------------
          return 'no-valido'
      }else if(citycode == 'CMX'){//-----------------------------------------
         if(depto == 'Bloqueras'){
            return 'bloquera'
        }else if(depto == 'Corte Variable'  || depto == 'EM Cortado'  ){
            return 'corte'
        }else if(depto == 'Mantenimiento Ind. Variable'){
            return 'mantenimiento'
        }else{
            return 'no-valido'
        } 
      }else if(citycode == 'RSA'){//-----------------------------------------
          return 'no-valido'
      }else{
          return  'no-valido';
      }
  }


  _convertCity(citycode){
      if(citycode == 'CLN'){
          return 'culiacan'
      }else if(citycode == 'CMX'){
          return 'cdmx'
      }else if(citycode == 'CUN'){
          return 'cancun'
      }else if(citycode == 'GDL'){
          return 'guadalajara'
      }else if(citycode == 'HMO'){
          return 'hermosillo'
      }else if(citycode == 'JRZ'){
          return 'juarez'
      }else if(citycode == 'LPZ'){
          return 'lapaz'
      }else if(citycode == 'MDA'){
          return 'merida'
      }else if(citycode == 'MTY'){
          return 'monterrey'
      }else if(citycode == 'MXL'){
          return 'mexicali'
      }else if(citycode == 'NOG'){
          return 'nogales'
      }else if(citycode == 'QRO'){
          return 'queretaro'
      }else if(citycode == 'RSA'){
          return 'reynosa'
      }else if(citycode == 'TIJ'){
          return 'tijuana'
      }else if(citycode == 'VH'){
          return 'villahermosa'
      }else if(citycode == 'VZ'){
          return 'veracruz'
      }else{
          return  citycode;
      }
  }

  }


  module.exports = FormatData; 
