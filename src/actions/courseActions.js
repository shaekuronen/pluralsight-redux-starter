import * as types from './actionTypes';
import CourseApi from '../api/courseApi';
import {beginAjaxCall, endAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
        dispatch(endAjaxCall());
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

// TODO: implement this instead of throwing error
export function loadCoursesFailure(error) {
    return {
        type: types.LOAD_COURSES_FAILURE,
        error
    };
}

// this is a thunk that will make the async call to courses api
// http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/
export function loadCourses() {
    // thunk always returns a function that accepts dispatch as callback argument
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
        dispatch(endAjaxCall());
    };
}

// sync action
// export function exampleSyncAction(stuff) {
//     return {
//         type: types.EXAMPLE_SYNC_ACTION,
//         stuff
//     }
// }
