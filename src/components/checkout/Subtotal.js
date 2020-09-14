import React from 'react'
import { useStateValue, } from '../../StateProvider';
import CurrenyFormat from 'react-currency-format'


import { getCartTotal } from '../../reducer';
import './Checkout.css'

function Subtotal() {
 const [ {cart} ] = useStateValue();

    return (
        <div>
        <div className='cart__details'>
                      <h3 className='cart__details-heading'>Cart Summary</h3>
                      <div className='cart__details-total-wrapper'>
                        <div className='cart__details-total'> <strong> TOTAL:</strong><p>({cart.length} item(s) )</p> </div> 
                        <div className='cart__details-price'>  R{getCartTotal(cart)} </div> 
                      </div>
                      <button className='cart__details-button'> Proceed To Checkout</button>
                    </div>
                    <div className='cart__promotion-wrapper'>
                      <div className='cart__promotion-desc'>
                      <p className='cart__promotion-desc-p1'>Spend <strong>R450 or more</strong> to get</p>
                      <p className='cart__promotion-desc-p2'> <strong>FREE DELIVERY </strong>. T&Cs apply</p>
                      </div>
                    </div>
            
        </div>
    )
}

export default Subtotal
