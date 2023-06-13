const express = require('express')
const path = require('path')

const productController = require('../controller/products')
const router = express.Router()

router.get('/', productController.getProducts)

module.exports = router
