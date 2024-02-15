import { useEffect, useState } from "react";
import { ImagePath, LogOut } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";
import LogOutModal from "./LogOutModal";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { userProfileData } from "@/data/layout";
import { Href } from "../../utils/Constant";
import { parseCookies } from "nookies";

const UserProfile = () => {
  const cookies = parseCookies();
  const userDataString = cookies.userData;
  const role = cookies.role;

  const toggle = () => setModalOpen(!modalOpen);
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>("");
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    if (userDataString && role) {
      try {
        const userData = JSON.parse(userDataString);
        if (role === "admin") {
          setUserRole("Admin");
          setUserName(userData);
        } else {
          setUserRole("Agent");
          setUserName(userData?.representativeName || "");
        }
      } catch (error) {
        console.error("Error parsing userDataString:", error);
        setUserName("");
      }
    }
  }, [userDataString, role]);

  return (
    <li className="profile-nav onhover-dropdown pe-0 me-0">
      <div className="media profile-media">
        <Image
          height={40}
          width={40}
          className="user-profile rounded-circle"
          src={`${ImagePath}/users/4.jpg`}
          alt="profile-picture"
        />
        <div className="user-name-hide media-body d-flex gap-1 flex-column">
          <div className="d-flex gap-1">
            <span>{userName}</span>
            <span className="mb-0 font-roboto text-capitalize">
              <i className="middle fa fa-angle-down" />
            </span>
          </div>
          <span>{userRole}</span>
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
