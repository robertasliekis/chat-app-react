const initialState = {
  dataUpdateIndex: 0
};

const setDataUpdated = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_UPDATED":
      return { ...state, dataUpdateIndex: state.dataUpdateIndex + 1 };
    default:
      return state;
  }
};

export default setDataUpdated;
