import React from 'react'
import './OrderItem.css'
import { useStateValue } from '../../StateProvider/StateProvider'

function OrderItem(props) {
    const [{basket}, dispatch] = useStateValue()

    const incrementQty = () => {
        dispatch({
            type: "INCREMENT_QTY",
            item: {
                id: props.id,
                qty: props.qty,
                price: props.price
            }
        })
    }

    const decrementQty = () => {
        dispatch({
            type: "DECREMENT_QTY",
            item: {
                id: props.id,
                qty: props.qty,
                price: props.price
            }
        })
    }

    const removeItem = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            item: {
                id: props.id
            }
        })
    }

    return (
        <div className='order__items'>
            <img src={props.image} className='order__img' alt='' />
            <span className='order--title'><h4 className='order__item__title'>{props.title}</h4> <p className='order__item__quantity'> {props.weight}g</p></span>
            <span className='item__quantity__btn'>
                <p className='btn__items' onClick={decrementQty}>-</p>
                <p className='btn__items'>{props.qty}</p>
                <p className='btn__items' onClick={incrementQty} >+</p>
            </span>
            <p className='order__price'> ${props.price*props.qty}</p>
            <span className='order__delete' onClick={removeItem}>x</span>
        </div>
    )
}

export default OrderItem