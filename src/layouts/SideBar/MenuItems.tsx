import { useEffect, useState } from "react";
import { MenuItem } from "./SideBarInterFace";
import Cookies from "js-cookie";

export const getSideBarItems = () => {
  const userCookie = Cookies.get("user") || null;
  const tokenCookie = Cookies.get("token") || null;
  const accessTokenCookie = Cookies.get("accessToken") || null;
  const userDataCookie = Cookies.get("userData") || null;
  const roleCookie = Cookies.get("role") || null;

  const [role, setRole] = useState<string | null>(roleCookie);
  const [token, setToken] = useState<string | null>(tokenCookie);
  const [accessToken, setAccessToken] = useState<string | null>(
    accessTokenCookie
  );
  const [userData, setUserData] = useState<string | null>(userDataCookie);
  const [user, setUser] = useState<string | null>(userCookie);

  if (userData) console.log(JSON.parse(userData));

  const agentMenuItem = role && {
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
  };

  const MENUITEMS: MenuItem[] = [
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
    agentMenuItem,
    {
      title: "Book Flight",
      url: `https://flygo-agent.vercel.app/en/home/flight?data=${encodeURIComponent(
        JSON.stringify({ role, token, accessToken, userData, user })
      )}`,
      icon: "Star",
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
