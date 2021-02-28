const initialState = {
  activeUser: ""
};

const setActiveUser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      let data = action.payload;
      if (data !== "") {
        if (data.id === undefined) data.id = state.activeUser.id;
        if (data.friendsID === undefined) data.friendsID = state.activeUser.friendsID;
      }
      return { ...state, activeUser: data };
    default:
      return state;
  }
};

export default setActiveUser;
