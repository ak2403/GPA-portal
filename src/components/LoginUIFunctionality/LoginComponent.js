import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentLoginComponent from './StudentLoginComponent';
const FormItem = Form.Item;

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    }
  }

  componentWillMount() {
  }

  onClick() {
  }

  changeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <ul className="LoginOptions">
          <li>
            Admin Login
            </li>
            <li>
              Student Login
              </li>
          </ul>
          <div>
            <StudentLoginComponent />
            </div>
      </div>

    )
  }
}

export default loginForm;
