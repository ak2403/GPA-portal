import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginUIFunctionality/LoginComponent';
import StudentComponent from './components/StudentUIFunctionality/StudentComponent';
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

  shouldComponentUpdate(nextProps, nextState){
    let { isStudentLogged } = this.props;
    isStudentLogged && this.props.history.push('/student')
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authCheck: authCheck
  }, dispatch)
}

const mapStateToProps = (props) => {
  let { isStudentLogged, studentName } = props.authorization;
  return {
      isStudentLogged: isStudentLogged,
      studentName: studentName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
