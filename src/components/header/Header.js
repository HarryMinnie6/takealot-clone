import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import {} from '../components/state-provider/StateProvider'
import { useStateValue, } from '../../StateProvider';

import "./Header.css"

function Header() {
    const [ {cart} ] = useStateValue();
    console.log(cart);

    return (
    <nav className='header'>
        <div className='header__wrapper'>
            <Link to='/' >
                <img className="header__logo" src={require('./t-logo.png')} alt='logo'/>
            </Link> 
            
            <div className='header__nav1'>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>Help</span>
                    </div>
                </Link>
                <div className='vl'></div>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>Sell on Takealot</span>
                    </div>
                </Link>
            </div>

            <div className='header__nav2'>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>Login</span>
                    </div>
                </Link>
                <div className='vl'></div>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>Register</span>
                    </div>
                </Link>
                <div className='vl'></div>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>Orders</span>
                    </div>
                </Link>
                <div className='vl'></div>
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <span>My Account</span>
                    </div>
                </Link>
            
                <Link to='/login' className='header__link'> 
                    <div className='header__option'>
                        <div className='header__favorites'>
                            <FavoriteIcon className='header__favIcon'/>
                        </div>    
                    </div>
                </Link>
                
                <Link to='/checkout' className='header__cartLink'> 
                    <div className='header__cartOption'>
                        <div className='header__cart'>
                            <ShoppingCartIcon className='header__cartIcon' />
                            <div className='header__cartAmount'>  {cart?.length} </div>   
                        </div>  
                    </div>
                </Link>
            </div>
            
        </div>
    </nav>
    )
}

export default Header