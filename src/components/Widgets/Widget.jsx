import React from "react";
import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widgets = ({ type }) => {
  let data;

// temporary
const amount = 100;
const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "orders",
        isMoney: false,
        link: "See all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "earning",
        isMoney: true,
        link: "See all earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "view details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter"> {data.isMoney && '$'} {amount} </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="parcentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
