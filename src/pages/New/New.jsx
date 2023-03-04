import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase';

const New = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({})

  const handleAdd = async (e) => {
    e.preventDefault();

    try{
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
    } catch(error){
      console.log(error)
    }

  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1 className="">Add new user:</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://tse4.mm.bing.net/th?id=OIP.JttTWFVu0wYc9wlQk90xjwAAAA"
              }
              alt="profile"
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="forminput">
                <label htmlFor="file">
                  Add Photo: <AddAPhotoIcon className="addphoto" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="photoinput"
                  style={{ display: "none" }}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              <div className="forminput">
                <label htmlFor="">Username:</label>
                <input type="text" placeholder="jhon_doe" />
              </div>
              <div className="forminput">
                <label htmlFor="">Full Name:</label>
                <input type="text" placeholder="Jhon Doe" />
              </div>
              <div className="forminput">
                <label htmlFor="">Email:</label>
                <input type="text" placeholder="jhon_doe@dutta.com" />
              </div>
              <div className="forminput">
                <label htmlFor="">Phone number:</label>
                <input type="text" placeholder="+01 234 56789" />
              </div>
              <div className="forminput">
                <label htmlFor="">Password:</label>
                <input type="password" />
              </div>
              <div className="forminput">
                <label htmlFor="">Address:</label>
                <input type="text" placeholder="Arkham Asylum, Gotham" />
              </div>
              <div className="forminput">
                <label htmlFor="">Country:</label>
                <input type="text" placeholder="VSA" />
              </div>
              <button className="" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
