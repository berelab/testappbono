'use strict'

import cron from 'node-cron';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import https from 'https';
import http from 'http';
import saveUsers from './services/users/saveNewUsers'
import reporteLP  from  './services/reportes/lapaz';
import reporteJZ  from  './services/reportes/juarez';
import reporteNG  from  './services/reportes/nogales';
import reporteCN  from  './services/reportes/cancun';
import reporteCX  from  './services/reportes/cdmx';
import reporteCL  from  './services/reportes/culiacan';
import reporteGL  from  './services/reportes/guadalajara';
import reporteHM  from  './services/reportes/hermosillo';
import reporteMD  from  './services/reportes/merida';
//import reporteMX  from  './services/reportes/mexicali';
import reporteMT  from  './services/reportes/monterrey';
import reporteQR  from  './services/reportes/queretaro';
import reporteTJ  from  './services/reportes/tijuana';
import reporteVZ  from  './services/reportes/veracruz';
import reporteVH  from  './services/reportes/villahermosa';

const app = express();
const httpapp = express();
const local_port = 80;

const options = {
    key: fs.readFileSync('C:\\certificates\\appbono.fanosa.com-key.pem'),
    cert: fs.readFileSync('C:\\certificates\\appbono.fanosa.com-crt.pem')
}

/*
cron.schedule('00 20 * * 6', function() { //   '00 12 * * 7'  ->minuto 00 a las 12pm   todos los dias  todos los meses que sea domingo(7).
    reporteLP.generar();
    reporteJZ.generar();
    reporteNG.generar();
    reporteCN.generar();
    reporteCX.generar();
    reporteCL.generar();
    reporteGL.generar();
    reporteHM.generar();
    reporteMD.generar();
    reporteMT.generar();
    reporteQR.generar();
    reporteTJ.generar();
    reporteVZ.generar();
    reporteVH.generar();
});*/

cron.schedule('00 13 * * *', function() { //guardar usuarios nuevos
    saveUsers.execute();
 });

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/api'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

httpapp.set('port', process.env.PORT || local_port);
httpapp.get("*", function (req, res, next) {
    res.redirect("https://" + req.headers.host + "/" + req.path);
});

app.set('port', process.env.PORT || 443);

http.createServer(httpapp).listen(httpapp.get('port'), function() {
    console.log('HTTP Server listening on port ' + httpapp.get('port'));
});

https.createServer(options, app).listen(app.get('port'), ()=> {
    console.log('HTTPS Server Listening on port: ', app.get('port'));
})