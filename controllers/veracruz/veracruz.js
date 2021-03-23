'use strict'

import {city, departamentos} from '../../models/veracruz/veracruz';
const controller = {
	
	data: (req, res) => {
		return res.status(200).send({
            message: city,
            deptos: departamentos
        });
    },

};

module.exports = controller; 
