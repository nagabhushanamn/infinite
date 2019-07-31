



export function cartReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'LOAD_CART_SUCCESS': {
            let { cart } = action;
            return cart;
        }
        case 'BUY': {
            let { item, qty } = action;
            let { _id: id } = item;
            let cart = state;
            let cartLine = cart[id];
            qty = qty || 1
            if (cartLine) {
                cartLine = { ...cartLine, qty: cartLine.qty + qty }
            }
            else {
                cartLine = { item, qty: 1 }
            }
            cart = { ...cart, [id]: cartLine }
            if (cartLine.qty === 0)
                delete cart[id]
            localStorage.setItem('user-cart', JSON.stringify(cart))
            return cart;
        }
        default:
            return state;
    }

}