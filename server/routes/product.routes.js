const PersonController = require('../controller/product.controller')


const routes = (app) => {

  //Create

  app.post('/api/product/', PersonController.create)

  //Read

  app.get('/api/product/', PersonController.findAll)

  app.get('/api/product/:id', PersonController.findOne)

  //Update

  app.put('/api/product/:id', PersonController.update)

  //Delete

  app.delete('/api/product/:id', PersonController.delete)

}

module.exports = routes