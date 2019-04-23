import React from "react";
import { withRouter } from "react-router-dom";

import { getFriends } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return <div />;
  }
}
