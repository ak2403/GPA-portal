import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminLoginComponent from './AdminLoginComponent';
import StudentLoginComponent from './StudentLoginComponent';
import jwt from 'jsonwebtoken';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.isStudentLogged){
      this.props.history.push('/student')
    }else if(nextProps.isAdminLogged){
      this.props.history.push('/admin')
    }
    return true;
  }

  componentDidMount(){
    let getToken = localStorage.getItem('studentToken');
    if(getToken){
      let decodeToken = jwt.decode(getToken);
      decodeToken.adminId ? this.props.history.push('/admin') : this.props.history.push('/student')
    }    
  }

  render() {
    return (
      <div>
        <ul className="LoginOptions">
          <li onClick={() => this.setState({ isAdmin: true })}>
            Admin Login
            </li>
            <li onClick={() => this.setState({ isAdmin: false })}>
              Student Login
              </li>
          </ul>
          <div>
            { this.state.isAdmin ? <AdminLoginComponent /> : <StudentLoginComponent /> }
            </div>
      </div>

    )
  }
}

const mapStateToProps = (props) => {
  let { isStudentLogged, studentName, isAdminLogged } = props.authorization;
  return {
      isStudentLogged: isStudentLogged,
      isAdminLogged: isAdminLogged,
      studentName: studentName
  }
}

export default connect(mapStateToProps, '')(loginForm);
