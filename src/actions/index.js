export const setActiveUser = (userId) => {
  return {
    type: "SET_ACTIVE_USER",
    payload: userId
  };
};

export const setChatData = (chats) => {
  return {
    type: "SET_CHAT_DATA",
    payload: chats
  };
};

export const setUsersData = (users) => {
  return {
    type: "SET_USERS_DATA",
    payload: users
  };
};

export const setActiveChat = (index) => {
  return {
    type: "SET_ACTIVE_CHAT",
    payload: index
  };
};

export const setDataUpdated = () => {
  return {
    type: "SET_DATA_UPDATED"
  };
};

export const setUserChats = (chats) => {
  return {
    type: "SET_USER_CHATS",
    payload: chats
  };
};

export const setChatFriend = (friend) => {
  return {
    type: "SET_CHAT_FRIEND",
    payload: friend
  };
};

export const setUserFriends = (friends) => {
  return {
    type: "SET_USER_FRIENDS",
    payload: friends
  };
};

export const setProfileViewOpen = () => {
  return {
    type: "SET_PROFILE_VIEW_OPEN"
  };
};

export const setNewChatWindowOpen = () => {
  return {
    type: "SET_NEW_CHAT_WINDOW_OPEN"
  };
};

export const setBrowserName = (browserName) => {
  return {
    type: "SET_BROWSER_NAME",
    payload: browserName
  };
};
