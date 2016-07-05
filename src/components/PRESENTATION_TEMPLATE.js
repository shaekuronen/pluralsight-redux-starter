// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.wzcwu7vlv
// http://redux.js.org/docs/basics/UsageWithReact.html

import React, {PropTypes} from 'react';

const PRESENTATION_COMPONENT_NAME = ({destructuredProp1, destructuredProp2, etc}) => {
    return (
        <div></div>
    );
}

PRESENTATION_COMPONENT_NAME.propTypes = {
    // myProp: PropTypes.string.isRequired
};

export default PRESENTATION_COMPONENT_NAME;