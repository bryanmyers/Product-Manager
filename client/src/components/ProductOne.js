import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductOne = (props) => {

  const path = document.location.pathname
  const id = path.substring(path.lastIndexOf('/') +1)

  const [productOne, setProductOne] = useState({})
  
  useEffect( () => {
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => setProductOne(res.data))
    .catch(err => console.log(`ProductOne Get One caught an error ${err}`))
  })

  return (
    <>
      <h2>Product Details</h2>
      <h3>{productOne.title}</h3>
      <p>Price: ${productOne.price}</p>
      <p>Description: {productOne.desc}</p>
      <Link to={`/api/product/edit/${id}`}>Edit</Link>
      <Link to='/api/product'>Return to List</Link>
    </>
  )
}

export default ProductOne