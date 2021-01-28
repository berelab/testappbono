'use strict'

const mysql = require ('mysql');

//create connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '12345',
  database : 'fanosa',
  port     : '3306' 
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Mysql connected as id ' + connection.threadId);
});


module.exports = connection; 