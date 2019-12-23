const couchdb = require('../config/couchdb')
const clsFacturas = require('../clases/obtenerFacturas')

const objFacturas = {}

objFacturas.anularFactura = async (req,res) => {
    let factura = req.body.consecutivo
    let facturas = couchdb.db.use('facturas')
    let resultado = await clsFacturas.obtenerFacturas_Factura (factura)
    if (resultado && resultado.codigo && resultado.codigo === -95 ){
        return res.json({codigo:-95 , mensaje: 'Factura no encontrada'})
    }
    resultado.estado = false
    await facturas.insert(resultado)
    return res.json({codigo:0 , mensaje: 'Factura anulda', data: resultado })
}

module.exports = objFacturas