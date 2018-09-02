import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/shared";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome:false,
    };

    handleOptionOne = (e) => {
        const optionOne = e.target.value;

        this.setState(() => ({
            optionOne,
        }));
    };

    handleOptionTwo = (e) => {
        const optionTwo = e.target.value;

        this.setState(() => ({
            optionTwo,
        }))
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOne, optionTwo));

        this.setState(() => ({
                optionOne: '',
                optionTwo: '',
                toHome: true,
            })
        );
    };

    render() {
        const {user} = this.props;
        const {optionOne, optionTwo, toHome} = this.state;

        if ( (!!user && !user.user) || toHome){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <label>
                        Would you rather...
                        <div><textarea
                            placeholder="option one"
                            value={optionOne}
                            onChange={this.handleOptionOne}
                            className="textarea"
                            maxLength={120}
                        /></div>
                        Or...
                        <div><textarea
                            placeholder="option two"
                            value={optionTwo}
                            onChange={this.handleOptionTwo}
                            className="textarea"
                            maxLength={120}
                        /></div>
                        <button
                            className='btn'
                            type='submit'
                            disabled={ !optionOne && !optionTwo}>
                            Submit
                        </button>
                    </label>
                </form>
            </div>
        )
    }
}

function mapStateToProps({user}){
    return {
        user,
    }
}

export default connect(mapStateToProps)(NewQuestion);