'use strict'

import {city, departamentos} from '../../models/cancun/cancun';

const controller = {
    
	data: async (req, res) => {
		return res.status(200).send({
            message: city,
            deptos: departamentos
        });
    },

};

module.exports = controller; 
