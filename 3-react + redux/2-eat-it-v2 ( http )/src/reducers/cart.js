



export function cartReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item, qty } = action;
            let { id } = item;
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
            return cart;
        }
        default:
            return state;
    }

}