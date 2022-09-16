import React, { useState } from 'react'
import axios from 'axios'
import styles from '../static/ProductForm.module.css'

const ProductForm = (props) => {

  const {products, setProducts} = props

  const handleSubmit = (e) => {

    e.preventDefault()

    const title = e.target.title.value
    const price = e.target.price.value
    const desc = e.target.desc.value

    const newProduct = {
      title: e.target.title.value,
      price: e.target.price.value,
      desc: e.target.desc.value
    }

    axios.post('http://localhost:8000/api/product/', newProduct)
      .then(resp => {
        const newList = [...products, newProduct]
        setProducts(newList)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h2>Product Manager</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title'></input>
        <label htmlFor='price'>Price:</label>
        <input type="number" id='price' name='price'></input>
        <label htmlFor='desc'>Description:</label>
        <input type="text" id='desc' name='desc'></input>
        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default ProductForm