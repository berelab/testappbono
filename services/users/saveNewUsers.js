'use strict' 
import usersModel from '../../models/users/usersModel';
import usersRepository from '../../infrastructure/users/usersRepository'; 

exports.execute = async (req, res) =>{

    const repository = new usersRepository();
    const modelUsr = new usersModel(repository);
    let  users = await modelUsr.execute(); 
    
    let  users2 = await modelUsr.executeUsers(); 

    let newUsers =[];
    

    for(var i =0; i<users.length; i++){
        let nuevo = 'no-encontrado';
        let num = users[i].num;
        for(var k =0; i<users2.length; i++){
            let num2 = users2[k].num;
            if(num == num2){
               nuevo = 'encontrado';
            }
        } 

        if(nuevo=='no-encontrado'){
            newUsers.push(users[i]);
        }
    }
   

    let saveUsers = await modelUsr.saveUsers(newUsers);
    let len = newUsers.length;
    let status ={
        message: 'Usuarios guardados',
        num:len
    }
    
    return console.log(status)
 
}