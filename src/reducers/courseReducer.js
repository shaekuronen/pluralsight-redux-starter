export default function(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
            // es6 spread operator ftw
            return [
                ...state,
                Object.assign({}, action.course)
            ]
        default:
            return state;
    }

}