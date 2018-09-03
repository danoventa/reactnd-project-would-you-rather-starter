import React, { Component } from 'react';

class Poll extends Component {
    render() {
        const { question, user } = this.props;

        const vote = question.optionOne.votes.indexOf(user) > -1
            ? '1'
            : '2';

        const {optionOne, optionTwo } = question;
        const oneVotes = optionOne.votes.length;
        const twoVotes = optionTwo.votes.length;
        const totalVotes = oneVotes + twoVotes;

        const calculateVotePercent = (a) => {
            return `${Math.floor((a / totalVotes) * 100)} %`;
        };

        const onePercent = calculateVotePercent(oneVotes);
        const twoPercent = calculateVotePercent(twoVotes);

        return (
            <div>
                <div>{question.author} asked, would you rather {question.optionOne.text} OR {question.optionTwo.text} </div>
                <div>{onePercent} of people{vote === '1' ? ', including you,' : null } voted for: {question.optionOne.text}</div>
                <div>{twoPercent} of people{vote === '2' ? ', including you,' : null } voted for: {question.optionTwo.text}</div>
            </div>
        )
    }
}

export default Poll;