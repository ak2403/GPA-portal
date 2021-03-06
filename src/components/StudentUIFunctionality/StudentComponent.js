import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsComponent from './DetailsComponent';
import GradesComponent from './GradesComponent';
import { getStudentDetails, studentLogout } from '../../actions/studentActions';
import jwt from 'jsonwebtoken';

class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPersonalPage: false
    }
    this.logout = this.logout.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    !nextProps.isStudentLogged && this.props.history.push('/')
    nextProps.studentId && this.props.getStudentDetails(nextProps.studentId);
    return true;
  }

  componentDidMount(){
    let getToken = localStorage.getItem('studentToken');
    if(!getToken){
      this.props.history.push('/')
    }else{
      let decodeToken = jwt.decode(getToken);
      decodeToken.adminId && this.props.history.push('/admin')
    }   
  }

  logout(){
    this.props.studentLogout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
          <div>
            <ul>
              <li onClick={() => this.setState({isPersonalPage: false})}>
                Grades
              </li>
              <li onClick={() => this.setState({isPersonalPage: true})}>
                Details
              </li>
            </ul>
            <button onClick={this.logout}>
              Logout
            </button>
          </div>
          <div className="student-container">
            <div className="student-detail-view">

            </div>
            {this.state.isPersonalPage ? <DetailsComponent /> : <GradesComponent />}
          </div>
          
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getStudentDetails: getStudentDetails,
    studentLogout: studentLogout
  }, dispatch)
}

const mapStateToProps = (props) => {
    let { isStudentLogged, studentName, studentId } = props.authorization;
    return {
        isStudentLogged: isStudentLogged,
        studentName: studentName,
        studentId: studentId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);
