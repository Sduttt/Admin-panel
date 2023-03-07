import React, { useContext } from "react";
import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { darkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Sidebar = () => {
  const { dispatch } = useContext(darkModeContext);
  const { dispatch: dispatchAuth }  = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatchAuth({type: "LOGOUT"});
      navigate('/login');
      console.log("Signed out");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dutta & Co.</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p>MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p>Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <PrecisionManufacturingRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <p>USER</p>
          <li>
            <NotificationImportantRoundedIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleRoundedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <LoginIcon className="icon" />
              <span>Login</span>
            </li>
          </Link>
          <li onClick={handleSignout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="coloroption"
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}></div>
        <div
          className="coloroption"
          onClick={() => {
            dispatch({ type: "DARK" });
          }}></div>
      </div>
    </div>
  );
};
export default Sidebar;
