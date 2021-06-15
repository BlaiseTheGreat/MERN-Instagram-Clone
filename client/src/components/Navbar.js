import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import M from 'materialize-css';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li>
                    <button
                        className="btn waves-effect waves-light #ef5350 red lighten-1"
                        onClick={() => {
                            localStorage.clear();
                            dispatch({type:"CLEAR"});
                            history.push('/login');
                            M.toast({ html: "logged out successfully", classes: "#ef5350 red lighten-1" });
                        }}
                    >
                        Logout
                    </button>
                </li>
            ]
        } else {
            return [
                <li><Link to="/login">Log in</Link></li>,
                <li><Link to="/signup">Sign up</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white" style={{ color: "black" }}>
                <Link to={state ? "/" : "/login"} className="brand-logo left">MERN Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;