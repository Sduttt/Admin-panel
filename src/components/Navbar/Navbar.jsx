import React from "react";
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
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
                        <img src="https://thispersondoesnotexist.xyz/img/3569.jpg" alt="avatar" className="avatar" />
                    </div>
                    <div className="item">
                        <SettingsOutlinedIcon className="icon settings" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;