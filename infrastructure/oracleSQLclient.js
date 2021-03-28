'use strict'
//let connection;
var oracledb = require('oracledb');

async function run() {
  try {
    connection = await oracledb.getConnection({
      user          : "appbono",
      password      : "Bshb1WIktB",
      connectString : "localhost/pfanoi"
    });

    result = await connection.execute(`SELECT * FROM all_tables`);
    console.log("Result is:", result);

  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();   // Always close connections
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

run();

/*const config = {
    user: 'appbono',
    password: 'Bshb1WIktB',
    connectString: 'pfanoi'
}*/

/*const connectionodb = await oracledb.getConnection({
  user: 'appbono',
  password: 'Bshb1WIktB',
  connectString: 'localhost:1521/pfanoi',
});

async function run() {
  let connection;
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
}

    run();*/



  /*const run = async() =>{
    let pool;

    try {
        console.log('Connection Opening..');
        pool = await mssql.connect(config);
        // const { recordset } = await sql.query`select * from users;`;
        console.log('Connected');
    } catch (err) {
        console.log(err);

    }finally{
        await pool.close();
        console.log('Connection closed');
    }
}

run();*/
