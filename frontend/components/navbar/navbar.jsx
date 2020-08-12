import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(type) {
    //default action for a button in a form will send post request whcih will cause th page to re-render
    // frontend state & backend state are not the same!
    return (e) => {
      e.preventDefault();
      this.props.openModal(type);
    }
  }
  render() {
    const { currentUser, logout } = this.props;
    const display = currentUser ? (
      <div>
        <p>Hello, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
      <>
        <button onClick={this.handleSubmit("login")} className="navbar-btn" >
          Log In
        </button>
        <button onClick={this.handleSubmit("signup")} className="navbar-btn" >
          Sign Up
        </button>
      </>
    );
    return (
      <header className="navbar">
        <Link to='/'>
        <img className="logo" src={window.logo} ></img>

        </Link>
        <div className="navbar-links">{display}</div>
      </header>
    );
  }
};

export default Navbar;