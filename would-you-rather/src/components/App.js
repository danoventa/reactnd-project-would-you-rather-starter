import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Navigation from './Navigation';
import Home from "./Home/Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question/Question";

import { handleInitialData } from "../actions/shared";

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData());
    }

  render() {
      return (
          <Router>
              <Fragment>
                  <LoadingBar/>
                  <div className="container">
                      <Navigation/>
                      <Route path='/' exact component={Home}/>
                      <Route path='/new' component={NewQuestion}/>
                      <Route path='/leaderboard' component={Leaderboard}/>
                      <Route path='/question/:id' copmonent={Question}/>
                  </div>
              </Fragment>
          </Router>
      );
  }
}

function mapStateToProps({user}){
    return {
        loading: user === null,
    }
}

export default connect(mapStateToProps)(App);
