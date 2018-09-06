import React from 'react';
import Login from "./Home/components/Login";

const Error404 = () => {
    return (
        <div>
            <Login errors={true}/>
            Error 404, the question in question does not exist.
        </div>
    )
};

export default Error404;