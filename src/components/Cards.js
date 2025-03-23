import React from 'react'
import Product from './Product'
import './Cards.css'
const Cards = () => {
  return (
    <div>
      <h1 className='card'>card</h1>
      <h1 className='card'>card</h1>
      <h1 className='card'>card</h1>
      <h1 className='card'>card</h1>
      <Product
          id="2324"
          title="Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
          price={9000}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-cto-hero-202410?wid=840&hei=504&fmt=jpeg&qlt=90&.v=1731525368099"
        />
        <div className='home__row1'>
        <Product
          id="2324"
          title="Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
          price={99999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="2324"
          title="Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
          price={89000}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="2324"
          title="Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
          price={89000}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-cto-hero-202410?wid=840&hei=504&fmt=jpeg&qlt=90&.v=1731525368099"
        />
      </div>
    </div>
  )
}

export default Cards
