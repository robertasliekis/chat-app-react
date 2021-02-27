const initialState = {
  userFriends: ""
};

const setUserFriends = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_FRIENDS":
      return { ...state, userFriends: action.payload };
    default:
      return state;
  }
};

export default setUserFriends;
