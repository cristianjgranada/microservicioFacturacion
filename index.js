const express = require('express')
var bodyParser = require('body-parser')

const app = express();
const port = 4003

app.use(bodyParser.urlencoded({extended:false}))
app.use (bodyParser.json())

app.use('/API', require('./routes/index'))

app.listen(port, ()=>{
    console.log(`Microsevicio Productos funcionando en puerto ${port}`)
})