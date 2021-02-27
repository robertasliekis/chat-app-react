const initialState = {
  users: [
    {
      id: 1,
      email: "user1@website.com",
      password: "123",
      friendsId: [2, 3, 4, 5],
      firstName: "Tom",
      secondName: "Silver",
      profileImageUrl: "https://i.ibb.co/K0hFfTX/profile02.jpg",
      age: 28,
      city: "vilnius"
    },
    {
      id: 2,
      email: "user2@website.com",
      password: "123",
      friendsId: [1, 3, 4, 5],
      firstName: "John",
      secondName: "Buck",
      profileImageUrl: "https://i.ibb.co/rfKSm75/user.png",
      age: 22,
      city: "kaunas"
    },
    {
      id: 3,
      email: "user3@website.com",
      password: "123",
      friendsId: [1, 2],
      firstName: "Silvia",
      secondName: "Gurt",
      profileImageUrl: "https://i.ibb.co/54mFXJy/profile01.jpg",
      age: 25,
      city: "klaipėda"
    },
    {
      id: 4,
      email: "user4@website.com",
      password: "123",
      friendsId: [1],
      firstName: "Phil",
      secondName: "Garret",
      profileImageUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
      age: 35,
      city: "Kupiskis"
    },
    {
      id: 5,
      email: "user5@website.com",
      password: "123",
      friendsId: [1],
      firstName: "Peter",
      secondName: "Big",
      profileImageUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-2.png",
      age: 28,
      city: "Panevezys"
    }
  ]
};

const setUsersData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default setUsersData;
