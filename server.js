const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888 ; 
const hostname = process.env.HOST_NAME ;
const configViewEngine = require('./src/config/viewEngine')
const webRouter = require('./src/routers/web')
const connection = require('./src/config/database');
const { table } = require('console');
configViewEngine(app)
app.use('/', webRouter)

// test connection to server

connection.query(
    // 'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45 ',
    'SELECT * FROM  `User` u ',
    function(err, result,fields) {
        console.log("Result: ",result);
        //console.log("fields: ",fields);
    }
);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})