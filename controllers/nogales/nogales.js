'use strict'

import {city, departamentos} from '../../models/nogales/nogales';
const controller = {
	
	data: (req, res) => {
		return res.status(200).send({
            message: city,
            deptos: departamentos
        });
    },

};

module.exports = controller; 
