import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBarComponent from '../Basic/NavBarComponent';
import DetailsComponent from './DetailsComponent';
import { getStudentDetails } from '../../actions/studentActions';

class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let { isStudentLogged, studentId } = this.props;
    !isStudentLogged && this.props.history.push('/')
    this.props.getStudentDetails(studentId);
  }

  render() {
    return (
      <div>
          <NavBarComponent />
          <DetailsComponent />
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getStudentDetails: getStudentDetails
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
