import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import { darkModeContext } from "../../context/darkModeContext";

//icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Navbar = () => {
  const { dispatch } = useContext(darkModeContext);
  const { currentUser } = useContext(AuthContext);
  const myUid = currentUser.uid;
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (doc.id === myUid) {
          setUserData(doc.data())
        }
      });
    }
    fetchData();
  }, [myUid]);



  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ForumOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src= {userData !== null ? userData.img : ""} alt="avatar" className="avatar" />
          </div>
          <div className="item">
            <SettingsOutlinedIcon className="icon settings" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
