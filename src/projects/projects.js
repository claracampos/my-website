import chatImg from "../media/proj-chat.jpg";
import hamletImg from "../media/proj-hamlet.jpg";
import travelImg from "../media/proj-travel.jpg";
import travelAPIImg from "../media/proj-tmapi.jpg";

const projects = [
  {
    title: "You've Got Mail!",
    description: "A chat app based on the movie of the same name.",
    tech: "Node.js and Socket.io.",
    url: "https://chat-youvegotmail.herokuapp.com/",
    github: "https://github.com/claracampos/youve-got-mail",
    img: chatImg
  },
  {
    title: "Travel Minutes",
    description:
      "Sign in with your Google account and document your trips in a minimalist journal.",
    tech: "React and Firebase.",
    url: "https://travelminutes.netlify.com/",
    github: "https://github.com/claracampos/travel-minutes",
    img: travelImg
  },
  {
    title: "Travel Minutes API",
    description: "A backend alternative for the Travel Minutes React app.",
    tech: "Node.js, Express and Mongoose.",
    url: "https://travel-minutes-api.herokuapp.com/",
    github: "https://github.com/claracampos/travel-minutes-api",
    img: travelAPIImg
  },
  {
    title: "Hamlet Helper",
    description: "Read Shakespeare's Hamlet with a click-triggered dictionary.",
    tech: "React and the Merriam-Webster API.",
    url: "https://hamlethelper.netlify.com/",
    github: "https://github.com/claracampos/hamlet-helper",
    img: hamletImg
  }
];

export default projects;
