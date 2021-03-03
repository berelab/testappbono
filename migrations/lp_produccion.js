'use strict'

const db = require ('../infrastructure/mysqlClient');

let queryString = "DROP TABLE IF EXISTS produccionlp;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table produccionlp eliminada");
});


queryString = "CREATE TABLE IF NOT EXISTS `produccionlp` (`id`  INT NOT NULL AUTO_INCREMENT,`semana` VARCHAR(20) NOT NULL,`fecha` VARCHAR(20) NOT NULL,`produccion` VARCHAR(20) NOT NULL DEFAULT '0',`depto` VARCHAR(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table produccionlp created");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('1', '14/12/20', '1439.90', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 1 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('2', '21/12/20', '796.72', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('3', '28/12/20', '1.22', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('4', '04/01/21', '1151.95', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('5', '11/01/21', '1084.21', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('6', '18/01/21', '895.39', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('7', '25/01/21', '1224.51', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 corte");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('8', '01/02/21', '868.07', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 corte");
});

/** Bloquera */

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('1', '14/12/20', '270.00', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 1 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('2', '21/12/20', '242.00', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('3', '28/12/20', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('4', '04/01/21', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('5', '11/01/21', '335.00', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('6', '18/01/21', '192.00', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('7', '25/01/21', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 bloquera");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('8', '01/02/21', '236.00', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 bloquera");
});

/** Almacen */

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('1', '14/12/20', '1425.06', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 1 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('2', '21/12/20', '1087.54', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('3', '28/12/20', '0', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('4', '04/01/21', '1240.70', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('5', '11/01/21', '1204.36', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('6', '18/01/21', '1204.62', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('7', '25/01/21', '1367.95', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Almacen");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('8', '01/02/21', '1294.56', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Almacen");
});


/** Chofer Local */

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('1', '14/12/20', '406.38', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 1 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('2', '21/12/20', '138.76', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('3', '28/12/20', '0', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('4', '04/01/21', '156.93', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('5', '11/01/21', '385.25', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('6', '18/01/21', '177.25', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('7', '25/01/21', '221.37', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Chofer");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('8', '01/02/21', '245.42', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Chofer");
});

/** vigueta */

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('1', '14/12/20', '0', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 1 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('2', '21/12/20', '415.90', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('3', '28/12/20', '0', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('4', '04/01/21', '0', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('5', '11/01/21', '411.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('6', '18/01/21', '79.60', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('7', '25/01/21', '828.95', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Vigueta");
});

queryString = "INSERT INTO produccionlp (semana, fecha, produccion, depto) VALUES ('8', '01/02/21', '0', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Vigueta");
});



db.end();
