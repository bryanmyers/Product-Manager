const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product', {

  useNewUrlParser: true,
  useUnifiedTopology: true

})

  .then(() => console.log('Database connection established'))
  .catch(err => console.log('Config error: ', err
  ))