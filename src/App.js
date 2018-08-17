import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginUIFunctionality/LoginComponent';

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
