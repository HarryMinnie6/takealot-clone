import React from 'react'
import './Product.css'
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue, StateContext } from '../../StateProvider';



function Product( {id, title, price, rating, image, discount} ) {
    const [{basket}, dispatch ] = useStateValue();
//this function will run when the 'add to cart' button is clicked
    const addToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                price: price,
                rating: rating,
                discount: discount,
            }
        })

    }
    return (
        <div className="product">
            <div className='product__image'>
                <div className= 'product__discount'> 
                    <strong >{discount}%  </strong>
                    <strong >OFF  </strong>
                </div>
                <div className='product__imageDiv'> {image} </div>
            </div>
            <div className='product__title'>
                <p> {title} </p>
            </div>
            <div className='product__price'>
                <strong> R{price} </strong>
            </div>
            <div className='product__rating'>
                <p>⭐</p>
                <p>{rating}</p>
            </div>   
            <div className='product__button'>
                <button onClick={addToCart}> 
                <AddIcon className='plus-sign'/> 
                <ShoppingCartIcon className='shopping-cart'/> Add to Cart</button>
            </div>  
        </div>
    )
}

export default Product
