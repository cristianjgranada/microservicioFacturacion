const {Router} = require('express')
const router = Router()

const objRegistrarFactura = require('../controllers/registrarFactura')
const objObtenerFacturas = require('../controllers/obtenerFacturas')
const objAnularFacturas = require('../controllers/anularFactura')

router.get('/facturas/:facturaid' , objObtenerFacturas.obtenerFacturas)

router.get('/facturas/:clienteid', objObtenerFacturas.obtenerFacturas)

router.get('/facturas', objObtenerFacturas.obtenerFacturas)

router.post('/facturas', objRegistrarFactura.registrarFacturas)

router.put('/anularfactura', objAnularFacturas.anularFactura )

router.get('/test' , (req,res) => {
    res.json({'Mensaje': 'Esto es una prueba' })
} )

module.exports = router