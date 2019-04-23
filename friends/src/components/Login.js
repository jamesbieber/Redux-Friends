import React from "react";

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
    this.props
      .login(this.state.credentials);
      .then(() => this.props.history.push("/protected"));
  };

  render() {
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

export default Login;
