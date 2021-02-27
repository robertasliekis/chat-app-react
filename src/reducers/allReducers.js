import { combineReducers } from "redux";
import setActiveUser from "./setActiveUser";
import setChatData from "./setChatData";
import setUsersData from "./setUsersData";
import setActiveChat from "./setActiveChat";
import setDataUpdated from "./setDataUpdated";
import setUserChats from "./setUserChats";
import setChatFriend from "./setChatFriend";
import setUserFriends from "./setUserFriends";
import setProfileViewOpen from "./setProfileViewOpen";
import setNewChatWindowOpen from "./setNewChatWindowOpen";

export default combineReducers({
  setActiveUser: setActiveUser,
  setChatData: setChatData,
  setUsersData: setUsersData,
  setActiveChat: setActiveChat,
  setDataUpdated: setDataUpdated,
  setUserChats: setUserChats,
  setChatFriend: setChatFriend,
  setUserFriends: setUserFriends,
  setProfileViewOpen: setProfileViewOpen,
  setNewChatWindowOpen: setNewChatWindowOpen
});
