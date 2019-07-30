


export function statusReducer(state = {}, action) {

    let { type } = action;
    switch (type) {
        case 'REQUEST_BEGIN': {
            return { message: action.message }
        }
        case 'REQUEST_FINISHED': {
            return { message: action.message }
        }
        case 'REQUEST_FAILED': {
            return { message: action.message }
        }
        default:
            return state;
    }

}