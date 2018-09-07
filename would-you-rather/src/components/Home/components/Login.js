import React, { Component } from 'react';
import { connect } from "react-redux";
import { setUser } from "../../../actions/user";
import {withRouter} from "react-router-dom";


class Login extends Component {
    state = {
        user: '',
    };

    handleChange = (e) => {
        const user = e.target.value;
        this.setState(() => ({
            user,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { user } = this.state;
        const { dispatch, id, questions} = this.props;

        dispatch(setUser(user));
        if(id && !!questions[id] === false){
            this.props.history.push('/error');
        }

        this.setState(() => ({
                user: "",
            })
        )
    };

    render() {
        const { users } = this.props;

        const userOptions = Object.keys(users).map((user) => {
           return <option value={user} key={user}>{user}</option>
        });

        return (
            <div>
                <div>
                    Welcome to "Would You Rather"!
                </div>
                <form className='login' onSubmit={this.handleSubmit}>
                    <label>
                        Select your user name and login:
                        <select defaultValue="" onChange={this.handleChange}>
                            <option value="" key="-1"> select a username </option>
                            { users && userOptions }
                        </select>
                    </label>
                    <button
                        type='submit'>
                            Login
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({questions, user, users}, props){
    const {id} = props.match.params;

    return {
        user,
        users,
        id,
        questions,
    }
}

export default withRouter(connect(mapStateToProps)(Login));