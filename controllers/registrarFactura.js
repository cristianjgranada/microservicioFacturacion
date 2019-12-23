const couchdb = require('../config/couchdb')
const clsFacturas = require('../clases/obtenerFacturas')

const facturaModel = require('../models/facturaModel')

const objFacturas = {}

objFacturas.registrarFacturas = async (req,res) => {
    
    let data =  await clsFacturas.obtenerFacturas()
    let body = req.body
    body.consecutivo  = data.length || 0
    const validacion = facturaModel.validate(body)
    if(validacion.error){
        return res.json(
            {
                codigo: -98,
                mensaje: "no se suministraron los parametros correctamente",
                data: validacion.error 
            })
    }
    let facturas = couchdb.db.use('facturas')
    facturas.insert(validacion.value)
    return res.json({codigo:0, menasje: 'Factura creada', data: validacion.value })
}

module.exports = objFacturas