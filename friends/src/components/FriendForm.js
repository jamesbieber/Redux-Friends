import { statement } from "@babel/template";

import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/index";

class FriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();

    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    this.props.addFriend(friend);

    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addFriend}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChanges}
        />
        <button>Add to List!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(FriendForm);
