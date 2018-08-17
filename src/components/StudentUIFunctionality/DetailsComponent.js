import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class DetailsComponent extends Component{
    constructor(){
        super();
        this.state = {
            personalInformation: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.personalDetails && this.state.personalInformation==''){
            this.setState({
                personalInformation: nextProps.personalDetails
            })
        }
        return true
    }
    
    render(){
        let { personalInformation } = this.state;
        console.log(personalInformation)
        return (
            <div>
                <div className="student-avatar-view">

                </div>
                <Form className="student-info">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Enter your first name" name="firstName" value={personalInformation.firstName} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your last name" name="lastName" value={personalInformation.lastName} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your dob" name="dateOfBirth" value={personalInformation.dateOfBirth} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your street name" name="streetAddress" value={personalInformation.streetAddress} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your suburb" name="suburb" value={personalInformation.suburb} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your state" name="state" value={personalInformation.state} />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Enter your postcode" name="postcode" value={personalInformation.postcode} />
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    let { personalDetails } = props.studentInformation;
    return {
        personalDetails: personalDetails
    }
}

export default connect(mapStateToProps, '')(DetailsComponent);