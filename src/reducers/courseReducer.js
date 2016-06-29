import * as types from '../actions/actionTypes'

export default function(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            // es6 spread operator ftw
            return [
                ...state,
                Object.assign({}, action.course)
            ]
        default:
            return state;
    }

}
