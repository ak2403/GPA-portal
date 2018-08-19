import jwt from 'jsonwebtoken';
import axios from 'axios';

const initialState = {
    isStudentLogged: false,
    studentName: '',
    studentId: '',
    isAdminLogged: false,
    authError: false
}

export default function AuthorizationReducer(state = initialState, action) {
    switch(action.type){
        case 'STUDENTAUTH':
            let { payload } = action;
            axios.defaults.headers.common['Authorization'] = `Bearer ${payload.accessToken}`;
            localStorage.setItem('studentToken', payload.accessToken);
            const decodeToken = jwt.decode(payload.accessToken);
            return {
                ...state,
                isStudentLogged: true,
                studentName: decodeToken.firstName,
                studentId: decodeToken.studentId
            };

        case 'checkAuth':
            const decodingToken = jwt.decode(action.payload);
            if(decodingToken){
                if(decodingToken.studentId){
                    return {
                        ...state,
                        isStudentLogged: true,
                        studentName: decodingToken.firstName,
                        studentId: decodingToken.studentId
                    }
                }
            }
            return state;

        case 'STUDENTLOGOUT':
            localStorage.removeItem('studentToken');
            delete axios.defaults.headers.common['Authorization'];
            return {
                isStudentLogged: false,
                studentName: '',
                studentId: ''
            }
        
        case 'ADMINAUTH':
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.accessToken}`;
            localStorage.setItem('studentToken', action.payload.accessToken);
            const adminDecodeToken = jwt.decode(action.payload.accessToken);
            return {
                ...state,
                isAdminLogged: true
            };

        case 'ADMINLOGOUT':
            localStorage.removeItem('studentToken');
            delete axios.defaults.headers.common['Authorization'];
            return {
                isAdminLogged: false
            }
        
        case 'AUTHERROR':
            return {
                ...state,
                authError: true
            }

        default: return state;
    }
}