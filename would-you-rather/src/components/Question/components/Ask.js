import React, { Component } from 'react';
import {handleAddAnswer} from "../../../actions/shared";
import {connect} from "react-redux";

class Ask extends Component {
    state = {
        answer: '',
    };
    // form
    // submit
    // reducer

    handleChange = (e) => {
        const answer = e.target.value;

        this.setState(() => ({
            answer,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { question, dispatch } = this.props;
        const { id } = question;
        const { answer } = this.state;

        dispatch(handleAddAnswer(id, answer));
    };

    render() {
        const { question } = this.props;
        const { answer } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>{question.author} asks: </div>
                <div>Would you rather </div>
                <div>
                    <label>
                        <input type="radio"
                               key={question.id}
                               value="optionOne"
                               onChange={this.handleChange}
                               checked={answer ==='optionOne'}/>
                        {question.optionOne.text}
                    </label>
                </div>
                <div>or</div>
                <div>
                    <label>
                        <input type="radio"
                               key={question.id}
                               value="optionTwo"
                               onChange={this.handleChange}
                               checked={answer ==='optionTwo'}/>
                        {question.optionTwo.text}?
                    </label>
                </div>
                <button
                    type='submit'
                    disabled={ answer === ''}>
                    Submit
                </button>
            </form>
        )
    }
}

function mapStateToProps({dispatch}){
    return {
        dispatch,
    }
}

export default connect(mapStateToProps)(Ask);