'use strict'

const db = require ('../infrastructure/mysqlClient');

let queryString = "DROP TABLE IF EXISTS corte;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table corte eliminada");
});

queryString = "DROP TABLE  IF EXISTS lapaz;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table lapaz eliminada");
});

queryString = "CREATE TABLE IF NOT EXISTS `lapaz` (`id`  INT NOT NULL AUTO_INCREMENT,`base0` INT NOT NULL DEFAULT 165,`dias_sucios` VARCHAR(20) NOT NULL DEFAULT '0',`$_extra_m3` VARCHAR(20) NOT NULL DEFAULT '4.20', `depto` VARCHAR(25) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table la paz created");
});

queryString = "INSERT INTO lapaz (base0, dias_sucios, $_extra_m3, depto) VALUES (165, '0', '4.20', 'corte')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in corte");
});

queryString = "INSERT INTO lapaz (base0, dias_sucios, $_extra_m3, depto) VALUES (550, '100', '0.90', 'almacen')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in almacen");
});

queryString = "INSERT INTO lapaz (base0, dias_sucios, $_extra_m3, depto) VALUES (100, '0', '5.50', 'cedi')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in cedi");
});

queryString = "INSERT INTO lapaz (base0, dias_sucios, $_extra_m3, depto) VALUES (100, '0', '5.00', 'chofer-local')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in chofer local");
});

queryString = "INSERT INTO lapaz (base0, dias_sucios, $_extra_m3, depto) VALUES (116, '0', '6.50', 'moldeo')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in moldeo");
});

db.end();


