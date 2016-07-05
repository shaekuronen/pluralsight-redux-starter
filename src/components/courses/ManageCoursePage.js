import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {browserHistory} from 'react-router';
import CourseApi from '../../api/CourseApi';

class ManageCoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        // bind this to updateCourseState
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        // if the props have actually changed (bc react will sometimes execute componentWillReceiveProps if it can't tell if props have changed)
        if (this.props.course.id != nextProps.course.id) {
            // hydrate form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        browserHistory.push('/courses');
    }
    updateCourseState(event) {
        const field = event.target.name; 
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <h1>Manage Course</h1>
                        <CourseForm
                            course={this.state.course}
                            allAuthors={this.props.authors}
                            onSave={this.saveCourse}
                            onChange={this.updateCourseState}
                            errors={this.state.errors}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0];
    return null;
}

ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    if (ownProps.params.id && state.courses.length > 0) {
        course = getCourseById(state.courses, ownProps.params.id);
    }
    // the author data from api does not have same shape as data needed by SelectInput component, so this function transforms
    const authorsDataFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName  
        }
    });
    return {
        course: course,
        authors: authorsDataFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);