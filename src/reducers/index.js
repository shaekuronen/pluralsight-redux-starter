import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    // could also just be course, bc es6 shorthand property name
    courses: courses,
    authors: authors
});

export default rootReducer;