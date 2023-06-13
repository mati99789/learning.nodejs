const express = require('express')
const path = require('path')
const productController = require('../controller/products')


const router = express.Router()

//all routes are access by /admin/...

const products = []

router.get('/add-product', productController.getAddProduct)

router.post('/add-product', productController.postAddProduct)


module.exports = router

