import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Leaderboard extends Component {
    render() {
        const { user, users } = this.props;

        if ( !!user && !user.user ){
            return <Redirect to='/'/>
        }

        const scores = Object.keys(users).map((user) => {
            const answered = Object.keys(users[user].answers).length;
            const created = users[user].questions.length;
            const score = answered + created;

            return {
                    user,
                    answered,
                    created,
                    score,
            }}).sort((a, b) => b.score - a.score);

        console.log(scores);


        const leaderlist = Object.keys(scores).map((score) => {
            return <li key={score}>
                {scores[score].user} => {scores[score].answered} + {scores[score].created} = {scores[score].score}
            </li>
        });

        return (
            <Fragment>
                <ul>
                    {scores && leaderlist}
                </ul>
            </Fragment>
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