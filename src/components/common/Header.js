import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './loadingDots';

const Header = ({loading}) => {
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
                        {loading && <LoadingDots interval={100} dots={30} />}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
