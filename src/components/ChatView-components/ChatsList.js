import React, { useEffect } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { setActiveChat, setDataUpdated, setChatFriend, setNewChatWindowOpen } from "../../actions";

function ChatsList({ activeUser, setActiveChat, activeChatIndex, userChats, setNewChatWindowOpen }) {
  const getLastMessageSender = (chat) => {
    let lastMessageText = "";
    let senderName = "";
    if (chat.messages.length > 0) {
      let lastMessageSenderID = chat.messages[chat.messages.length - 1][0];
      lastMessageText = chat.messages[chat.messages.length - 1][1];
      senderName = "";
      if (lastMessageSenderID === activeUser.id) {
        senderName = "you";
      } else {
        senderName = chat.usersInChat.filter((user) => lastMessageSenderID === user.id);
        senderName = senderName[0].firstName;
      }
    }
    let lastMessage = { sender: senderName, text: lastMessageText };
    return lastMessage;
  };

  const getFriendProfile = (index) => {
    let usersInChat = userChats[index].usersInChat;
    let friendProfile = usersInChat.filter((user) => activeUser.id !== user.id);
    return friendProfile[0];
  };

  if (userChats !== "" && userChats !== undefined)
    return (
      <div className="chats-list-container">
        <div className="chats-list-top">
          <h1>Chats</h1>
          <button className="btn btn-new-chat" onClick={() => setNewChatWindowOpen()}>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </div>
        <div className="user-chats">
          {userChats.map((chat, index) => {
            let lastMessage = getLastMessageSender(chat);
            let activeChatClass = activeChatIndex === index ? "active-chat" : "";
            let friendProfile = getFriendProfile(index);
            return (
              <div className={`user-chat ${activeChatClass}`} key={index} onClick={() => setActiveChat({ index: index, open: true })}>
                <div className="friend-profile-image" style={{ backgroundImage: `url("${friendProfile.profileImageUrl}")` }}></div>
                <div className="chat-info">
                  <div className="name-container">
                    <div className="firstname">{friendProfile.firstName}</div>
                    <div className="secondname">{friendProfile.secondName}</div>
                  </div>
                  <div className="last-message-container">
                    <div className="message-sender">{`${lastMessage.sender}${lastMessage.sender !== "" ? ":" : ""}`}</div>
                    <div className="message-text">{lastMessage.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  else return null;
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.setActiveUser.activeUser,
    users: state.setUsersData.users,
    chats: state.setChatData.chats,
    activeChatIndex: state.setActiveChat.activeChatIndex,
    userChats: state.setUserChats.userChats,
    chatFriend: state.setChatFriend.chatFriend[0]
  };
};

const mapDispatchToProps = {
  setActiveChat,
  setDataUpdated,
  setChatFriend,
  setNewChatWindowOpen
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);
