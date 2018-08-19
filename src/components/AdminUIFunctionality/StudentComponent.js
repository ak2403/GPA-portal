import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStudents } from '../../actions/adminActions';
import { Table } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class StudentComponent extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            studentLists: [],
            studentChart: [],
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
            let chartData = [];
            students.data.map(student => {
                studentArray.push({
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email: student.email
                })
                let totalGrade = 0;
                Object.keys(student.subjects).map(grade => {
                    totalGrade+= Number(student.subjects[grade])
                })
                chartData.push({
                    name: student.firstName,
                    uv: totalGrade/4
                })
            })
            this.setState({
                isLoading: false,
                studentLists: studentArray,
                studentChart: chartData
            })
        }
        return true;
    }

    render(){
        return (
            <div className="admin-student-container">
                { this.state.isLoading ? 'Loading' : 
                        <div className="admin-student-inherit">
                            <div className="admin-student-chart">
                            
                                <BarChart width={300} height={300} data={this.state.studentChart}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            
                            
                            </div>


                            <div className="admin-student-table">
                                <Table dataSource={this.state.studentLists} columns={this.state.columns} pagination={false} />
                            </div>
                        </div>
                }
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