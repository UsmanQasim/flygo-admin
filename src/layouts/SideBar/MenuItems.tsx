import { MenuItem } from "./SideBarInterFace";

export const MENUITEMS: MenuItem[] = [
  {
    title: "dashboard",
    url: `/dashboard`,
    icon: "Home",
    type: "link",
  },
  {
    title: "Booking",
    url: `/booking`,
    icon: "Bookmark",
    type: "link",
  },
  {
    title: "agent",
    icon: "Users",
    type: "sub",
    menu: [
      {
        url: "/users/allusers",
        title: "All Agents",
        type: "link",
      },
      {
        url: "/users/adduser",
        title: "Add New Agent",
        type: "link",
      },
    ],
  },
  {
    title: "Setting",
    url: `/setting`,
    icon: "Settings",
    type: "link",
  },
  // {
  //   title: "Log Out",
  //   url: `/auth/login`,
  //   icon: "LogIn",
  //   type: "link",
  // },
].filter(Boolean) as MenuItem[];

// {
//   title: "Book Flight",
//   url: `https://flygo-agent.vercel.app/en/home/flight?data=${encodeURIComponent(
//     JSON.stringify({ role, token, accessToken, userData, user })
//   )}`,
//   icon: "Star",
//   type: "link",
// },
