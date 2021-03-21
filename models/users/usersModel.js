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
    
    _convertData(response) {
        let users = []
        let admins = [];
        let len =response.response.recordset.length;

        for(var i =0; i<len; i++){
            let role =  response.response.recordset[i].puesto;
            let name = response.response.recordset[i].nombre  + ' ' + response.response.recordset[i].a_paterno  + ' ' +  response.response.recordset[i].a_materno; 
            let userID = response.response.recordset[i].codigo;
            let email = response.response.recordset[i].email;
            let pass = response.response.recordset[i].codigo;
            let planta = response.response.recordset[i].planta;
            let depto = response.response.recordset[i].depto;

            let ciudad =  response.response.recordset[i].ciudad;
            
            let clncity = planta.replace(/\s+/g, ''); //limpiar espacios en blanco
            let clnrole = role.replace(/\s+/g, '');
            
            let cityrute = this._convertCity(clncity); // planta convertida para ser usada en la ruta en el front.
            let deptorute = this. _convertDepto(clncity, depto, ciudad); // depto convertido para ser usada en la ruta en el front.

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
    
                users.push(user)
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
                return 'no-filtrado'
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
                return 'no-filtrado' //deptos que faltan de asignar
            } 
        }else if(citycode == 'CUN'){//-----------------------------------------
            return depto
        }else if(citycode == 'GDL'){//-----------------------------------------
            return depto
        }else if(citycode == 'HMO'){//-----------------------------------------
            return depto
        }else if(citycode == 'CMX'){//-----------------------------------------
            return depto
        }else if(citycode == 'CLN'){//-----------------------------------------
            return depto
        }else if(citycode == 'MDA'){//-----------------------------------------
            return depto
        }else if(citycode == 'MTY'){//-----------------------------------------
            return depto
        }else if(citycode == 'MXL'){//-----------------------------------------
            return depto
        }else if(citycode == 'NOG'){//-----------------------------------------
            return depto
        }else if(citycode == 'QRO'){//-----------------------------------------
            return depto
        }else if(citycode == 'RSA'){//-----------------------------------------
            return depto
        }else if(citycode == 'TIJ'){//-----------------------------------------
            return depto
        }else if(citycode == 'VH'){//-----------------------------------------
            return depto
        }else if(citycode == 'VZ'){//-----------------------------------------
            return depto
        }else{
            return  citycode;
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
