import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credntials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };

  render() {
    if (this.props.loggedIn === true) {
      this.props.history.push("/protected");
    }

    return (
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChanges}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChanges}
        />
        <button>Log In</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
