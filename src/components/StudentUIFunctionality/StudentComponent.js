import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsComponent from './DetailsComponent';
import GradesComponent from './GradesComponent';
import { getStudentDetails } from '../../actions/studentActions';

class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPersonalPage: false
    }
  }

  componentDidMount(){
    let { studentId } = this.props;
  }

  shouldComponentUpdate(nextProps, nextState){
    !nextProps.isStudentLogged && this.props.history.push('/')
    nextProps.studentId && this.props.getStudentDetails(nextProps.studentId);
    return true;
  }

  render() {
    return (
      <div>
          <div>
            <ul>
              <li onClick={() => this.setState({isPersonalPage: false})}>
                Grades
              </li>
              <li onClick={() => this.setState({isPersonalPage: true})}>
                Details
              </li>
            </ul>
          </div>
          <div className="student-container">
            <div className="student-detail-view">

            </div>
            {this.state.isPersonalPage ? <DetailsComponent /> : <GradesComponent />}
          </div>
          
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getStudentDetails: getStudentDetails
  }, dispatch)
}

const mapStateToProps = (props) => {
    let { isStudentLogged, studentName, studentId } = props.authorization;
    return {
        isStudentLogged: isStudentLogged,
        studentName: studentName,
        studentId: studentId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);
