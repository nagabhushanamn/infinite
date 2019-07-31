import axios from 'axios'
const baseUrl = `http://localhost:8181/api/`;
const api = {
    loadItems(cat, size) {
        return axios.get(baseUrl)
    },
    loadReviews(itemId, size) {
        return axios.get(baseUrl + `items/${itemId}/reviews`)
    },
    addNewReview(itemId, review) {
        return axios.post(baseUrl + `items/${itemId}/reviews`, review)
    },
    checkout(cart) {
        return axios
            .post(baseUrl + `orders`, { cart })
    }
}

export default api;