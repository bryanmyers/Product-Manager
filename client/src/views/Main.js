import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import ProductOne from '../components/ProductOne'
import ProductUpdate from '../components/ProductUpdate'

const Main = (props) => {

  const [products, setProducts] = useState([])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/api/product' element= {
            <>
              <ProductForm products={products} setProducts={setProducts} />
              <hr />
              <ProductList products={products} setProducts={setProducts} />
            </>
            } 
          />
          <Route path='/api/product/edit/:id' element={<ProductUpdate />} />
          <Route path='/api/product/:id' element={<ProductOne />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main