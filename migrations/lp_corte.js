'use strict'

const db = require ('../infrastructure/mysqlClient');


let queryString = "CREATE TABLE IF NOT EXISTS `corte` (`id`  INT NOT NULL AUTO_INCREMENT,`base0` INT NOT NULL DEFAULT 165,`dias_sucios` VARCHAR(10) NOT NULL DEFAULT '0',`$_extra_m3` VARCHAR(9) NOT NULL DEFAULT '4.20', PRIMARY KEY (`id`)) ENGINE=InnoDB;"
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Table corte created");
});

queryString = "INSERT INTO corte (base0, dias_sucios, $_extra_m3) VALUES (165, '0', '4.20')";
db.query(queryString,  (err, result) => {
    if (err) throw err;
    console.log("Base values inserted in corte");
});

db.end();


