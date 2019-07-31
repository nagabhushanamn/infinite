
import api from '../api'

export function buy(item, qty) {
    return { type: 'BUY', item, qty }
}

export function loadCart() {
    let data = localStorage.getItem('user-cart') || {}
    let cart = JSON.parse(data);
    return { type: 'LOAD_CART_SUCCESS', cart }
}

export function checkout(cart) {
    return function (dispatch) {
        api.checkout(cart)
            .then(response => {
                console.log(response)
            })
    }
}