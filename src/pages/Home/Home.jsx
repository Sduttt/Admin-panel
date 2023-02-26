import React from "react";
import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widgets/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import MyTable from "../../components/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar className='sidebar'/>
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title={"Revinue of last 6 months:"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <MyTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
