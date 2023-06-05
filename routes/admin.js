
const express = require('express')

const router = express.Router()

//all routes are access by /admin/...
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

router.post('/product', (req, res, next) => {
    res.redirect('/')
})


module.exports = router
