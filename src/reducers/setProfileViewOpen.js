const initialState = {
  profileViewOpen: false
};

const setProfileViewOpen = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_VIEW_OPEN":
      let initialViewState = state.profileViewOpen;
      return { ...state, profileViewOpen: !initialViewState };
    default:
      return state;
  }
};

export default setProfileViewOpen;
