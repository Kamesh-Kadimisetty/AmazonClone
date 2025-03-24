import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue(); // Fixed this line

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkout_Product'>
            <img className='checkoutProduct_image' src={image} alt='' />
            <div className='checkProduct_info'>
                <p className='checkProduct_title'>{title}</p>
                <p className='checkProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating1'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
