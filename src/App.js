import React, { useContext, useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { darkModeContext } from "./context/darkModeContext";
import { userInputs } from "./datasource";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Single from "./pages/Single/Single";
import Error from "./pages/Error/Error";

import "./Styles/dark.scss";

function App() {
  const { darkmode } = useContext(darkModeContext);
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

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser)
  return (
    <div className={darkmode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route
              index
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path="add"
              element={
                <RequireAuth>
                  <New inputs={userInputs} />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="profile">
            <Route
              index
              element={
                <RequireAuth>
                  <Single img= {userData !== null ? userData.img : ""} name= {userData !== null ? userData.displayName : "Loading..."} email= {userData !== null ? userData.email : "Loading..."} phone= {userData !== null ? userData.phone : "Loading..."} address= {userData !== null ? userData.address : "Loading..."} country = {userData !== null ? userData.country : "Loading..."} />
                </RequireAuth>
              }
            />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
