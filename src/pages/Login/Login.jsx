import React, { useContext, useState } from "react";
import "./login.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext);

  const HandleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch({type: "LOGIN", payload: user})
        navigate('/'); 
      })
      .catch((error) => {
        setError(true);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        {error ? <span>Wrong Email or Password!</span> : ""}
      </form>
    </div>
  );
};

export default Login;
