import React from 'react'
import './Checkout.css'

function Subtotal() {
    return (
        <div>
        <div className='cart__details'>
                      <h3 className='cart__details-heading'>Cart Summary</h3>
                      <div className='cart__details-total-wrapper'>
                        <div className='cart__details-total'> <strong> TOTAL:</strong><p>(1 item)</p> </div> 
                        <div className='cart__details-price'> R59</div> 
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
