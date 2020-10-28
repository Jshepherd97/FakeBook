import Post1 from "./images/Selfie1.png";
import Post2 from "./images/selfie2.png";

const guideInputs = {

  login: {
    id: 100,
    // Guide values
    message:
      "Hello and welcome to Fakebook, the digital playground where you can learn about social media in a safe and fun environment. I'm Freddy, your Fakebook tour guide and new best friend!",
    option1: "Sounds awesome!",
    option2: "Sounds Boring!",
    child1: "login2",
    child2: "login21"
  },

  login2: {
    id: 101,
    // Guide values
    message:
      "It is awesome! now why don't we get you signed in, put in your name below and hit that Sign Up button",
  },

  login21: {
    id: 102,
    // Guide values
    message:
      "Ahh, I'm sad to hear that, but I promise we are gonna have a lot of fun! Let's get started. Put in your name below and hit that Sign Up button",
  },


  start: {
    id: 1,
    // Guide values
    message:
      "Hey there! Thanks for signing in! This is the Fakebook news feed where you and your friends can upload posts and pics",
    option1: "looks a bit empty",
    child1: "intro"
  },
  intro: {
    id: 2,
    // Guide values
    message:
      "You are right, it is looking very empty, want me to quickly add some of your friends for you?",
    option1: "Yes please!",
    child1: "intro2"
  },
  intro2: {
    id: 3,
    // Guide values
    message:
      "Viola, I've just added some of your close friends, check out their cool posts below then we are going to make our own!",
    option1: "Let's post something",
    child1: "intro3"
  },
  intro3: {
    id: 4,
    // Guide values
    message:
      "Why don't we start by posting a cool photo for our friends to see?",
    option1: "Sounds good to me!",
    option2: "I don't know about that",
    child1: "postingPic",
    child2: "picIntermediate2"
  },
  picIntermediate1: {
    id: 5,
    // Guide values
    message:
      "Wonderful! Why don't we start with a photo, that should get us some likes",
    option1: "Great idea!",
    child1: "postingPic"
  },
  picIntermediate2: {
    id: 6,
    // Guide values
    message:
      "There is nothing to worry about, Fakebook is a safe place to practise social media use, no one is gonna see what you post here",
    option1: "Okay let's do it",
    child1: "postingPic"
  },
  postingPic: {
    id: 7,
    // Guide values
    imgURL:
      Post1,
    message:
      "I see you took this awesome photo recently, why don't we post that?",
    option1: "Looks great! Let's post it!",
    child1: "prePost"
  },

  prePost: {
    id: 8,
    // Guide values
    imgURL:
      Post1,
    message:
      "woh woh woh, hold up a minute! Before you upload anything to social media you need to check that it doesn't give away any personal information about you",
    option1: "Personal information? Like what",
    option2: "I knew that!",
    child1: "prePost2",
    child2: "prePost3"
  },

  prePost2: {
    id: 9,
    // Guide values
    imgURL:
      Post1,
    message:
      "Well, sometimes people upload photos which give away their address, where they go to school or where they hang out. Unfortunately there are dangerous people on the internet who might use this to try and find you",
    option1: "Oh no, what can we do!",
    child1: "prePost3"
  },

  prePost3: {
    id: 10,
    imgURL:
      Post1,
    message:
      "You need to make sure you always check photos before you upload them, can you spot what is given away by this photo?",
    option1: "I see it!",
    option2: "What's wrong with it?",
    child1: "prePost4",
    child2: "prePost5"
  },

  prePost4: {
    id: 11,
    imgURL:
      Post1,
    message:
      "Exactly, this photo gives away your address, Maybe we should try another one",
    option1: "Give me another one",
    child1: "prePost6"
  },

  prePost5: {
    id: 12,
    imgURL:
      Post1,
    message:
      "This photo gives away your address! Maybe we should try another one",
    option1: "Give me another one",
    child1: "prePost6"
  },

  prePost6: {
    id: 12,
    imgURL:
    Post2,
    message: "Here we go, this one is much better",
    option1: "Let's post it!",
    child1: "picPosted"
  },

  picPosted: {
    id: 13,
    // Guide values
    message: "That looks great! I bet you are gonna get loads of likes, why don't we jump ahead 30 minutes and see if anyone reacts",
    option1: "Let's timetravel",
    child1: "Comments1"
  },

  Comments1: {
    id: 14,
    // Guide values
    message: "Oh look! one of your friends has left a really nice comment!, thats awesome. Let's do it again and see what else we get",
    option1: "Time jump again",
    child1: "Comments2"
  },

  Comments2: {
    id: 15,
    // Guide values
    message: "Oh no! That's not very nice! Someone has made a mean comment on your post 😢 what are you going to do about it?",
    option1: "Make a mean post back!",
    option2: "Delete the comment and report him!",
    child1: "CommentChoice1",
    child2: "CommentChoice2"
  },

  CommentChoice1: {
    id: 16,
    // Guide values
    message: "Mmmm... That doesn't sound like a very good idea! Don't you know an eye for an eye leaves the whole world blind. Whenever you see mean comments or posts on social media you should report them, block the user and tell an adult about it",
    option1: "Okay, that sounds right",
    child1: "Report",
  },

  CommentChoice2: {
    id: 17,
    // Guide values
    message: "Exactly! looks like you don't even need my help. Whenever you see mean comments or posts on social media you should report them, block the user and tell an adult about it ",
    option1: "Sounds good to me",
    child1: "Report",
  },

  Report: {
    id: 18,
    // Guide values
    message: "Hit that report button to flag this mean user to FakeBook",
    child1: "Block",
  },

  Block: {
    id: 19,
    // Guide values
    message: "Now hit that Block button so they can never contact you again!",
    child1: "Blocked",
  },

  Blocked: {
    id: 20,
    // Guide values
    message: "Great Job! remember to always block and report cyberbullys and strangers!",
    option1: "I will do!",
    child1: "friendRequest",
  },

  friendRequest: {
    id: 21,
    // Guide values
    message: "Oh Look you have some friends requests! Why don't you confirm them",
    child1: "successFr",
    child2: "errorFr"
  },

  successFr: {
    id: 22,
    // Guide values
    message: "Good choice, 100 mutual friends means you can probably trust this person",
    child1: "Finish1"
  },

  errorFr: {
    id: 23,
    // Guide values
    message: "100 mutual friends means you can probably trust this person, but its always best to be safe, better not to add anyone you don't actually know",
    child1: "Finish1"
  },

  successFr2: {
    id: 24,
    // Guide values
    message: "Thats a great choice! you should only add people you know, or at least have lots of mutual friends with",
    child1: "Finish1"
  },

  errorFr2: {
    id: 25,
    // Guide values
    message: "Maybe you should think again about that one! you really shouldn't accept request from people you don't know. I think we should reject this one",
  },

  Finish1: {
    id:26,
    message: "Great Job! That wraps up our Fakebook lessons for the day, and you've passed with flying colours, you are officially social media safe! ",
    option1: "What now?",
    child1: "Finish2"
  },

  Finish2: {
    id:27,
    message: "Well, now that you've proven yourself, you can access the live Fakebook feed, where you can make public posts and view everyone else's posts to Fakebook ",
    option1: "Take me there!",
    child1: "LiveFeed"
  },

  LiveFeed: {
    id:28,
    message: "Something went wrong",
    option1: "Take me there!",
    child1: "LiveFeed"
  }

};

export default guideInputs;
