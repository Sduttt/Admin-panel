import React from "react";
import './error.scss';
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Link } from "react-router-dom";

const Error = () => {

    return(
        <div className="error">
            <ErrorSharpIcon className="erroricon" />
            <p className="errortxt">Sorry..... This Page does not exist <HeartBrokenIcon /> </p>
            <p className="home">Go to <Link to={'/'} style={{ textDecoration: "none" }} className='homelink'> HomePage</Link> </p>
        </div>
    )
}

export default Error;