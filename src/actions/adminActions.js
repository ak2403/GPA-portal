import axios from 'axios';

export const adminLogout = () => {
    return {
        type: 'ADMINLOGOUT'
    }
}

export const getSubjects = () => {
    return (dispatch) => {
        let subjectURL = 'http://api.evermoremoney.com.au/subjects';
        let adminToken = localStorage.getItem('studentToken');
        
        axios.get(subjectURL, { headers: {"Authorization" : `Bearer ${adminToken}`} })
            .then(res => {
                dispatch({
                    type: 'PASSSUBJECT',
                    payload: res.data
                })
            })
        
    }
}