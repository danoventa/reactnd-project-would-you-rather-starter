import React, { Component } from 'react';

import Login from "./components/Login";
import MyQuestions from "./components/MyQuestions";
import connect from "react-redux/es/connect/connect";

class Home extends Component {
    render() {
        const {user} = this.props;

        return (
            <div>
                { user && ! user.user !== false
                    ? <Login />
                    : <MyQuestions />
                }
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
}

export default connect(mapStateToProps)(Home);