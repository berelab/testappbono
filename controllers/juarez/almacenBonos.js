'use strict'
import bonosModel from '../../models/juarez/almacenBonos';
import SQLBonosRepository from '../../infrastructure/juarez/AlmacenBonosRepository';


const controller = {
	
	home: async (req, res) => {
        const repository = new SQLBonosRepository();
        const model = new bonosModel(repository);

        let  bonos = await model.execute(); 

		return res.status(200).send({
           bonos:  bonos.semanas
        });
    },
  

};


module.exports = controller; 