import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSubjects } from '../../actions/adminActions';
import { Table } from 'antd';

class SubjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            subjectLists: [],
            columns: [{
                title: 'Code',
                key: 'code',
                dataIndex: 'code'
            },{
                title: 'Subject Title',
                key: 'title',
                dataIndex: 'title'
            }]
        }
    }

    componentDidMount(){
        if(this.state.isLoading){
            this.props.getSubjects()
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        let { subjects } = nextProps;
        if(subjects && this.state.isLoading){
            let subjectArray = [];
            subjects.data.map(subject => {
                subjectArray.push({
                    code: subject.code,
                    title: subject.title
                })
            })
            this.setState({
                subjectLists: subjectArray,
                isLoading: false
            })
        }
        return true
    }

    render() {
        return (
            <div>
                Subjects
                { this.state.isLoading ? 'Loading' : <Table dataSource={this.state.subjectLists} columns={this.state.columns} pagination={false} /> }
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSubjects: getSubjects
    }, dispatch)
}

const mapStateToProps = (props) => {
    let { subjects } = props.adminInformation;
    return {
        subjects: subjects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectComponent);
