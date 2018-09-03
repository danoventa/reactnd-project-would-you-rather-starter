import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import Poll from "./components/Poll";
import Ask from "./components/Ask";
import Link from "react-router-dom/es/Link";
import Image from "../Image";

class Question extends Component {
    render() {
        const { user, users, id, questions } = this.props;

        const answered = () => {
           return Object.keys(users[user.user].answers).filter((question) =>
               question === id
           ).length > 0;
        };

        const question = () => {
            return {
                ...questions[id],
                user
            }
        };

        const generateQuestion = (question) => {
            const component = () => {
                return answered()
                    ? <Poll question={question}/>
                    : <Ask question={question}/>
            };


            return <div className={'question'}>
                <Image author={question.author}/>
                {component()}
            </div>
        };

        return (
            <Fragment>
                { (! user || ! user.user)
                    ? <Link to='/'> ERROR 404, Click here to Login </Link>
                    : generateQuestion(question())
                }
            </Fragment>
        )
    }
}

function mapStateToProps({users, user, questions}, props){
    const {id} = props.match.params;
    return {
        user, users, questions, id
    }
}

export default connect(mapStateToProps)(Question);