import React, { Component } from 'react';
import { setUser } from "../../../actions/user";
import { connect }from "react-redux";
import {Link, withRouter} from "react-router-dom";

class Logout extends Component {

    logout = (e) => {
        e.preventDefault();

        this.props.history.push('/');

        const {dispatch} = this.props;

        dispatch(setUser(null));
    };

    render(){
        return (
            <Link onClick={ this.logout } to='/'>
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

export default withRouter(connect(mapStateToProps)(Logout));