import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GradesComponent extends Component{
    render(){
        return (
            <div>
                Grades
            </div>
        )
    }
}
  
const mapStateToProps = (props) => {
    let { isStudentLogged, studentName, studentId } = props.authorization;
    return {
        isStudentLogged: isStudentLogged,
        studentName: studentName,
        studentId: studentId
    }
}

export default connect(mapStateToProps, '')(GradesComponent);