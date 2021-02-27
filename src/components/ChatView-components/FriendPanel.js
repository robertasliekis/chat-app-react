import React from "react";
import { connect } from "react-redux";

function FriendPanel({ chatFriend }) {
  return (
    <div className="friend-panel-container">
      <div className="container">
        <div className="profile-image" style={{ backgroundImage: `url("${chatFriend.profileImageUrl}")` }}></div>
        <div className="names-container">
          <div className="first-name">{chatFriend.firstName}</div>
          <div className="second-name">{chatFriend.secondName}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    chatFriend: state.setChatFriend.chatFriend
  };
};

export default connect(mapStateToProps, null)(FriendPanel);
