import './Menu.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Menu() {
  return (
    <div className='menu__container'>
      <div className='products__container'>
        <Container>
          <Row xs={1} md='auto' lg='auto'>
            <Col>
              <ProductCard
                id="6565665"
                title="Donought"
                weight={150}
                price={4}
                rating={4.2}
                qty={1}
                image="https://img.freepik.com/free-photo/donat-decorated-sprinkles-icing-white-plate-pink-background-creative-minimalis-food-concept-top-view-flat-lay_77190-3557.jpg?w=740"
              />
            </Col>


            <Col>
              <ProductCard
                id="6454165"
                title="Hanaka"
                weight={150}
                price={4}
                rating={4.2}
                qty={1}
                image="https://t3.ftcdn.net/jpg/04/58/16/18/360_F_458161839_oelBXpJW2Nh4KnFYpHbNHeutX68FtvZb.jpg"
              />
            </Col>
            <Col>
              <ProductCard
                id="12321341"
                title="Fried Egg"
                weight={250}
                price={4.50}
                rating={3.5}
                qty={1}
                image="https://thumbs.dreamstime.com/b/one-turkey-egg-colored-paper-background-food-concept-minimal-style-top-view-alternative-decoration-166224991.jpg"
              />
            </Col>

            <Col>
              <ProductCard
                id="64541665"
                title="Hanaka"
                weight={150}
                price={7}
                rating={4.2}
                qty={1}
                image="https://t4.ftcdn.net/jpg/04/81/44/93/360_F_481449317_XjzJ0PFjOmmz557Ihyn3HLMFlioE7oVW.jpg"
              />
            </Col>

            <Col>
              <ProductCard
                id="65454165"
                title="Capucino"
                weight={150}
                price={10}
                rating={4.2}
                qty={1}
                image=" https://previews.123rf.com/images/olgapink/olgapink2002/olgapink200200254/142177959-fresh-one-cup-cappuccino-coffee-with-milk-on-pastel-blue-color-food-background-top-view-flat-lay-min.jpg"
              />
            </Col>

            <Col>
              <ProductCard
                id="64544165"
                title="Salad"
                weight={150}
                price={10}
                rating={4.2}
                qty={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0CykWb7_1u5Y-DiLPkM4PXX2LwBNgVU_QQ&usqp=CAU"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Menu