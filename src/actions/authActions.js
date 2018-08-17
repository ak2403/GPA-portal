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