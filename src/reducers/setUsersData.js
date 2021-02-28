const initialState = {
  users: [
    {
      id: 1,
      email: "user1@website.com",
      password: "123",
      friendsId: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      firstName: "Tom",
      secondName: "Gill",
      profileImageUrl: "https://i.ibb.co/K0hFfTX/profile02.jpg",
      city: "Los Angeles",
      about: "A few of my favorite sports and games are skating, gymnastics, and ping pong."
    },
    {
      id: 2,
      email: "user2@website.com",
      password: "123",
      friendsId: [1, 3, 4, 5],
      firstName: "James",
      secondName: "Jordan",
      profileImageUrl: "https://businesstech.co.za/news/wp-content/uploads/2015/03/Male-ideal-beauty.jpg",
      city: "New York",
      about: "Let me tell you about pets: I have 3 dogs, 1 cat, and a lizard."
    },
    {
      id: 3,
      email: "user3@website.com",
      password: "123",
      friendsId: [1, 2, 4, 9, 10],
      firstName: "Silvia",
      secondName: "Cox",
      profileImageUrl: "https://i.ibb.co/54mFXJy/profile01.jpg",
      city: "Seattle",
      about: "My favorite fun places I like to go are Disneyland, the beach, and grandma's house."
    },
    {
      id: 4,
      email: "user4@website.com",
      password: "123",
      friendsId: [1, 2, 3],
      firstName: "Phil",
      secondName: "Garret",
      profileImageUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
      city: "New Mexico",
      about: ""
    },
    {
      id: 5,
      email: "user5@website.com",
      password: "123",
      friendsId: [1, 2],
      firstName: "Peter",
      secondName: "Pearce",
      profileImageUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-2.png",
      city: "Chicago",
      about: "My favorite subjects are art, robotics, dance, and math."
    },
    {
      id: 6,
      email: "user6@website.com",
      password: "123",
      friendsId: [1],
      firstName: "Devon",
      secondName: "Randolph",
      profileImageUrl: "https://i.pinimg.com/originals/8e/43/e6/8e43e679cb2f6c4cbd83dbc0d026539f.jpg",
      city: "Vancouver",
      about: ""
    },
    {
      id: 7,
      email: "user7@website.com",
      password: "123",
      friendsId: [1, 10],
      firstName: "Ashton",
      secondName: "Gordon",
      profileImageUrl: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
      city: "Banff",
      about: "My family members are Shyli, Grace, Sky, Megan, and Joey."
    },
    {
      id: 8,
      email: "user8@website.com",
      password: "123",
      friendsId: [1, 9],
      firstName: "Daniel",
      secondName: "Morris",
      profileImageUrl: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266749_2200-732x549.jpg",
      city: "Toronto",
      about: ""
    },
    {
      id: 9,
      email: "user9@website.com",
      password: "123",
      friendsId: [1, 3, 8, 10],
      firstName: "Alan",
      secondName: "Baldwin",
      profileImageUrl: "https://i.ibb.co/rfKSm75/user.png",
      city: "Lima",
      about: "Certified internet ninja. Foodaholic. Hardcore bacon aficionado. Student. Organizer. Incurable travel fanatic. Twitter nerd."
    },
    {
      id: 10,
      email: "user10@website.com",
      password: "123",
      friendsId: [1, 3, 7, 9],
      firstName: "Jane",
      secondName: "Allen",
      profileImageUrl: "https://cupcakesandcashmere.com/.image/t_share/MTU5MzMzODc5MDkyNjE4NDU0/img_0863.jpg",
      city: "San Francisco",
      about: "Bacon practitioner. Falls down a lot. Tv fanatic. Zombie nerd."
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
