import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Questions from '../../Questions'

const ANSWERED ='ANSWERED';
const UNANSWERED = 'UNANSWERED';

class MyQuestions extends Component {
    state = {
        view: ANSWERED,
    };

    onClick = (e) =>  {
        const view = e.target.id;

        this.setState(() => ({
            view,
        }));
    };

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
        const view = this.state.view;

        return (
            <Fragment>
                <nav className="nav">
                    <ul>
                        <li id={ANSWERED} onClick={this.onClick}>Answered</li>
                        <li id={UNANSWERED} onClick={this.onClick}>Unanswered</li>
                    </ul>
                </nav>
                { view === ANSWERED
                    ? <Questions filter={this.answeredFilter}/>
                    : <Questions filter={this.unansweredFilter}/>
                }
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