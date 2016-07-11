import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    // could also just be course, bc es6 shorthand property name
    courses: courses,
    authors: authors,
    ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;