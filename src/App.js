import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginUIFunctionality/LoginComponent';
import StudentComponent from './components/StudentUIFunctionality/StudentComponent';
import AdminComponent from './components/AdminUIFunctionality/AdminComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCheck } from './actions/authActions';

class App extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  componentDidMount(){
    this.props.authCheck();
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/student" component={StudentComponent} />
            <Route path="/admin" component={AdminComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authCheck: authCheck
  }, dispatch)
}

const mapStateToProps = (props) => {
  let { isStudentLogged, studentName, isAdminLogged } = props.authorization;
  return {
      isStudentLogged: isStudentLogged,
      isAdminLogged: isAdminLogged,
      studentName: studentName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
