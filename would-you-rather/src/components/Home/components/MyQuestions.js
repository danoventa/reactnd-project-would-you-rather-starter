import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Questions from '../../Questions'

class MyQuestions extends Component {
    answeredFilter (user, questions) {

        return Object.keys(questions).filter((question) =>
            questions[question].optionOne.votes.indexOf(user) > -1
                || questions[question].optionTwo.votes.indexOf(user) > -1
       ).map((question) => questions[question]);
    }

    unansweredFilter (user, questions) {

        return Object.keys(questions).filter((question) =>
            questions[question].optionOne.votes.indexOf(user) === -1
                && questions[question].optionTwo.votes.indexOf(user) === -1
        ).map((question) => questions[question]);
    }

    render() {
        return (
            <Fragment>
                Answered
                <Questions filter={this.answeredFilter}/>
                Unanswered
                <Questions filter={this.unansweredFilter}/>
            </Fragment>
        )
    }
}

function mapStateToProps({user, questions}){
    return {
        user,
        questions
    }
}

export default connect(mapStateToProps)(MyQuestions);