import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import Poll from "./components/Poll";
import Ask from "./components/Ask";
import Image from "../Image";
import Login from "../Home/components/Login";
import Error404 from "../Error404";

class Question extends Component {
    render() {
        const { user, users, id, questions } = this.props;

        const answered = () => {
           return Object.keys(users[user.user].answers).filter((question) =>
               question === id
           ).length > 0;
        };

        const question = () => {
            if(!questions[id]){
                return {};
            }
            return {
                ...questions[id],
                user
            }
        };

        const isEmptyQuestion = (question) => {
            return JSON.stringify(question) === JSON.stringify({});
        };

        const generateQuestion = (question) => {

            if(isEmptyQuestion(question)){
                return <Error404/>
            }

            const component = () => {
                return user && !user.user !== false
                ?  <Login/>
                    :answered()
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
                {generateQuestion(question())}
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