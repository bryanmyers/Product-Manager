import React from 'react'
import axios from 'axios'
import styles from '../static/Form.module.css'

const Form = () => {

  const handleSubmit = (e) => {

    e.preventDefault()

    const title = e.target.title.value
    const price = e.target.price.value
    const description = e.target.description.value

    const newProduct = {
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value
    }

    axios.post('http://localhost:8000/api/product/', newProduct)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title'></input>
      <label htmlFor='price'>Price:</label>
      <input type="number" id='price' name='price'></input>
      <label htmlFor='description'>Description:</label>
      <input type="text" id='description' name='description'></input>
      <button type="submit">Create</button>
    </form>
  )
}

export default Form