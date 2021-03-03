'use strict'

const db = require ('../infrastructure/mysqlClient');

let queryString = "DROP TABLE IF EXISTS bonoslp;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table bonoslp eliminada");
});

queryString = "CREATE TABLE IF NOT EXISTS `bonoslp` (`id`  INT NOT NULL AUTO_INCREMENT,`semana` VARCHAR(20) NOT NULL,`fecha` VARCHAR(20) NOT NULL,`bono` VARCHAR(20) NOT NULL DEFAULT '0',`depto` VARCHAR(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table bonoslp created");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('1', '14/12/20', '1222.95', 'Corte')";
db.query(queryString,  (err, result) =>{
    if (err) throw err;
    console.log("Base values inserted in semana 1 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('2', '21/12/20', '679.35', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('3', '28/12/20', '0', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('4', '04/01/21', '1112.37', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('5', '11/01/21', '1166.68', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('6', '18/01/21', '784.76', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('7', '25/01/21', '1743.55', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 corte");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('8', '01/02/21', '804.30', 'Corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 corte");
});

/**Bloquera */

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('1', '14/12/20', '1451.50', 'Bloquera')";
db.query(queryString,  (err, result) =>{
    if (err) throw err;
    console.log("Base values inserted in semana 1 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('2', '21/12/20', '1105.65', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('3', '28/12/20', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('4', '04/01/21', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('5', '11/01/21', '1790.75', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('6', '18/01/21', '921.38', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('7', '25/01/21', '0', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 bloquera");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('8', '01/02/21', '998.40', 'Bloquera')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 bloquera");
});

/** Almacen */

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('1', '14/12/20', '938.80', 'Almacen')";
db.query(queryString,  (err, result) =>{
    if (err) throw err;
    console.log("Base values inserted in semana 1 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('2', '21/12/20', '767.75', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('3', '28/12/20', '0', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('4', '04/01/21', '913.10', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('5', '11/01/21', '772.30', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('6', '18/01/21', '714.70', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('7', '25/01/21', '168.80', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Almacen");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('8', '01/02/21', '936.30', 'Almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Almacen");
});



/** Chofer local */

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('1', '14/12/20', '1686.30', 'Chofer')";
db.query(queryString,  (err, result) =>{
    if (err) throw err;
    console.log("Base values inserted in semana 1 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('2', '21/12/20', '341.20', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('3', '28/12/20', '0', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('4', '04/01/21', '488.00', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('5', '11/01/21', '1526.30', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('6', '18/01/21', '400.60', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('7', '25/01/21', '1442.60', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Chofer");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('8', '01/02/21', '2455.00', 'Chofer')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Chofer");
});

/** vigueta */

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('1', '14/12/20', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) =>{
    if (err) throw err;
    console.log("Base values inserted in semana 1 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('2', '21/12/20', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 2 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('3', '28/12/20', '0', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 3 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('4', '04/01/21', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 4 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('5', '11/01/21', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 5 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('6', '18/01/21', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 6 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('7', '25/01/21', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 7 Vigueta");
});

queryString = "INSERT INTO bonoslp (semana, fecha, bono, depto) VALUES ('8', '01/02/21', '600.00', 'Vigueta')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in semana 8 Vigueta");
});

db.end();


