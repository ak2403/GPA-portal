import axios from 'axios';

export const studentLogin = (data) => {
    return (dispatch) => {
        axios.post('http://api.evermoremoney.com.au/students/login', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            dispatch({
                type: 'STUDENTAUTH',
                payload: res.data
            })
        })
    }    
}

export const authCheck = () => {
    let getToken = localStorage.getItem('studentToken');
    return {
        type: 'checkAuth',
        payload: getToken
    }
}

export const adminLogin = (data) => {
    return (dispatch) => {
        axios.post('http://api.evermoremoney.com.au/admin/login', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            dispatch({
                type: 'ADMINAUTH',
                payload: res.data
            })
        })
    }    
}