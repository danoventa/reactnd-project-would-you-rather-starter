import React, {Component, Fragment} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import Logout from "./components/Logout";

class Navigation extends Component {
    render() {
        const {user, users, location} = this.props;
        const {pathname} = location;

        const style = (p) => {
            return pathname === p
                ? { 'fontWeight': 'bold', 'color': 'purple'}
                : { 'fontWeight': 'normal' };
        };

        return (
            <nav className="nav">
                <ul>
                    { !!user && !!user.user
                        ?
                        <Fragment>
                            <li>
                                <NavLink to='/' style={style('/')} exact >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/add' style={style('/add')}>
                                    New Question
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/leaderboard' style={style('/leaderboard')} >
                                    Leaderboard
                                </NavLink>
                            </li>
                            <li >
                                <Logout/>
                            </li>
                            <li style={{'fontWeight': 'bold'}}>{users[user.user].name}</li>
                        </Fragment>
                        : null
                    }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({user, users}) {
    return ({
        user,
        users,
    })
}

export default withRouter(connect(mapStateToProps)(Navigation));