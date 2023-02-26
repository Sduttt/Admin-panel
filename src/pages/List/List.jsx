import React from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Datatable from "../../components/Datatable/Datatable";
import { Link } from "react-router-dom";
// import New from "../New/New";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
        <Link to='/users/add'className="adduserLink" ><button className="adduser">Add User</button></Link>
      </div>
    </div>
  );
};

export default List;
