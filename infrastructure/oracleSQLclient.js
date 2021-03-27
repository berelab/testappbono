'use strict'
//let connection;
var oracledb = require('oracledb');

/*const config = {
    user: 'appbono',
    password: 'Bshb1WIktB',
    connectString: 'pfanoi'
}*/

oracledb.getConnection({
  user: 'appbono',
  password: 'Bshb1WIktB',
  connectString: 'pfanoi'
})

/*
(async function() {
try{
   connection = await oracledb.getConnection({
        config
   });
   console.log("Successfully connected to Oracle!")
} catch(err) {
    console.log("Error: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log("Error when closing the database connection: ", err);
      }
    }
  }
})()
*/