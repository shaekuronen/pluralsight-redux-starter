import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Courses</h1>
                        <CoursesList courses={this.props.courses} />
                    </div>
                </div>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

// ownProps references the components own props
function mapStateToProps(state, ownProps) {
    // state.courses is determined in the rootReducer, by what the courseReducer is imported as
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // without bindActionCreators
        // createCourse: course => dispatch(createCourse(course))
        // with bindActionCreators
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// export component that is decorated by react-redux connect function
// note: connect returns a function
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// the above is equivalent to
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connectedStateAndProps(<CoursesPage></CoursesPage>)

// by leaving off the mapDispatchToProps, a dispatch method is injected into components props
// which can be called like this.props.dispatch()
// export default connect(mapStateToProps)(CoursesPage);
