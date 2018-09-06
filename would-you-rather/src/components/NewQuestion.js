import React, { Component } from 'react';
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/shared";
import Login from "./Home/components/Login";
import {withRouter} from "react-router-dom";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
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

        this.props.history.push('/');

        this.setState(() => ({
                optionOne: '',
                optionTwo: '',
            })
        );
    };

    render() {
        const {user} = this.props;
        const {optionOne, optionTwo} = this.state;

        return (
            <div>
                {user && !user.user !== false
                    ? <Login/>
                    : <form className='new-question' onSubmit={this.handleSubmit}>
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
                                disabled={!optionOne && !optionTwo}>
                                Submit
                            </button>
                        </label>
                    </form>
                }
            </div>
        )
    }
}

function mapStateToProps({user}){
    return {
        user,
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));