export function createCourse(course) {
    return {
        type: 'CREATE_COURSE', 
        course: course
    };
    // in es6 this is equivalent to the above
    // return {type: 'CREATE_COURSE', course}
}