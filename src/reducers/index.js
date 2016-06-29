import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    // could also just be course, bc es6 shorthand property name
    courses: courses
});

export default rootReducer;