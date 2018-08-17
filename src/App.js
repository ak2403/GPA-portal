import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginUIFunctionality/LoginComponent';
import StudentComponent from './components/StudentUIFunctionality/StudentComponent';

class App extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/student" component={StudentComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
