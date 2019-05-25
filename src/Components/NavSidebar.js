import React from 'react';
import { Link } from 'react-router-dom';

class NavSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default NavSidebar;
