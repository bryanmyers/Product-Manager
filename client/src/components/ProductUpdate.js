import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductUpdate = () => {

  const path = document.location.pathname
  const id = path.substring(path.lastIndexOf('/') +1)

  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [desc, setDesc] = useState()

  const navigate = useNavigate()
  
  useEffect( () => {
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => {
      setTitle(res.data.title)
      setPrice(res.data.price)
      setDesc(res.data.desc)
    })
    .catch(err => console.log(`ProductUpdate Get caught an error ${err}`))
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    const title = e.target.title.value
    const price = parseInt(e.target.price.value)
    const desc = e.target.desc.value

    const updatedProduct = {
      title: e.target.title.value,
      price: e.target.price.value,
      desc: e.target.desc.value
    }

    axios.put(`http://localhost:8000/api/product/edit/${id}`, updatedProduct)

    .then(navigate('/api/product/'))
    
    .catch(err => console.log(`ProductUpdate Put caught an error: ${err}`))
  }

  return (
  <>
    <h2>Product Update</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)}></input>
      <label htmlFor='price'>Price:</label>
      <input type="number" id='price' name='price' value={price} onChange={e => setPrice(e.target.value)}></input>
      <label htmlFor='desc'>Description:</label>
      <input type="text" id='desc' name='desc' value={desc} onChange={e => setDesc(e.target.value)}></input>
      <button type="submit">Update</button>
    </form>
  </>

  )
}

export default ProductUpdate