require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888 ; 
const hostname = process.env.HOST_NAME ;
const configViewEngine = require('./src/config/viewEngine')
const webRouter = require('./src/routers/web')
const connection = require('./src/config/database');
const { table } = require('console');


app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


configViewEngine(app)
app.use('/', webRouter)



app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})