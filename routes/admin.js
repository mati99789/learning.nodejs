const express = require('express')
const path = require('path')
const adminController = require('../controller/admin')


const router = express.Router()

//all routes are access by /admin/...

const products = []

router.get('/add-product', adminController.getAddProduct)

router.get('/products', adminController.getProducts)

router.post('/add-product', adminController.postAddProduct)


module.exports = router

