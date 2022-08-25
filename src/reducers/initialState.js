import West from "../assets/westithink.png";
import jason from "../assets/jason.png";
import ramen from "../assets/ramen.png";
import olivia from "../assets/olivia.png";
import andrea from "../assets/andrea.png";
import ethan from "../assets/ethan.png";
import amanda from "../assets/amanda.png";
import coolstacy from "../assets/coolstacy.png";
import blake from "../assets/blake.png";
import carlos from "../assets/carlos.png";
import Joe from "../assets/Joe.jpeg";
const initialState = {
  students: [
    { name: "West", img: West },
    { name: "Rahmin", img: ramen },
    { name: "Olivia", img: olivia },
    { name: "Jason", img: jason },
    { name: "Ethan", img: ethan },
    { name: "Amanda", img: amanda },
    { name: "Andrea", img: andrea },
    { name: "Stacy", img: coolstacy },
    { name: "Carlos", img: carlos },
    { name: "Blake", img: blake },
  ],
  frontend: [],
  backend: [],
  setStudent: {
    name: "",
    img: Joe,
  },
};

export default initialState;
