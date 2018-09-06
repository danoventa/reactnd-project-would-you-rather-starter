import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Image from "./Image";
import { Link } from "react-router-dom";

class Questions extends Component {

    render() {
        const { questions, user } = this.props;

        const filter = this.props.filter;

        const quests = ((!! questions && filter)
            ? filter(user.user, questions)
            : questions).sort((a, b) =>  b.timestamp - a.timestamp);

        const questionsList = Object.keys(quests)
            .map((question) => {
                return (
                    <li key={quests[question].id}>
                        <Link to={`/questions/${quests[question].id}`}>
                            <div className={'stub'}>
                                <Image author={quests[question].author}/>
                                <div>
                                    Would you rather { quests[question].optionOne.text } or { quests[question].optionTwo.text }?
                                </div>
                            </div>
                        </Link>
                    </li>
                )}
        );

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

export default connect(mapStateToProps)(Questions);