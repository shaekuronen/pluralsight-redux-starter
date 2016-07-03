import * as types from './actionTypes';
import CourseApi from '../api/courseApi';

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

// TODO: implement this instead of throwing error
export function loadCoursesFailure(courses) {
    return {
        type: types.LOAD_COURSES_FAILURE,
        courses
    }
}

// this is a thunk that will make the async call to courses api
export function loadCourses() {
    // thunk always returns a function that accepts dispatch as callback argument
    return function(dispatch) {
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}