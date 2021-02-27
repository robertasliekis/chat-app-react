import React from "react";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { setActiveChat } from "../../actions";

function UsersInChat({ activeUser, activeChatIndex, userChats, setActiveChat }) {
  return (
    <div className="users-in-chat-container">
      {userChats[activeChatIndex].usersInChat.map((user, index) => {
        let profileImageUrl = user.profileImageUrl;
        return user.id !== activeUser.id ? (
          <div key={index} className="user-in-chat-info">
            <button className="btn btn-back" onClick={() => setActiveChat({ open: false })}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </button>
            <div className="user-avatar-container" style={{ backgroundImage: `url("${profileImageUrl}")` }}></div>
            <div className="name-container">
              <div className="user-firstname user-name">{user.firstName}</div>
              <div className="user-secondname user-name">{user.secondName}</div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.setActiveUser.activeUser,
    activeChatIndex: state.setActiveChat.activeChatIndex,
    userChats: state.setUserChats.userChats
  };
};

const mapDispatchToProps = {
  setActiveChat
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersInChat);
