const initialState = {
  activeChatIndex: 0,
  activeChatOpen: false
};

const setActiveChat = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CHAT":
      let data = action.payload;
      let activeChatIndex;
      let activeChatOpen;

      if (data.index !== undefined) {
        activeChatIndex = data.index;
      } else {
        activeChatIndex = state.activeChatIndex;
      }

      if (data.open !== undefined) {
        activeChatOpen = data.open;
      } else {
        activeChatOpen = state.activeChatOpen;
      }

      return { ...state, activeChatIndex: activeChatIndex, activeChatOpen: activeChatOpen };
    default:
      return state;
  }
};

export default setActiveChat;
