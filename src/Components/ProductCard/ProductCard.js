import React from 'react'
import './ProductCard.css'
import Card from 'react-bootstrap/Card'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useStateValue } from '../../StateProvider/StateProvider'

function ProductCard(props) {
  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () =>(
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        weight: props.weight,
        qty: props.qty
      }
    })
  )

  return (
    <div className='product__card'>
      <Card onClick={addToBasket} style={{ width: '14rem' }}>
        <Card.Body className='card__body' style={{ backgroundImage: `url(${props.image})` }}>
          <div className='top__section'>
            <div className='product__rating'>
              <StarIcon className='rating__icon' fontSize="10px" />
              <p className='rating'>{props.rating}</p>
            </div>
            <div className='favourite'>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </div>
          </div>
         <Card.Title className='card__title'>{props.title}<span className='item__quantity'>{props.weight}g</span></Card.Title>
          <p className='card__price'><b>$. {props.price}</b></p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard