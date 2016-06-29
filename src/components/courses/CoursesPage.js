import React from 'react';
import {connect} from 'react-redux';
import {createCourse} from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {title: ""}
        };
        // bind these methods to the CoursesPage component context this
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }
    onClickSave() {
        this.props.dispatch(createCourse(this.state.course));
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
                        {this.props.courses.map(this.courseRow)}
                        <h2>Add Course</h2>
                        <input
                            type="text"
                            onChange={this.onTitleChange}
                            value={this.state.course.title}
                        />
                        <input
                            type="submit"
                            onClick={this.onClickSave}
                            value="Save"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired
};

// ownProps references the components own props
function mapStateToProps(state, ownProps) {
    // state.courses is determined in the rootReducer, by what the courseReducer is imported as
    return {
        courses: state.courses
    };
}

// export component that is decorated by react-redux connect function
// note: connect returns a function
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// the above is equivalent to 
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connectedStateAndProps(<CoursesPage></CoursesPage>)

// by leaving off the mapDispatchToProps, a dispatch method is injected into components props
// which can be called like this.props.dispatch()
export default connect(mapStateToProps)(CoursesPage);