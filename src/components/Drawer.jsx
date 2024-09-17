import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

function Drawer({ children }) {
  const { user, logout } = useAuth();
  const currentPath = window.location.pathname;

  const listMenu = [
    {
      icon: "fa-house",
      label: "Beranda",
      navigation: "/",
    },
    {
      icon: "fa-calendar",
      label: "Kegiatan",
      navigation: "/activity",
    },
    {
      icon: "fa-circle-plus",
      label: "Tambah Kegiatan",
      navigation: "/add-activity",
    },
    {
      icon: "fa-user",
      label: "Profil",
      navigation: "/profile",
    },
    {
      icon: "fa-heart",
      label: "Kegiatan Favorit",
      navigation: "/favorite-activity",
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-10">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#A8151C] text-base-content min-h-full w-60 p-4 space-y-2">
          {/* Sidebar content here */}
          <li className="flex flex-col items-center justify-center my-[12px]">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={
                    user?.profile_picture_path ||
                    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                  }
                />
              </div>
            </div>
            <h2 className="text-[16px] font-bold text-white">
              {user?.username || "-"}
            </h2>
          </li>
          {listMenu.map((item, index) => (
            <li key={index}>
              <a
                type="button"
                onClick={() => {}}
                className={`btn border-0 hover:bg-[#D81B24] text-white justify-start ${
                  currentPath === item.navigation
                    ? "bg-[#D81B24]"
                    : "bg-transparent"
                }`}
                href={currentPath === item.navigation ? "#" : item.navigation}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              type="button"
              onClick={logout}
              className="btn border-0 bg-[#640D11] hover:bg-[#821116] text-white justify-start"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};
