import TemplateManagerAPI from "./templateManagerAPI";

import V2Hero from "../components/V2Hero";
import V2Nav from "../components/V2Nav";
import V2Body from "../components/V2Body";

TemplateManagerAPI.registerTemplate({
  id: "enoch",
  name: "enoch",
  components: [
    {
      component: V2Nav,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
        links: [
          { name: "Home", url: "#" },
          { name: "About Me", url: "#" },
          { name: "Services", url: "#" },
          { name: "Projects", url: "#" },
          { name: "Blog", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
      settings: {},
    },
    {
      component: V2Hero,
      data: {
        heading: "Welcome to the V25 Hero Section",
        title: "Hey Hi👋",
        name: "Enoch Murbi",
        profession: "UI/UX Designer",
        professionDescription:
          "A blend of creativity, empathy, and technical expertise. I strive to design interfaces that not only look good but engage users at every interaction.",
        selfBg: "/self.png",
        heroBg: "/heroBg.png", // BG Image URL
        heroButtonText: "Download CV",
        cvUrl: "/V2/cv.pdf", // url for the pdf
        subtitle: "Hero Subtitle",
        bgUrl: "/FLWeb/bubbles.mp4", // Image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        textColor: "white",
      },
      settings: {},
    },
    {
      component: V2Body,
      data: {
        AboutTitle: "About Title",
        AboutSubtitle: "About Subtitle",
        Galery1Url: "/empower.png",
        Galery2Url: "/empower.png",
        Galery3Url: "/empower.png",
        Galery4Url: "/empower.png",

        aboutImages: [
          "/Depot/Image1.jpg",
          "/Depot/Image2.jpg",
          "/Depot/Image1.jpg",
          "/Depot/Image2.jpg",
          "/Depot/Image1.jpg",
        ],

        HeaderBgUrl: "/flowerField.jpg",
        AboutDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam natus aperiam distinctio eius at saepe possimus, eaque neque voluptatibus!",
      },
      settings: {},
    },
  ],
});

console.log("Templates with previews registered successfully!");
