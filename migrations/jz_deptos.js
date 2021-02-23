'use strict'

const db = require ('../infrastructure/mysqlClient');

let queryString = "CREATE TABLE IF NOT EXISTS `juarez` (`id`  INT NOT NULL AUTO_INCREMENT,`base0` INT NOT NULL,`dias_sucios` VARCHAR(20) NOT NULL,`$_extra_m3` VARCHAR(20) NOT NULL, `depto` VARCHAR(25) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table juarez created");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (31, '100', '16.00', 'aligerante')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in aligerante");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (170, '100', '2.50', 'almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in almacen");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (1640, '100', '0.33', 'aosmith')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in aosmith");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (160, '90', '4.50', 'choferes')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in choferes");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (15, '100', '12.00', 'commscope')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in commscope");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (155, '100', '3.20', 'corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in corte");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (330, '0', '1.45', 'electrolux')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in electrolux");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (6, '100', '45.00', 'kbrs')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in kbrs");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (12, '100', '10.00', 'mcsframe')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in mcsframe");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (94.40, '100', '6.50', 'moldeo')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in moldeo");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (600, '100', '0.25', 'molino')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in molino");
});

queryString = "INSERT INTO juarez (base0, dias_sucios, $_extra_m3, depto) VALUES (38, '100', '15.00', 'placa')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in placa");
});
db.end();


