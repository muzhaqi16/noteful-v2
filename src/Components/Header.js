import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1><Link to="/">Noteful</Link></h1>
            </div>
        );
    }
}

export default Header;
