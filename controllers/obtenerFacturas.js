const couchdb = require('../config/couchdb')
const clsFacturas = require('../clases/obtenerFacturas')

const objFacturas = {}

objFacturas.obtenerFacturas = async (req,res) => {
    if (req.query){
        if (req.query.clienteid){
            let data = await clsFacturas.obtenerFacturas_Cliente(req.query.clienteid)
            return res.json( data)  
        }else if (req.query.consecutivo) {
            let data = await clsFacturas.obtenerFacturas_Factura(req.query.consecutivo)
            return res.json( data)  
        }else {
            let data = await clsFacturas.obtenerFacturas()
            return res.json( data)
        }
    }else {
        let data = await clsFacturas.obtenerFacturas()
        return res.json( data)
    }
}

module.exports = objFacturas