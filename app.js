const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const get404Controller = require('./controller/fallback')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extends: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(get404Controller.get404)

app.listen(3000, () => {
    console.log('Listen...')
})