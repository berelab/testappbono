'use strict'
import produccionModel from '../../models/deptos/ProduccionModel';
import SQLproduccionRepository from '../../infrastructure/culiacan/panelProdRepo';


const controller = {
	
	home: async (req, res) => {
        const repository = new SQLproduccionRepository();
        const model = new produccionModel(repository);

        let  produccion = await model.execute(); 

		return res.status(200).send({
           produccion:  produccion.semanas
        });
    },
  

};


module.exports = controller; 
