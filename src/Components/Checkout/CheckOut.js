import React from 'react'
import './CheckOut.css'
import Table from 'react-bootstrap/Table'
import { useStateValue } from '../../StateProvider/StateProvider'
import {getBasketTotal} from '../../StateProvider/reducer'

function CheckOut() {
    const [{ basket }] = useStateValue()
    return (
        <div className='checkout__div'>
            <h1 className='checkout__title'>Orders</h1>
            <div className='checkout__details'>
                <Table className='checkout__table' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map((item) => (
                            <tr>
                                <td> <img className='checkout__img' src={item.image} /> </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.qty}</td>
                                <td>${item.qty* item.price}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className='checkout__bottom'>
                    <span className='checkout__total'><b>Total:  ${getBasketTotal(basket)}</b></span>
                    <button className='checkout__btn' type='submit'> Submit </button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut