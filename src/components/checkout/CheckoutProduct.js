import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Checkout.css'
import { useStateValue } from '../../StateProvider';


function CheckoutProduct({id,title,price,rating, image}) {
    const [{cart} , dispatch] = useStateValue();

    const removeFromCart =() => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });

    }
    return (
        // <div className='cart__wrapper'>
        <div className='cart__contents'>
            <div className='cart__item'>

                <div className='cart__item-wrapper'>
                    <img className='cart__image' src={image} alt='product image'/>

                    <div className='cart__item-description'>
                        <div className='cart__item-description-title' >
                            <p> {title} </p>
                            
                        </div>
                        <div className='cart__item-description-stock' >
                             <strong className='in-stock'> Instock </strong>
                            <p className='in-stock-cpt'>CPT</p>
                            <p className='in-stock-jhb'>JHB</p>
                            <p className='in-stock-arrival'>When do I get it?</p>
                        </div> 
                        <div className='exchange__details'>
                            <p className='exchange1'>Hassle-Free Exchanges & Returns for 30 Days.</p>
                            <p className='exchange2'>6-Month Limited Warranty.</p>                  
                        </div>
                    </div>

                    <div className='cart__item-option'>
                        <div className='cart__item-option-price' >
                            <h2> R{price} </h2>
                            <div> Qty: 1
                            </div>
                        </div>
                        <div className='removal-and-saving'>
                            <button className='remove' onClick={removeFromCart}> <DeleteIcon /> remove</button>
                            <button className='wishlist'> <FavoriteIcon /> Move to list</button>                  
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
        
    // </div>
    )
}

export default CheckoutProduct
