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
          title="Samsung Odyssey OLED G9 49-inch(124.4cm) Dual QHD 5120 x 1440 Curved 1800R Gaming Monitor, 240Hz, 0.03ms, FreeSync Premium Pro, G-Sync, Quantum Dot, HDR10+, Speaker, HAS (LS49CG930SWXXL, Silver)"
          price={89999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81PisHwSqhL._SX679_.jpg"
        />
        <div className='home__row1'>
        <Product
          id="2324"
          title="OnePlus Watch 2R with Wear OS 4 by Google,Snapdragon W5 Chipset,Upto 100hrs Battery Life,AMOLED Display,100+ Sports Mode,IP68 & BT Calling [Gunmetal Gray]"
          price={15999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71-fLbOw9eL._SX679_.jpg"
        />
        <Product
          id="2324"
          title="Apple iPad Pro 13″ (M4): Ultra Retina Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera,Face ID, Space Black"
          price={89000}
          rating={5}
          image="https://m.media-amazon.com/images/I/7131GFmmnCL._SX679_.jpg"
          />
        <Product
          id="2324"
          title="Amazon Echo Show 8 (2nd Gen) - Smart speaker with 8 HD screen, stereo sound & hands-free entertainment with Alexa Black"
          price={13900}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </div>
    </div>
  )
}

export default Cards
