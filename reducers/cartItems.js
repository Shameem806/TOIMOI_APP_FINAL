import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod"

const cartItems = (state = [], action) => {

    switch(action.type)
    {
        case 'ADD_TO_CART':
            state =  [...state, action.payload]
            return state

        case 'REMOVE_FROM_CART':
            state = state.filter(cartItem => cartItem.title !== action.payload.title)
            return state
    }
    
    return state
}

export default cartItems