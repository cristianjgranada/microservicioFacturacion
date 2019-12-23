const Joi = require('@hapi/joi')

module.exports = Joi.object().keys({
    encabezado: Joi.any().required()
    ,resolucionDIAN: Joi.any().required()
    ,facturafecha: Joi.date().required()
    ,consecutivo: Joi.number().required()
    ,clienteid: Joi.string().required()
    ,clientenombre: Joi.string().required()
    ,clienteapellido: Joi.string().required()
    ,producto:Joi.any().required()
    ,iva : Joi.number().required()
    ,estado: Joi.boolean().required()
})