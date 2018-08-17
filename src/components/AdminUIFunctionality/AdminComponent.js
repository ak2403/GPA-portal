import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { adminLogout } from '../../actions/adminActions';
import SubjectComponent from './SubjectComponent';

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPersonalPage: false
        }
        this.logout = this.logout.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        !nextProps.isAdminLogged && this.props.history.push('/')
        nextProps.studentId && this.props.getStudentDetails(nextProps.studentId);
        return true;
    }

    logout() {
        this.props.adminLogout();
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li onClick={() => this.setState({ isPersonalPage: false })}>
                            Subjects
                        </li>
                    </ul>
                    <button onClick={this.logout}>
                        Logout
                    </button>
                </div>
                <div>
                    <SubjectComponent />
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        adminLogout: adminLogout
    }, dispatch)
}

const mapStateToProps = (props) => {
    let { isAdminLogged } = props.authorization;
    return {
        isAdminLogged: isAdminLogged
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);
