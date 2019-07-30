import axios from 'axios'
const baseUrl = `http://localhost:8181/api/items`;
const api = {
    loadItems(cat, size) {
        return axios.get(baseUrl)
    },
    loadReviews(itemId, size) {
        return axios.get(baseUrl + `/${itemId}/reviews`)
    },
    addNewReview(itemId, review) {
        return axios.post(baseUrl + `/${itemId}/reviews`, review)
    }
}

export default api;