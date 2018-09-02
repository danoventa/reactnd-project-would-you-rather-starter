import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

class Questions extends Component {

    render() {
        const { questions, user } = this.props;

        const filter = this.props.filter;

        const quests = (!! questions && filter)
            ? filter(user.user, questions)
            : questions;

        const questionsList = Object.keys(quests).map((question) => {
            return <li key={question}>
                {quests[question].author}
            </li>
        });

        return (
            <Fragment>
                <ul>
                    { questions  && questionsList }
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({questions, user}){
    return {
        questions,
        user
    }
}

export default connect(mapStateToProps) (Questions);