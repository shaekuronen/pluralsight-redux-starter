// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.wzcwu7vlv
// http://redux.js.org/docs/basics/UsageWithReact.html

import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {frame: 1};
    }
    componentWillMount() {
        this.interval = setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return(
            <span {...this.props}>{text}&nbsp;</span>
        );
    }
}

LoadingDots.defaultProps = {
    interval: 300,
    dots: 3
};

LoadingDots.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};

export default LoadingDots;