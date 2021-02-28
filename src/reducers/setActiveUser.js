const initialState = {
  activeUser: ""
};

const setActiveUser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      let data = action.payload;
      if (state.activeUser !== "" && data !== "") {
        console.log("gera");
        data.id = state.activeUser.id;
        data.friendsId = state.activeUser.friendsId;
      }
      return { ...state, activeUser: data };
    default:
      return state;
  }
};

export default setActiveUser;
