const express = require('express')
var bodyParser = require('body-parser')

const app = express();
const port = 4003

app.use(bodyParser.urlencoded({extended:false}))
app.use (bodyParser.json())

console.log("URL BD", process.env.COUCHDB_URL || 'http://localhost:5984');

app.use('/API', require('./routes/index'))

app.listen(port, ()=>{
    console.log(`Microsevicio Facturacion funcionando en puerto ${port}`)
})