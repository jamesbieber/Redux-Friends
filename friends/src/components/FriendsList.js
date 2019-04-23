import React from "react";

import { getFriends } from "../actions";
import Friend from "./Friend";
import { connect } from "react-redux";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        {this.props.friend.map(friend => {
          return (
            <Friend name={friend.name} age={friend.age} email={friend.email} />
          );
        })}
      </div>
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
  { getFriends }
)(FriendsList);
