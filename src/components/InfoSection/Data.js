/*import Car from "../../images/svg-1.svg";*/
import Intro from '../../images/svg-4.svg'
import Finance from "../../images/svg-2.svg";
import Premium from "../../images/svg-3.svg";


/***************************************/

//Information (What we do)

export const homeObjOne = {
  id: "about",
  IdPoint: 'home',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Our Team",
  headline: "Available 24/7 to help you succeed.",
  description:
    "For over a year, we have led the effort to accompany new investors down a great journey of becoming financially free. We stand by the side of every investor in Bank Bros and will provide the best personalized support just for you.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: Intro,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  IdPoint: 'home',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Our Mission",
  headline: "We want to wake up the people who still think trading is worthless.",
  description:
    "Sometimes all what a person needs is a little push. Not knowing where to start especially in a broad space like the stock market can be very intimidating for most people. We want you to have the lowest possible risk with the maximum possible gain.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Finance,
  alt: "finance",
  dark: false,
  primary: false,
  darkText: true,
};


// How to Join
export const homeObjThree = {
  id: "signup",
  IdPoint: 'home',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Get Started",
  headline: "Start by today and earn money right on the way.",
  description:
    "You can signup for our Premium Program by clicking on the 'Get Premium Button' at the top right. In the following page you will get the links to the discord and premium access. Enjoy it.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: Premium,
  alt: "premium",
  dark: true,
  primary: true,
  darkText: false,
};

/****************************************/

//Nothing

/****************************************/

//Premium

export const homeObjFour = {
  id: "join",
  IdPoint: 'join',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Get Premium",
  headline: "Scroll down to checkout the benefits of being an elite.",
  description:
      "Once you join premium it will open up access to about 8 different channels as well as give you access to our chatroom where most of our members are. It's a whole new world.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Finance,
  alt: "finance",
  dark: false,
  primary: false,
  darkText: true,
  visible: true,
};

/**************************************/

// Profits

export const homeObjFive = {
  id: "profits",
  IdPoint: 'home',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Profits",
  headline: "Your Success is our passion.",
  description:
      "In our server you will get full support all the time and we will train you to get this profits out of the stock market with our help. Our goal is it to give those people the chance who wants it.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: 'https://images.squarespace-cdn.com/content/v1/605172b7d21a0a325a8a84db/252c0034-c60f-4be5-b327-4bd1d9c3ec48/Profit+3.png?format=1000w',
  alt: "finance",
  dark: false,
  primary: false,
  darkText: true,
};