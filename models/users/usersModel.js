'use strict'

class userModel {
    constructor(repository){
        this.repository = repository;
    }

    async execute() {
        let response;

        try {
            response = await this.repository.find();
        } catch(error) {
            throw error;
        }

     
        return this._convertData(response);
    }

    async executeUsers() {
        let response;

        try {
            response = await this.repository.findUsers();
        } catch(error) {
            throw error;
        }

        return  response.response.recordset;
    }

    async executeClr() {
        let response;

        try {
            response = await this.repository.clear();
        } catch(error) {
            throw error;
        }

        return  response.response.recordset;
    }

    async saveUsers(users) {
        let response;

        try {
            response = await this.repository.insert(users);
        } catch(error) {
            throw error;
        }

        return response;
    }

    //usado para enviar un email despues de actualizar la password. 
    async getUser(num) {
        let response;

        try {
            response = await this.repository.findUser(num);
        } catch(error) {
            throw error;
        }

        return  response;
    }

    
    async updatePass(num, password) {
        let response;

        try {
            response = await this.repository.update(num, password);
        } catch(error) {
            throw error;
        }

        return response;
    }
    
    _convertData(response) {
        let users = []
        let admins = [];
        let len =response.response.recordset.length;

        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ123456789";

        for(var i =0; i<len; i++){
            let role =  response.response.recordset[i].puesto;
            let name = response.response.recordset[i].nombre  + ' ' + response.response.recordset[i].a_paterno  + ' ' +  response.response.recordset[i].a_materno; 
            let userID = response.response.recordset[i].codigo;
            let email = response.response.recordset[i].email;
            // let pass = response.response.recordset[i].codigo; 
            let planta = response.response.recordset[i].planta;
            let depto = response.response.recordset[i].depto;

            let ciudad =  response.response.recordset[i].ciudad;
            
            let clncity = planta.replace(/\s+/g, ''); //limpiar espacios en blanco
            let clnrole = role.replace(/\s+/g, '');
            
            let cityrute = this._convertCity(clncity); // planta convertida para ser usada en la ruta en el front.
            let deptorute = this. _convertDepto(clncity, depto, ciudad); // depto convertido para ser usada en la ruta en el front.

            let pass = "";
            for (var k=0; k<8; k++){
                pass +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
            }

            if(clnrole == '039' || clnrole == '230' || clnrole == '056'){
                let admin = {
                    id: userID,
                    name: name,
                    num: userID,
                    email: email ,
                    password: pass,
                    role: clnrole, 
                    city: cityrute,
                    depto: depto  
                }
    
                admins.push(admin)
            }else{
                let user = {
                    id: userID,
                    name: name,
                    num: userID,
                    email: email ,
                    password: pass,
                    role: clnrole, 
                    city: cityrute,
                    depto: deptorute    
                }
                if(deptorute != 'no-valido'){ //solo agregar los colaboradores con departamentos que si estan en la app
                    users.push(user)  
                } 
                //users.push(user)
            }
          
        }

        for(var i=0; i < admins.length; i++){
            users.push(admins[i]);
        }


       
       
        return users
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
        }else if(citycode == 'VZ'){//----------------------------------------- pendiente bloquera,corte,contruspanel, almacen, choferes,almacen cedi, mantenimiento, chofercedi, steelfoam
            if(depto == 'EM Cortado'){
                return 'emcorte'
            }else if(depto == 'Moldeo'){
                return 'moldeo'
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
            return 'no-valido'
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


   
};

module.exports = userModel;
