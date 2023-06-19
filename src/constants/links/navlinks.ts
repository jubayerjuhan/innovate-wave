const NAVLINKS = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/services",
    name: "Services",
    childLinks: [
      { link: "/hello", name: "Hello" },
      { link: "/world", name: "World" },
      { link: "/bye", name: "Bye" },
    ],
  },
  {
    link: "/blog",
    name: "Blog",
  },
  {
    link: "/contact",
    name: "Contact",
  },
];

export default NAVLINKS;
