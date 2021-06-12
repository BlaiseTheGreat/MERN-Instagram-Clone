import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white" style={ { color: "black"} }>
                <Link to="/" className="brand-logo left">MERN Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;