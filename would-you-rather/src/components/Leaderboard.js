import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Image from "./Image";
import Login from "./Home/components/Login";

class Leaderboard extends Component {
    render() {
        const { user, users } = this.props;

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

        const leaderlist = Object.keys(scores).map((score) => {
            return <li key={scores[score].user}>
                <div className='leaderboard'>
                    <Image author={scores[score].user}/>
                    <div >
                        {scores[score].user} is ranked # {+score + 1}
                        <div>Questions answered: {scores[score].answered}</div>
                        <div>Questions created: {scores[score].created}</div>
                        <div>Total score: {scores[score].score}</div>
                    </div>
                </div>
            </li>
        });

        return (
            <Fragment>
                {user && !user.user !== false
                    ? <Login/>
                    : <ul>
                        {scores && leaderlist}
                     </ul>
                }
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