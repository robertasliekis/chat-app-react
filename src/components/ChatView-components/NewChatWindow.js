import React from "react";
import { connect } from "react-redux";

import { setChatData, setActiveChat, setNewChatWindowOpen, setDataUpdated } from "../../actions";

function NewChatWindow({
  userFriends,
  activeUser,
  newChatWindowOpen,
  chats,
  setChatData,
  userChats,
  setActiveChat,
  setNewChatWindowOpen,
  setDataUpdated
}) {
  const addNewChat = (friendId) => {
    let chatsDataCopy = JSON.parse(JSON.stringify(chats));
    let newChatId = chats.length + 1;
    let newChat = {
      chatID: newChatId,
      updateTime: Date.now(),
      usersIDs: [activeUser.id, friendId],
      messages: []
    };
    let sameChat = checkIfChatExists(friendId);
    if (sameChat.chatExist) {
      setActiveChat({ index: sameChat.chatIndex, open: true });
    } else {
      let newChatsData = [newChat, ...chatsDataCopy];
      setChatData(newChatsData);
      setActiveChat({ index: 0, open: true });
    }
    setDataUpdated();
    setNewChatWindowOpen();
  };

  const checkIfChatExists = (friendId) => {
    let chatExist = false;
    let chatIndex;
    userChats.forEach((chat, index) => {
      chat.usersIDs.forEach((id) => {
        if (friendId === id) {
          chatExist = true;
          chatIndex = index;
        }
      });
    });
    return { chatExist: chatExist, chatIndex: chatIndex };
  };

  if (userFriends !== "")
    return (
      <div className="new-chat-container" style={{ display: newChatWindowOpen ? "flex" : "none" }}>
        <h1>New chat</h1>
        <div className="friends-container">
          {userFriends.map((friend, index) => (
            <div className="friend-info" key={index} onClick={() => addNewChat(friend.id)}>
              <div className="friend-profile-image" style={{ backgroundImage: `url("${friend.profileImageUrl}")` }}></div>
              <div className="name-container">
                <div className="firstname">{friend.firstName}</div>
                <div className="secondname">{friend.secondName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  else return null;
}

const mapStateToProps = (state) => {
  return {
    userFriends: state.setUserFriends.userFriends,
    newChatWindowOpen: state.setNewChatWindowOpen.newChatWindowOpen,
    activeUser: state.setActiveUser.activeUser,
    chats: state.setChatData.chats,
    userChats: state.setUserChats.userChats
  };
};

const mapDispatchToProps = { setChatData, setActiveChat, setNewChatWindowOpen, setDataUpdated };

export default connect(mapStateToProps, mapDispatchToProps)(NewChatWindow);
