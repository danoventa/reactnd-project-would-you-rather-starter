import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Leaderboard extends Component {
    render() {
        const { user, users } = this.props;

        if ( !!user && !user.user ){
            return <Redirect to='/'/>
        }

        const scores = Object.keys(users).map((user) => {
            const answered = Object.keys(Object.keys(users[user].answers).length);
            const created = users[user].questions.length;
            const score = answered + created;

            return {
                    user,
                    answered,
                    created,
                    score,
            }}).sort((a, b) => b.score - a.score);



        return (
            <div>
                Leaderboard
            </div>
        )
    }
}

function mapStateToProps({user, users}) {
    return {
        user,
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);