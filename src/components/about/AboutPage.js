import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About Page</h1>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default AboutPage;
