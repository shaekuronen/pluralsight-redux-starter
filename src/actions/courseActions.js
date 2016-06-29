import * as types from './actionTypes'

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course: course
    };
    // in es6 this is equivalent to the above
    // return {type: 'CREATE_COURSE', course}
}
