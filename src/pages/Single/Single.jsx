import React from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from '../../components/Chart/Chart';
import MyTable from '../../components/Table/Table'

const Single = () => {
  return (
    <div className="singlepage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
                <img src="https://this-person-does-not-exist.com/img/avatar-1142ed4fa671d005c4fbcb6d169433e6.jpg" alt="ProfilePhoto" className="itemimg" />
                <div className="details">
                    <h1 className="detailhead">Martha Wyne</h1>
                    <div className="detailitem">
                        <div className="itemkey">Email:</div>
                        <div className="itemvalue">marthawyne@dutta.com</div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Phone:</div>
                        <div className="itemvalue">+99 9632158</div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Address:</div>
                        <div className="itemvalue">Gotham City, Deccan Comics</div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Country:</div>
                        <div className="itemvalue">USA</div>
                    </div>
                </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={7/2} title={"User Spending(Last 6 months):"} />
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