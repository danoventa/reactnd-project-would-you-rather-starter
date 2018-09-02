import React, { Component } from 'react';
import { setUser } from "../../../actions/user";
import { connect }from "react-redux";
import { Link } from "react-router-dom";

class Logout extends Component {
    logout () {
        const {dispatch} = this.props;

        dispatch(setUser(""));
    }

    render(){
        return (
            <Link onClick={ this.logout } to={'/'}>
                Logout
            </Link>
        )
    }
}

function mapStateToProps ({dispatch}) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps)(Logout);