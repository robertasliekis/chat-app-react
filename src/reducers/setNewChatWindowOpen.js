const initialState = {
  newChatWindowOpen: false
};

const setNewChatWindowOpen = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_CHAT_WINDOW_OPEN":
      let initialWindowState = state.newChatWindowOpen;
      return { ...state, newChatWindowOpen: !initialWindowState };
    default:
      return state;
  }
};

export default setNewChatWindowOpen;
