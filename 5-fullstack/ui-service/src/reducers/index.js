


import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { statusReducer } from './status'

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    nwStatus: statusReducer
})

export default rootReducer;