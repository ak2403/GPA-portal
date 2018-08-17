import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSubjects } from '../../actions/adminActions';

class SubjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            subjectLists: ''
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
            this.setState({
                subjectLists: subjects.data,
                isLoading: false
            })
        }
        return true
    }

    render() {
        return (
            <div>
                Subjects

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
