const initialState = {
  chatFriend: ""
};

const setChatFriend = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAT_FRIEND":
      return { ...state, chatFriend: action.payload };
    default:
      return state;
  }
};

export default setChatFriend;
