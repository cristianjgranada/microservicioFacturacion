const couchdb = require('../config/couchdb')
const clsFactura = {}

clsFactura.obtenerFacturas= async() => {
    
    let facturas = couchdb.db.use('facturas')
    let result = await facturas.find({
        "selector": {
            "consecutivo": {
                "$gt": null
            }
        }
    })
    
    if (!result.docs[0]){
        return {codigo: -95, mensaje: "No se encontraron facturas"} 
    }else {
        return result.docs
    }
        
}

clsFactura.obtenerFacturas_Cliente = async(clienteid) => {
    let facturas = couchdb.db.use('facturas')
    let result = await facturas.find({
        "selector": {
            "clienteid": {
                "$eq" : clienteid
            }
        }
    })
    if (!result.docs[0]){
        return {codigo: -95, mensaje: "No se encontraron facturas"} 
    }else {
        return result.docs[0]
    }
}

clsFactura.obtenerFacturas_Factura = async(consecutivo) => {
    let productos = couchdb.db.use('facturas')
    let result = await productos.find({
        "selector": {
            "consecutivo": {
                "$eq" : parseInt( consecutivo)
            }
        }
    })
    if (!result.docs[0]){
        return {codigo: -95, mensaje: "No se encontraron facturas"} 
    }else {
        return result.docs[0]
    }
}
module.exports = clsFactura