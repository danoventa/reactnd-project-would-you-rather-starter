import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class NewQuestion extends Component {
    render() {
        const {user} = this.props;

        if ( !!user && !user.user){
            return <Redirect to='/'/>
        }

        return (
            <div>
                New Questions
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