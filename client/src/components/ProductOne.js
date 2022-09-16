import React, { useEffect } from 'react'
import axios from 'axios'

const ProductOne = (props) => {

  const path = document.location.pathname
  const id = path.substring(path.lastIndexOf('/') +1)
  
  useEffect( () => {
    console.log(id)
    axios.get(`/api/product/${id}`)
    .then(res => (console.log(res.data)))
    .catch(err => console.log(`ProductOne Get One caught an error ${err}`))
  })
  //const product = axios find one

  return (
    <>
    <h2>Product Details</h2>
      <h3>product.title</h3>
      <p>product.price</p>
      <p>product.description</p>
      <a href="/api/product">Return to List</a>
    </>
  )
}

export default ProductOne