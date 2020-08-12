import React from 'react';
// simply view element
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    // type is key of state, depending on key we will handle the input
    handleInput(type) {
        // we want to take in our event object
        return (e) => {
            // setState is a built-in method to change slice of state
        this.setState({ [type]: e.target.value})
        };
    }
    // takes in event
    handleSubmit(e) {
        //default action for a button in a form will send post request whcih will cause th page to re-render
        // frontend state & backend state are not the same!
        e.preventDefault();
        debugger
        this.props.createNewUser(this.state)
    }

    render(){
        return (
          <div className="session-form">
            <h2 className="modal-title">Sign Up</h2>
            <form className="modal-form">
              <label className="modal-textbox-label">
                Username:
                <input
                  className="modal-textbox"
                  type="text"
                  // if we want prefilled value of information
                  value={this.state.username}
                  // jsx/react method, whenever we change value it will call handleinput
                  // we can think of it as a listener, listens for changes even single char in input field
                  onChange={this.handleInput("username")}
                />
              </label>
              <label className="modal-textbox-label">
                Password:
                <input
                  className="modal-textbox"
                  type="password"
                  // value={this.state.password}
                  // jsx/react method, whenever we change value it will call handleinput
                  onChange={this.handleInput("password")}
                />
              </label>
              <button
                className="modal-submit-button"
                onClick={this.handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        );
    }
}

export default Signup;