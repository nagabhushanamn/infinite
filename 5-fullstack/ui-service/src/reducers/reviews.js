
/*

{
    'itemId':[
        {},{}
    ]
}

*/


export function reviewsReducer(state = {}, action) {
    let { type } = action
    switch (type) {
        case 'LOAD_REVIEWS_SUCCESS': {
            let { itemId, reviews } = action;
            let existingReviews = state[itemId] || []
            let newReviews = [...existingReviews, ...reviews]
            state = { ...state, [itemId]: newReviews }
            return state;
        }
        case 'ADD_NEW_REVIEW_SUCCESS': {
            let { itemId, newReview: review } = action;
            let existingReviews = state[itemId] || []
            let newReviews = [...existingReviews, review]
            return { ...state, [itemId]: newReviews }
        }
        default:
            return state;
    }
}