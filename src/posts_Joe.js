import Dog from "./images/Dog.png";
import Walrus from "./images/Walrus.png";
import Pig from "./images/Pig.png";
import Shark from "./images/Shark.png";



const posts = [
  {
    id: 1,
    username: "Billy the Bulldog",
    timestamp: "5 mins ago",
    message: "Missing the summer so much ! ☀️",
    imgURL:
      "https://cdn.dribbble.com/users/130603/screenshots/2424860/summerlicker_02_800x600.gif",
    profilePic: Dog
  },
  {
    id: 2,
    username: "Sid the Shark",
    timestamp: "15 mins ago",
    imgURL:
      "https://cdn.dribbble.com/users/1637182/screenshots/6241567/image.png",
    message: "Had a splashing time with some scuba friends today 🤿",
    profilePic: Shark
  },
  {
    id: 3,
    username: "Phil the Pig",
    timestamp: "30 mins ago",
    imgURL:
      "https://cdn.dribbble.com/users/1578200/screenshots/4588076/dribble-pig1.gif",
    message: "I've been practising my flossing, can't wait to go to the disco and show off 💃",
    profilePic: Pig
  },
  {
    id: 4,
    username: "Wilfred the Walrus",
    timestamp: "1 hour ago",
    imgURL:
      "https://cdn.dribbble.com/users/135969/screenshots/6109989/walrus_dribbble.jpg",
    message: "Think I've found my new linkedin picture! What do you all think? 🎩",
    profilePic: Walrus
  }
];

export default posts;
