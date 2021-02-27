const initialState = {
  activeUser: "",
  activeUser1: {
    id: 1,
    email: "user1@website.com",
    password: "123",
    friendsId: [2, 3, 4, 5],
    firstName: "Tom",
    secondName: "Silver",
    city: "vilnius",
    profileImageUrl: "https://i.ibb.co/K0hFfTX/profile02.jpg",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis unde delectus aperiam suscipit perspiciatis libero debitis perferendis corporis."
  }
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
