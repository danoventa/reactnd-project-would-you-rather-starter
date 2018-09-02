import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Logout from "./components/Logout";

class Navigation extends Component {
    render() {
        const {user} = this.props;
        console.log(user);

        return (
            <nav className="nav">
                <ul>
                    { !!user && !!user.user
                        ?
                        <Fragment>
                            <li>
                                <NavLink to='/' exact activeClassName='active'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/new' activeClassName='active'>
                                    New Question
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/leaderboard' activeClassName='active'>
                                    Leaderboard
                                </NavLink>
                            </li>
                            <li>
                                <Logout/>
                            </li>
                        </Fragment>
                        : null
                    }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({user}) {
    return ({
        user,
    })
}

export default connect(mapStateToProps)(Navigation);