import Link from "next/link";
import { SideBarInterFace } from "./SideBarInterFace";
import { usePathname, useRouter } from "next/navigation";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Menulist = ({
  menu,
  setActiveMenu,
  activeMenu,
  level,
  className,
}: SideBarInterFace) => {
  const ActiveNavLinkUrl = (path: any, active: any = 0) => {
    const pathname = usePathname();
    return pathname === path ? (active ? active : true) : "";
  };
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("userData");
    router.push("/auth/login");
    toast.error("logout successful");
  };

  return (
    <>
      {menu.map((item, i) => (
        <li
          key={i}
          className={`${className ? "" : "sidebar-list"} ${
            (item.menu
              ? item.menu
                  .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                  .includes(true)
              : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title
              ? "active"
              : ""
          } `}
        >
          <Link
            className={`${className ? "" : "sidebar-link sidebar-title"}  ${
              (item.menu
                ? item.menu
                    .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                    .includes(true)
                : ActiveNavLinkUrl(item.url)) ||
              activeMenu[level] === item.title
                ? "active"
                : ""
            }`}
            href={item?.url ? item.url : "#javascript"}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = item.title !== temp[level] && item.title;
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && <DynamicFeatherIcon iconName={item.icon} />}
            <span>{item.title}</span>
            {item.menu && (
              <div className="according-menu">
                <i className="fa fa-angle-right" />
              </div>
            )}
          </Link>
          {item.menu && (
            <ul className="sidebar-submenu">
              <Menulist
                menu={item.menu}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                level={level + 1}
                className="sidebar-submenu"
              />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Menulist;
