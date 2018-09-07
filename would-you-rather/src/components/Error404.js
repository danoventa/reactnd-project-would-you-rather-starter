import React, {Component, Fragment} from 'react';
import Login from "./Home/components/Login";
import connect from "react-redux/es/connect/connect";

class Error404 extends Component {
    render(){
        const { user } = this.props;
        return (
            <Fragment>
                {!!user && !user.user
                    ? <Login/>
                    : <p>Error 404, the question in question does not exist.</p>
                }
            </Fragment>
        )
    }
}

function mapStateToProps ({user}) {
    return {
        user,
    }
}

export default connect(mapStateToProps)(Error404);