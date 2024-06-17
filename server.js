const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888 ; 
const hostname = process.env.HOST_NAME ;
const configViewEngine = require('./src/config/viewEngine')
const webRouter = require('./src/routers/web')

configViewEngine(app)
app.use('/', webRouter)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})