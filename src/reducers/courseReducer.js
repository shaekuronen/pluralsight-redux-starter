import * as types from '../actions/actionTypes';

export default function(state = [], action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }

}