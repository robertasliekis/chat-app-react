const initialState = {
  browserName: ""
};

const setBrowserName = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BROWSER_NAME":
      return { ...state, browserName: action.payload };
    default:
      return state;
  }
};

export default setBrowserName;
