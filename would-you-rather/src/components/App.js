import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Navigation from './Navigation/Navigation';
import Home from "./Home/Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question/Question";

import { handleInitialData } from "../actions/shared";
import Error404 from "./Error404";

class App extends Component {
    componentDidMount(){
        if(!!this.props.users && !Object.keys(this.props.users).length > 0){
            this.props.dispatch(handleInitialData())
        }
    }

  render() {
      const {user} = this.props;

      return (
              <Fragment>
                  <Router>
                      <div className="container">
                          { !! user
                              ? <div>
                                  <Navigation/>
                                  <Switch>
                                      <Route path='/' exact component={Home}/>
                                      <Route path='/add' component={NewQuestion}/>
                                      <Route path='/leaderboard' component={Leaderboard}/>
                                      <Route path='/questions/:id' component={Question}/>
                                      <Route path='/error' exact component={Error404}/>
                                      <Route component={Error404}/>
                                  </Switch>
                              </div>
                              : <LoadingBar/>
                          }
                      </div>
                  </Router>
              </Fragment>
      );
  }
}

function mapStateToProps({user, users}){
    return {
        user,
        users
    }
}

export default connect(mapStateToProps)(App);
