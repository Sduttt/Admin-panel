import React, { useContext, useEffect, useState } from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from '../../components/Chart/Chart';
import MyTable from '../../components/Table/Table'
import { AuthContext } from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Single = () => {

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
    <div className="singlepage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
                <img src= {userData !== null ? userData.img : ""} alt="ProfilePhoto" className="itemimg" />
                <div className="details">
                    <h1 className="detailhead"> {userData !== null ? userData.displayName : "Loading..."} </h1>
                    <div className="detailitem">
                        <div className="itemkey">Email:</div>
                        <div className="itemvalue"> {userData !== null ? userData.email : "Loading..."} </div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Phone:</div>
                        <div className="itemvalue"> {userData !== null ? userData.phone : "Loading..."} </div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Address:</div>
                        <div className="itemvalue"> {userData !== null ? userData.address : "Loading..."} </div>
                    </div>
                    <div className="detailitem">
                        <div className="itemkey">Country:</div>
                        <div className="itemvalue"> {userData !== null ? userData.country : "Loading..."} </div>
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