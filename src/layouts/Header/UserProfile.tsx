import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { userProfileData } from "@/data/layout";
import { Admin, ImagePath, LogOut } from "@/utils/Constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Href } from "../../utils/Constant";
import LogOutModal from "./LogOutModal";
import Link from "next/link";
import Cookies from "js-cookie";

const UserProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);
  const userDataString = Cookies.get("user");

  const [role, setRole] = useState(false);
  const [userName, setUserName] = useState<string | null>("");
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userDataString && userData) {
      setRole(JSON.parse(userDataString));
      setUserName(JSON.parse(userData)?.representativeName);
      setAdminName(JSON.parse(userData)?.name);
    }
  }, [userDataString]);

  return (
    <li className="profile-nav onhover-dropdown pe-0 me-0">
      <div className="media profile-media">
        {/* <Image
          height={40}
          width={40}
          className="user-profile rounded-circle"
          src={`${ImagePath}/users/4.jpg`}
          alt="profile-picture"
        /> */}
        <div className="user-name-hide media-body">
          <span>{role ? adminName : userName}</span>
          <p className="mb-0 font-roboto">
            {role ? "Admin" : "Agent"} <i className="middle fa fa-angle-down" />
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {userProfileData.map((data, index) => (
          <li key={index}>
            <Link href={data.link}>
              <DynamicFeatherIcon iconName={data.icon} />
              <span>{data.title}</span>
            </Link>
          </li>
        ))}
        <li>
          <a href={Href} onClick={toggle}>
            <DynamicFeatherIcon iconName="LogOut" />
            <span>{LogOut}</span>
          </a>
          <LogOutModal modal={modalOpen} toggle={toggle} />
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
