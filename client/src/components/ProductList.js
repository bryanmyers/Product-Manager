import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from '../static/ProductList.module.css'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

  const {products, setProducts} = props

  useEffect(() => {
    axios.get('http://localhost:8000/api/product/')
    .then(res => {
      setProducts(res.data)
    })
    .catch(err => console.log(`ProductList caught an error: ${err}`))
  }, []
  )

  const productList = products.map((product, index) => <li key={index}><Link to={`/api/product/${product._id}`}>{product.title}</Link></li>)

  return (
    <>
      <h2>Product List</h2>
      <ul>
        {productList}
      </ul>
    </>

  )
}

export default ProductList