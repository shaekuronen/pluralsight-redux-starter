import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <nav>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                        {" | "}
                        <Link to="/about" activeClassName="active">About</Link>
                        {" | "}
                        <Link to="/courses" activeClassName="active">Courses</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
