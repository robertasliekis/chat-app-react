import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import axios from "axios";

import apiData from "../../data/apiData";

import UsersInChat from "./UsersInChat";
import MessageTimer from "./MessageTimer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { setDataUpdated, setActiveChat, setChatData, setUserChats } from "../../actions";

function MessagesWindow({
  activeUser,
  chats,
  activeChatIndex,
  setDataUpdated,
  userChats,
  setActiveChat,
  activeChatOpen,
  setUserChats,
  setChatData,
  chatFriend
}) {
  const chatMessagesEnd = useRef(null);
  const { register, handleSubmit, errors } = useForm();

  const scrollToBottom = (scrollType) => {
    chatMessagesEnd.current?.scrollIntoView({ behavior: scrollType });
  };

  useEffect(() => {
    scrollToBottom("smooth");
  }, [chats]);

  useEffect(() => {
    scrollToBottom("auto");
  }, [activeChatIndex]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  const getMessageSender = (messageSenderID) => {
    let usersInChat = userChats[activeChatIndex].usersInChat;
    let messageSender = usersInChat.filter((user) => messageSenderID === user.id);
    return messageSender[0];
  };

  const onSubmit = (data, inputField) => {
    inputField.target.reset();
    let messageData = [activeUser.id, data.message];
    messageData = setDissapearingMessage(messageData, data.dissapearingMessage);
    updateChatData(messageData);
  };

  const setDissapearingMessage = (messageData, dissapearingMessage) => {
    if (dissapearingMessage) {
      let displayDissapearingMessage = [
        [activeUser.id, true],
        [chatFriend.id, true]
      ];
      messageData.push(displayDissapearingMessage);
    }
    return messageData;
  };

  const updateChatData = (messageData, messageIndex) => {
    let activeChatID = userChats[activeChatIndex].chatID;
    let chatsDataCopy = JSON.parse(JSON.stringify(chats));
    let openChat = JSON.parse(JSON.stringify(userChats[activeChatIndex]));
    let deleteMessage = false;

    if (messageData[2]) {
      deleteMessage = deleteDissapearingMessage(messageData[2]);
    }

    if (messageIndex === undefined) {
      openChat.updateTime = Date.now();
      openChat.messages.push(messageData);
    } else {
      if (deleteMessage) {
        openChat.messages.splice(messageIndex, 1);
      } else {
        openChat.messages[messageIndex] = messageData;
      }
    }

    chatsDataCopy.forEach((chat, index) => {
      if (activeChatID === chat.chatID) {
        chatsDataCopy[index] = openChat;
        if (messageIndex === undefined) {
          chatsDataCopy[index].updateTime = Date.now();
        }
      }
    });

    let updatedUserChats = JSON.parse(JSON.stringify(userChats));
    updatedUserChats[activeChatIndex] = openChat;

    setUserChats(updatedUserChats);
    setChatData(chatsDataCopy);
    setActiveChat({ index: 0 });

    axios
      .put(apiData.url, { chats: chatsDataCopy }, apiData.headers)
      .then(() => {
        setLoading(false);
        setDataUpdated();
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const deleteDissapearingMessage = (displayDissapearingMessage) => {
    let seenCount = 0;
    displayDissapearingMessage.forEach((message, index) => {
      if (!message[1]) {
        seenCount++;
      }
    });
    if (seenCount === displayDissapearingMessage.length) {
      return true;
    } else return false;
  };

  const displayDissapearingMessage = (dissapearingMessage) => {
    let displayMessage = true;
    if (dissapearingMessage) {
      dissapearingMessage.forEach((message, index) => {
        let messageSenderId = message[0];
        if (activeUser.id === messageSenderId) displayMessage = message[1];
      });
    }
    return displayMessage;
  };

  const messageTimerChange = (data, messageIndex) => {
    updateChatData(data, messageIndex);
  };

  return (
    <div className={`messages-window-container messages-window-hide-mobile ${activeChatOpen ? "messages-window-show-mobile" : ""}`}>
      <UsersInChat />
      <div className="sent-messages-container">
        <div className="overflow-wrapper">
          {userChats[activeChatIndex].messages.map((message, index) => {
            let messageSenderID = message[0];
            let messageText = message[1];
            let messageSender = getMessageSender(messageSenderID);
            let messageContainerClass = activeUser.id === messageSenderID ? "right" : "left";
            let messageTimer = message[2];
            let displayMessage = displayDissapearingMessage(message[2]);
            if (displayMessage)
              return (
                <div className={`message-container message-container-${messageContainerClass}`} key={index}>
                  {messageTimer ? (
                    <MessageTimer messageData={message} messageIndex={index} onMessageTimerChange={messageTimerChange} />
                  ) : null}
                  <div className="name-container">
                    <div className="sender-firstname sender-name">{messageSender.firstName}</div>
                    <div className="sender-secondname sender-name">{messageSender.secondName}</div>
                  </div>
                  <div className="friend-avatar-container" style={{ backgroundImage: `url("${messageSender.profileImageUrl}")` }}></div>
                  <div className="message-text">{messageText}</div>
                </div>
              );
            else return null;
          })}
          <div ref={chatMessagesEnd} className="bottom-container"></div>
        </div>
      </div>

      <form className="send-message-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="dissapearing-message-container">
          <label htmlFor="dissapearingMessage">Dissapearing message</label>
          <input className="check-box" type="checkbox" name="dissapearingMessage" checked={checked} onChange={handleClick} ref={register} />
        </div>
        <textarea
          className="message-input"
          type="text"
          placeholder="Type a message here..."
          name="message"
          ref={register({ required: true })}
        />
        <button className="btn btn-send-message">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.setActiveUser.activeUser,
    chats: state.setChatData.chats,
    activeChatIndex: state.setActiveChat.activeChatIndex,
    activeChatOpen: state.setActiveChat.activeChatOpen,
    userChats: state.setUserChats.userChats,
    chatFriend: state.setChatFriend.chatFriend
  };
};

const mapDispatchToProps = {
  setDataUpdated,
  setActiveChat,
  setUserChats,
  setChatData
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesWindow);
