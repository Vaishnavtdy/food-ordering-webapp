import React from 'react'
import OrderItem from '../OrderItems/OrderItem'
import './Order.css'
import { useStateValue } from '../../StateProvider/StateProvider'
import { getBasketTotal } from '../../StateProvider/reducer'
import { useNavigate } from 'react-router-dom'

function Order() {
    const [{basket}] = useStateValue();
    const navigate = useNavigate()
    return (
        <div className='order__container'>
            <div className='order__top'>
                <h4 className='order__title'>My Order</h4>
                <p className='order__edit'>Edit</p>
            </div>
            <div className='order__content'>
                {basket.map(item => (
                    <OrderItem 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        weight={item.weight}
                        price={item.price}
                        qty={item.qty}
                    />
                ))
                }
            </div>
            <div className='order__drop__icon'>
                <span>Drag&Drop</span>
            </div>
            <div className='order__total'>
                <span>Total</span>
                <span><b>$.{getBasketTotal(basket)}</b></span>
            </div>
            <button onClick={()=> navigate('/checkout')} className='order__checkout__btn'>Checkout</button>
        </div>
    )
}

export default Order