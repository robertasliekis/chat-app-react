const initialState = {
  userChats: ""
};

const setUserChats = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_CHATS":
      return { ...state, userChats: action.payload };
    default:
      return state;
  }
};

export default setUserChats;
