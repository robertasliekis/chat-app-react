import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import apiData from "../data/apiData";

import UserPanel from "./ChatView-components/UserPanel";
import ChatsList from "./ChatView-components/ChatsList";
import MessagesWindow from "./ChatView-components/MessagesWindow";
import FriendPanel from "./ChatView-components/FriendPanel";
import NewChatWindow from "./ChatView-components/NewChatWindow";
import DarkOverlay from "./ChatView-components/DarkOverlay";

import { setUserChats, setChatFriend, setUserFriends, setChatData } from "../actions";

function ChatView({
  users,
  chats,
  activeUser,
  userChats,
  dataUpdateIndex,
  activeChatIndex,
  setUserChats,
  setChatFriend,
  setUserFriends,
  setChatData
}) {
  const [chatsLoading, setChatsLoading] = useState(false);
  const [chatsError, setChatsError] = useState("");

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (activeUser !== "") {
      getDataFromBackEnd();
    }
  }, [activeUser, dataUpdateIndex]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setUserChats(getUserChats());
    }
  }, [chats]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getChatFriendInfo();
      getUserFriends();
    }
  }, [userChats]);

  useEffect(() => {
    if (activeUser !== "") {
      getChatFriendInfo();
    }
  }, [activeChatIndex]);

  const getDataFromBackEnd = () => {
    setChatsLoading(true);
    axios
      .get(apiData.url, apiData.headers)
      .then((response) => {
        setChatsLoading(false);
        let chatsData = response.data.chats;
        setChatData(chatsData);
      })
      .catch((err) => {
        setChatsError(err);
        setChatsLoading(false);
      });
  };

  const getUserChats = () => {
    let chatsDataCopy = JSON.parse(JSON.stringify(chats));
    if (chatsDataCopy !== "" && chatsDataCopy !== undefined && users !== "" && users !== undefined) {
      let userChats = [];
      chatsDataCopy.forEach((chat, chatIndex) => {
        let matchedID = false;
        let usersInChat = [];
        chat.usersIDs.forEach((userID) => {
          if (userID === activeUser.id) {
            matchedID = true;
          }
          users.forEach((user) => {
            if (userID === user.id) {
              usersInChat.push(user);
            }
          });
        });
        if (matchedID) {
          userChats.push(chat);
          userChats[chatIndex].usersInChat = usersInChat;
        }
      });
      userChats.sort((a, b) => b.updateTime - a.updateTime);
      return userChats;
    }
  };

  const getUserFriends = () => {
    let userFriends = [];
    if (userChats !== undefined && userChats !== "" && activeUser !== "") {
      activeUser.friendsId.forEach((friendId) => {
        users.forEach((user) => {
          if (friendId === user.id) {
            userFriends.push(user);
          }
        });
      });
      setUserFriends(userFriends);
    }
  };

  const getChatFriendInfo = () => {
    if (userChats !== undefined && userChats !== "") {
      let userChatsCopy = JSON.parse(JSON.stringify(userChats));
      let chatFriend = userChatsCopy[activeChatIndex].usersInChat.filter((user) => activeUser.id !== user.id);
      setChatFriend(chatFriend[0]);
    }
  };

  if (userChats !== "" && userChats !== undefined && activeUser !== "")
    return (
      <div className="chat-view-container">
        <div className="chat-view-content">
          <UserPanel />
          <ChatsList />
          <MessagesWindow />
          <FriendPanel />
          <DarkOverlay />
          <NewChatWindow />
        </div>
      </div>
    );
  else if (chatsLoading) {
    return (
      <div className="chats-loading-container">
        Loading chats
        <FontAwesomeIcon icon={faSpinner} className="icon" />
      </div>
    );
  } else return null;
}

const mapStateToProps = (state) => {
  return {
    users: state.setUsersData.users,
    chats: state.setChatData.chats,
    activeUser: state.setActiveUser.activeUser,
    userChats: state.setUserChats.userChats,
    activeChatIndex: state.setActiveChat.activeChatIndex,
    dataUpdateIndex: state.setDataUpdated.dataUpdateIndex
  };
};

const mapDispatchToProps = {
  setChatData,
  setUserChats,
  setUserFriends,
  setChatFriend
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);
