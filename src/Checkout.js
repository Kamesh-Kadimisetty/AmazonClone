import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from "./StateProvider";
import Subtotal from './Subtotal';
const Checkout = () => {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
      <img 
      className='checkout__ad'
      src="https://cdn.shulex-voc.com/shulex/upload/2024-07-12/63cb80b1-96b2-45ea-aba2-ef7a4712a06f.png" 
      alt="">
      </img>
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div className='checkout__title'>
          <h2 className='checkout__title1'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}          
              />
          ))}
        </div>
      )}
      </div>
      <div>
        { basket.length > 0 && (
            <div className='checkout__right'>
              {/* <h1>Subtotal</h1> */}
              <Subtotal/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Checkout
