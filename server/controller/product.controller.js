const Product = require('../models/product.model')

const ProductController = {

  //Create
  create: (req, res) => {
    Product.create(req.body)
    .then((NewProduct) => {
      res.json(NewProduct)
    })
    .catch((err) => {
      res.json({message: `ProductController.create Caught an error: ` ,error:err})
    })
  },

  //Read
  findAll: (req, res) => {
    Product.find({})
    .then((products) => {
      res.json(products)
    })
    .catch((err) => {
      res.json({message: `ProductController.findAll Caught an error: ` ,error:err})
    })
  },

  findOne: (req, res) => {
    Product.find({_id: req.params.id})
    .then((product) => {
      res.json(product)
    })
    .catch((err) => {
      res.json({message: `ProductController.findOne Caught an error: ` ,error:err})
    })
  },

  //Update

  update: (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
      .then((updatedProduct) => {
        res.json(updatedProduct)
      })
      .catch((err) => {
        res.json({message: `ProductController.update Caught an error: ` ,error:err})
      })
  },

  //Destroy

    delete: (req, res) => {
      Product.deleteOne(req.params.id)
        .then((deletedProduct) => {
          res.json(deletedProduct)
        })
        .catch((err) => {
          res.json({message: `ProductController.delete Caught an error: ` ,error:err})
        })
    }

}

module.exports = ProductController