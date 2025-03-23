import React, { useState } from 'react';
import './Home.css';
import dailyneeds from "../assets/dailyneeds.jpg";
import makeup from "../assets/makeup.jpg"
import clothing from "../assets/clothing.jpg"
import mobiles from "../assets/mobiles.jpg"
import kitchen from "../assets/kitchen.jpg"
import Product from './Product';

const images = [
    mobiles, dailyneeds, kitchen, makeup, clothing,
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='home'>
      <div className='home__imageContainer'>
        <img
          className='home__image'
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button className='home__arrow home__arrow--left' onClick={handlePreviousImage}>
          <i className='a-icon a-icon-previous-rounded'>
            <span className='a-icon-alt'>Previous slide</span>
          </i>
        </button>
        <button className='home__arrow home__arrow--right' onClick={handleNextImage}>
          <i className='a-icon a-icon-next-rounded'>
            <span className='a-icon-alt'>Next slide</span>
          </i>
        </button>
      </div>
      {/* First row with 2 products */}
      <div className='home__row'>
        <Product
          id="2324"
          title="Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
          price={99999}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-cto-hero-202410?wid=840&hei=504&fmt=jpeg&qlt=90&.v=1731525368099"
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
  );
};

export default Home;
