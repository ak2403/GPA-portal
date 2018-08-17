import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { adminLogout } from '../../actions/adminActions';
import SubjectComponent from './SubjectComponent';
import StudentComponent from './StudentComponent';

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changePages: false
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        let getToken = localStorage.getItem('studentToken');
        if(!getToken){
          this.props.history.push('/')
        }   
    }

    logout() {
        this.props.adminLogout();
    }

    render() {
        console.log(this.state.changePages)
        return (
            <div>
                <div className="nav-bar">
                    <ul>
                        <li onClick={() => this.setState({ changePages: true })}>
                            Subjects
                        </li>
                        <li onClick={() => this.setState({ changePages: false })}>
                            Students
                        </li>

                    </ul>
                    <Button onClick={this.logout}>
                        Logout
                    </Button>
                </div>
                <div className="admin-content-container">
                    { this.state.changePages ? <SubjectComponent /> : <StudentComponent /> }
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
