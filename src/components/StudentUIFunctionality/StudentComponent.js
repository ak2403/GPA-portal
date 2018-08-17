import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let { isStudentLogged } = this.props;
    !isStudentLogged && this.props.history.push('/')
  }

  render() {
    return (
      <div>
          
      </div>

    )
  }
}

const mapStateToProps = (props) => {
    let { isStudentLogged, studentName } = props.authorization;
    return {
        isStudentLogged: isStudentLogged,
        studentName: studentName
    }
}

export default connect(mapStateToProps, '')(StudentComponent);
