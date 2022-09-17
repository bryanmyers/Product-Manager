import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../static/ProductOne.module.css'

const ProductOne = (props) => {

  const path = document.location.pathname
  const id = path.substring(path.lastIndexOf('/') +1)

  const [productOne, setProductOne] = useState({})

  const navigate = useNavigate()
  
  useEffect( () => {

    axios.get(`http://localhost:8000/api/product/${id}`)

    .then(res => setProductOne(res.data))

    .catch(err => console.log(`ProductOne Get One caught an error ${err}`))
  })

  const handleDelete = (id) => {

    axios.delete(`http://localhost:8000/api/product/${id}`)

    .then(navigate('/api/product'))
    
    .catch(err => console.log(`ProductList delete caught an error: ${err}`))
  }

  return (
    <>
      <h2>Product Details</h2>
      <h3>{productOne.title}</h3>
      <p>Price: ${productOne.price}</p>
      <p>Description: {productOne.desc}</p>
      <Link className={styles.block} to={`/api/product/edit/${id}`}>Edit</Link>
      <button onClick={() => handleDelete(productOne._id)} >Delete</button>
      <Link className={styles.block} to='/api/product'>Return to List</Link>
    </>
  )
}

export default ProductOne