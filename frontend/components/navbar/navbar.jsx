import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render () {

        const {currentUser, logout} = this.props;
        const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
        ) : (
        <>
        <Link className='btn' to='/signup'>Sign Up</Link>
        <Link className='btn' to='/login'>Log In</Link>
        </>
        )
        return (
            <header className="navbar">
                <h1 className="logo">BedNBreakfast</h1>
                <div>
                    {display}
                </div>
            </header>
        )
    }


};

export default Navbar;