import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Leaderboard extends Component {
    render() {
        const { user } = this.props;

        if ( !!user && !user.user ){
            console.log('redirects');
            return <Redirect to='/'/>
        }

        return (
            <div>
                Leaderboard
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
}

export default connect(mapStateToProps)(Leaderboard);