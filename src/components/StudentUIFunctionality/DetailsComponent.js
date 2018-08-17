import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div>DetailsComponent</div>
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