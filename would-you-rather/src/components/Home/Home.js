import React, { Component } from 'react';

import Login from "./components/Login";
import MyQuestions from "./components/MyQuestions";

class Home extends Component {
    render() {
        return (
            <div>
                <Login />
                <MyQuestions />
            </div>
        )
    }
}

export default Home;