import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";

class Questions extends Component {

    render() {
        const { questions } = this.props;
        const questionsList = Object.keys(questions).map((question) => {
            return <li key={question}>{ questions[question].author } {questions[question].timestamp} </li>
        });

        return (
            <Fragment>
                <ul>
                    { questions  && questionsList }
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({questions}){
    return {
        questions
    }
}

export default connect(mapStateToProps) (Questions);