
import api from '../api'

export function loadReviews(itemId, size) {
    //
    // let reviews = []
    // return { type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }


    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading reviews' })  // async action
        api.loadReviews(itemId, size)
            .then(response => {
                let reviews = response.data;
                dispatch({ type: 'REQUEST_FINISHED', message: '' })  // async action
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews })  // async action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_FAILED', message: err.message })  // async action
            })
    }

}


export function addNewReview(itemId, newReview) {
    //
    // return { type: 'ADD_NEW_REVIEW_SUCCESS', itemId, newReview }

    return function (dispatch) {
        api.addNewReview(itemId, newReview)
            .then(response => {
                let review = response.data;
                dispatch({ type: 'ADD_NEW_REVIEW_SUCCESS', itemId, newReview: review })  // async action
            })
    }
}