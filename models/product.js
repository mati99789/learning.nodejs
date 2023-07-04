const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
const getProductFromFile = (cb) => {
    fs.readFile(p, (error, fileContent) => {
        if(error){
            return cb([])
        }

        return cb(JSON.parse(fileContent))
    })
}
module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.title = title;

    }

    save() {
        // for testing
        this.id = Math.random();
        getProductFromFile((products) =>{
            products.push(this)

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductFromFile(cb)
    }

    static findById(id, cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id)
            cb(product)
        })
    }
}