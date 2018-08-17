import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'antd';

class GradesComponent extends Component{
    constructor(){
        super();
        this.state = {
            grades: '',
            isLoading: true,
            columns: [{
                title: 'Subjects',
                key: 'subject',
                dataIndex: 'subject'
            },{
                title: 'Grades',
                key: 'grades',
                dataIndex: 'grades'
            }]
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.personalDetails && this.state.isLoading){
            let { subjects } = nextProps.personalDetails;
            let gradeArray = [];
            Object.keys(subjects).map(key => gradeArray.push({ subject: key, grades: subjects[key] }));
            this.setState({
                grades: gradeArray,
                isLoading: false
            })
        }
        return true
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? 'Loading' : <Table dataSource={this.state.grades} columns={this.state.columns} pagination={false} /> }
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

export default connect(mapStateToProps, '')(GradesComponent);