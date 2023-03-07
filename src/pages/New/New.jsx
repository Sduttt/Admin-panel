import React, { useEffect, useState } from "react";
import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
            console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData(prev => ({...prev, img: downloadURL}))
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    setData({});
    setFile(null)
    navigate(-1)
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

              {inputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label htmlFor=""> {input.label} </label>
                  <input
                    required
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleInput}
                  />
                </div>
              ))}

              <button disabled={perc !== null && perc < 100} className="" type="submit">
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
