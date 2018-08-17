import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const FormItem = Form.Item;

class StudentLoginComponent extends React.Component {
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
        <Form className="login-form">
            <FormItem>
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="User Name" name="username" />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Enter your Password" name="userpassword" />
            </FormItem>
            <FormItem style={{ 'textAlign': 'center' }}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button>
            </FormItem>
        </Form>
      </div>

    )
  }
}

export default StudentLoginComponent;
