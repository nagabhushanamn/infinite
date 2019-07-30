

export function loadReviews(itemId, size) {
    //
    let reviews = [
        { author: 'who@mail.com', stars: 5, body: 'sample-review-1' },
        { author: 'who@mail.com', stars: 2, body: 'sample-review-2' }
    ]
    return { type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }
}


export function addNewReview(itemId, newReview) {
    //
    return { type: 'ADD_NEW_REVIEW_SUCCESS', itemId, newReview }
}