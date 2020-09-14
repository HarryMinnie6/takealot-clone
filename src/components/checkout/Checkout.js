import React from 'react'
import { useStateValue, } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'


import './Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {
    const [ {cart} ] = useStateValue();
    return (
        <div className='checkout'>

            {cart?.length === 0 ? (
            <div className='checkout__wrapper'>
                <h2 className='checkout__heading'>Shopping Cart</h2>
                <div className='checkout__cartEmpty'>
                    <div className='checkout__details'>
                        <img className='checkout__image' src={require('./trolley.png')}alt='shopping cart image'/>
                        <div className='checkout__description' >Your shopping cart is empty</div>
                        <Link to='/' className='checkout__button'> Continue Shopping</Link>
                    </div> 
                </div>
            </div>

            ) : ( <div className='cart__wrapper'>
        <h2 className='cart__heading'>Shopping Cart</h2>

        {cart?.map((item) => ( 
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} />
        ))}
        <div className='cart__total'>
            <Subtotal/>       
        </div>
                
               
        
        
       
        </div> 
        
        )}

      </div>
    )
}

export default Checkout
