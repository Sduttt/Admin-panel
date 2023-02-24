import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revinue</h1>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar className="fChart" value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="summery">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult negetive">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4K </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemResult positive ">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4K </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemResult positive ">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4K </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
