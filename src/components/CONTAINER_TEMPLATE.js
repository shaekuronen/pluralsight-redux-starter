// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.wzcwu7vlv
// http://redux.js.org/docs/basics/UsageWithReact.html

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as templateActions from '../actions/ACTIONS_TEMPLATE';
import {bindActionCreators} from 'redux';

class CONTAINER_COMPONENT_NAME extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(
            <div></div>
        );
    }
}

CONTAINER_COMPONENT_NAME.propTypes = {
    actions: PropTypes.object.isRequired
};

// ownProps references the components own props
function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

// makes actions available under this.props.actions
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(templateActions, dispatch)
    };
}

// exports component that has been decorated by react-redux connect function
// 
// note: connect returns a function, which is why the ()() syntax works
// 
// if mapDispatchToProps is passed as argument to connect
// a dispatch method is injected into a component's props
// which can be called with this syntax this.props.dispatch()
export default connect(mapStateToProps, mapDispatchToProps)(CONTAINER_COMPONENT_NAME);