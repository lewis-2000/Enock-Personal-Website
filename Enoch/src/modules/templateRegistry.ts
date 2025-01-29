import V2Body from "../components/V2Body";
import V2Hero from "../components/V2Hero";
import V2Nav from "../components/V2Nav";
import TemplateManagerAPI from "./templateManagerAPI";

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
          { name: "About", url: "#" },
          { name: "Services", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
      settings: {},
    },
    {
      component: V2Hero,
      data: {
        heading: "Welcome to the V25 Hero Section",
        title: "Hero Title",
        subtitle: "Hero Subtitle",
        bgUrl: "/FLWeb/bubbles.mp4", // Image URL
      },
      settings: {},
    },
    {
      component: V2Body,
      data: {},
      settings: {},
    },
  ],
});

console.log("Templates with previews registered successfully!");
