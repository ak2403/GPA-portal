import axios from 'axios';

export const getStudentDetails = (data) => {
    return (dispatch) => {
        let studentURL = 'http://api.evermoremoney.com.au/students/'+ data;
        let studentToken = localStorage.getItem('studentToken');
    
        axios.get(studentURL, { headers: {"Authorization" : `Bearer ${studentToken}`} }).then(res => {
            dispatch({
                type: 'GETSTUDENTDETAILS',
                payload: res.data
            })
        });
    }
}

export const studentLogout = () => {
    return {
        type: 'STUDENTLOGOUT'
    }
}