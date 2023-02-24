import React from "react";
import "./sidebar.scss";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dutta & Co.</span>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p>MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p>Lists</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
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
          <li>
            <AccountCircleRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
