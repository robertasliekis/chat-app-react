const initialState = {
  chats: ""
};

const setChatData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAT_DATA":
      return { ...state, chats: action.payload };
    default:
      return state;
  }
};

export default setChatData;
