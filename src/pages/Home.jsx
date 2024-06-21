import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='headind'> welcome to the Redux 0 Toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home
