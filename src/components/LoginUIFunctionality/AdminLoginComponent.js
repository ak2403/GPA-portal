import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { adminLogin } from '../../actions/authActions';
const FormItem = Form.Item;

class AdminLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminmail: '',
      adminpassword: ''
    }
    this.authLogin = this.authLogin.bind(this);
  }

  authLogin = () => {
      let { adminmail, adminpassword } = this.state;
      this.props.adminLogin({
        "username": adminmail,
        "password": adminpassword
      })
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
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Enter your admin id" name="adminmail" onChange={this.changeValue.bind(this)} />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Enter your password" name="adminpassword" onChange={this.changeValue.bind(this)} />
            </FormItem>
            <FormItem style={{ 'textAlign': 'center' }}>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.authLogin}>
                    Login
                </Button>
            </FormItem>
        </Form>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        adminLogin: adminLogin
    }, dispatch)
}
  
export default connect('', mapDispatchToProps)(AdminLoginComponent);