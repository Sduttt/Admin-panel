import React from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import MyTable from "../../components/Table/Table";
import { Link } from "react-router-dom";

const Single = ({ img, name, email, phone, address, country }) => {
  return (
    <div className="singlepage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to="*">
              <div className="editbutton">Edit</div>
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={img} alt="ProfilePhoto" className="itemimg" />
              <div className="details">
                <h1 className="detailhead"> {name} </h1>
                <div className="detailitem">
                  <div className="itemkey">Email:</div>
                  <div className="itemvalue"> {email} </div>
                </div>
                <div className="detailitem">
                  <div className="itemkey">Phone:</div>
                  <div className="itemvalue"> {phone} </div>
                </div>
                <div className="detailitem">
                  <div className="itemkey">Address:</div>
                  <div className="itemvalue"> {address} </div>
                </div>
                <div className="detailitem">
                  <div className="itemkey">Country:</div>
                  <div className="itemvalue"> {country} </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={7 / 2} title={"User Spending(Last 6 months):"} />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <MyTable />
        </div>
      </div>
    </div>
  );
};
export default Single;
