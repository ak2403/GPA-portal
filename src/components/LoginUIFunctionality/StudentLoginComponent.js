import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { studentLogin } from '../../actions/authActions';
const FormItem = Form.Item;

class StudentLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentmail: '',
      studentpassword: '',
      isInputEmpty: false
    }
    this.authLogin = this.authLogin.bind(this);
  }

  authLogin = () => {
      let { studentmail, studentpassword } = this.state;
      if(studentmail && studentpassword){
          this.props.studentLogin({
            "username": studentmail,
            "password": studentpassword
          })
      }else{
        this.setState({
          isInputEmpty: true
        })
      }
  }

  changeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    
    return (
      <div>
        {this.state.isInputEmpty ? <p>Please enter the username and password</p> : ''}
        <Form className="login-form">
            <FormItem>
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Enter your student id" name="studentmail" onChange={this.changeValue.bind(this)} />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Enter your password" name="studentpassword" onChange={this.changeValue.bind(this)} />
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
        studentLogin: studentLogin
    }, dispatch)
}
  
export default connect('', mapDispatchToProps)(StudentLoginComponent);