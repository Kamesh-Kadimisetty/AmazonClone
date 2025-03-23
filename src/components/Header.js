import React from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'; // Updated import
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // Updated import
import "./Header.css"
import { useStateValue } from '../StateProvider';
const Header = () => {
    const [{basket}]=useStateValue();

    console.log(basket);
  return (
    <nav className="header">
        <Link to="/">
        <img  className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
        </Link>   
        <div className='header__search'>
        <input type="text" className='header__searchinput'></input>
        <SearchIcon className='header__searchicon'/>
        </div>
        <div className='header__nav'>
            <Link to="/login" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Hello Kamesh</span>
                    <span className='header__option2'>Sign in</span>
                </div>
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Returns</span>
                    <span className='header__option2'>&Orders</span>
                </div>
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Your</span>
                    <span className='header__option2'>Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className='header__link'>
                <div className='header__optionbasket'>
                    <ShoppingBasketIcon/>
                    <span className='header__option2 header__basketcount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header
