import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Questions from '../../Questions'

class MyQuestions extends Component {
    render() {
        return (
            <Fragment>
                <Questions/>
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