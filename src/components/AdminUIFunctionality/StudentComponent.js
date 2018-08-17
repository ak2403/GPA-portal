import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStudents } from '../../actions/adminActions';
import { Table } from 'antd';

class StudentComponent extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            studentLists: [],
            columns: [{
                title: 'Student First Name',
                key: 'firstName',
                dataIndex: 'firstName'
            },{
                title: 'Student Last Name',
                key: 'lastName',
                dataIndex: 'lastName'
            },{
                title: 'Student Email',
                key: 'email',
                dataIndex: 'email'
            }]
        }
    }

    componentDidMount(){
        this.state.isLoading && this.props.getStudents();
    }

    shouldComponentUpdate(nextProps){
        if(this.state.isLoading){
            let { students } = nextProps;
            let studentArray = [];
            students.data.map(student => {
                studentArray.push({
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email: student.email
                })
            })
            this.setState({
                isLoading: false,
                studentLists: studentArray
            })
        }
        return true;
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? 'Loading' : <Table dataSource={this.state.studentLists} columns={this.state.columns} pagination={false} />}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStudents: getStudents
    }, dispatch)
}

const mapStateToProps = (props) => {
    let { students } = props.adminInformation;
    return {
        students: students
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);