
import api from '../api'

export function loadItems(cat, size) {
    //....

    // let items = []
    // return { type: 'LOAD_ITEMS_SUCCESS', items } // sync action

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading items' })  // async action
        api.loadItems(cat, size)
            .then(response => {
                let items = response.data;
                dispatch({ type: 'REQUEST_FINISHED', message: '' })  // async action
                dispatch({ type: 'LOAD_ITEMS_SUCCESS', items })  // async action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_FAILED', message: err.message })  // async action
            })
    }

}