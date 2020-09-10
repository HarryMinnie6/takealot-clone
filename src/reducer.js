// this is where all the data layer logic goes

export const initialState = {
    cart: [],   
}


//the reducer listens for actions
function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
        //CODE FOR ADDING TO BASKET
        return {
            ...state,
            cart:[...state.cart, action.item],
        };
        case 'REMOVE_FROM_CART':
        //CODE FOR REMOVING TO BASKET

        //cloning the basket
        let newCart = [...state.cart]
        
        const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

        if(index >=0){
            //if item exists in basket, remove it...
            newCart.splice(index, 1);
        } else{
            console.warn(`item (id: ${action.id}) is not in the cart`)
        } 

        return {...state, cart: newCart};
        
        default:
            return state;
    }
}

export default reducer