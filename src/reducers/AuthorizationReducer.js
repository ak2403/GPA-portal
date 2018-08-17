import jwt from 'jsonwebtoken';
import axios from 'axios';

const initialState = {
    isStudentLogged: false,
    studentName: '',
    studentId: ''
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
                studentId: decodingToken.studentId
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

        default: return state;
    }
}