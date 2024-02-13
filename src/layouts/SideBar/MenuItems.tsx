import { useEffect, useState } from "react";
import { MenuItem } from "./SideBarInterFace";
import Cookies from "js-cookie";

export const getSideBarItems = () => {
  const userDataString = Cookies.get("user");
  const [role, setRole] = useState<boolean>(false); // Assuming role is boolean

  useEffect(() => {
    if (userDataString) {
      setRole(JSON.parse(userDataString));
    }
  }, [userDataString]);

  const agentMenuItem = role && {
    title: "agent",
    icon: "Users",
    type: "sub",
    menu: [
      {
        url: "",
        title: "All Agents",
        type: "link",
      },
      {
        url: "/users/allusers",
        title: "All Users",
        type: "link",
      },
      {
        url: "/users/adduser",
        title: "Add New Agent",
        type: "link",
      },
    ],
  };

  const MENUITEMS: MenuItem[] = [
    {
      title: "dashboard",
      url: `/dashboard`,
      icon: "Home",
      type: "link",
    },
    agentMenuItem,
    {
      title: "Booking",
      url: `/booking`,
      icon: "Bookmark",
      type: "link",
    },
    {
      title: "Setting",
      url: `/setting`,
      icon: "Settings",
      type: "link",
    },
    {
      title: "Log Out",
      url: `/login`,
      icon: "LogIn",
      type: "link",
    },
  ].filter(Boolean) as MenuItem[];

  return MENUITEMS;
};
