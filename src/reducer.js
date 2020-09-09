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
        return {state};
        
        default:
            return state;
    }
}

export default reducer