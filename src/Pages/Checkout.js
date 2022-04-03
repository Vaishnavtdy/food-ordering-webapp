import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import CheckOut from '../Components/Checkout/CheckOut'

function Checkout() {
  return (
    <div>
      <Navbar />
      <div className='checkout__content'>
        <CheckOut />
      </div>

    </div>
  )
}

export default Checkout