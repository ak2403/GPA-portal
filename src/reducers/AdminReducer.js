const initialState = {
    subjects: '',
    students: ''
}

export default function StudentReducer(state = initialState, action) {
    switch(action.type){
        case 'PASSSUBJECT':
            return {
                ...state,
                subjects: action.payload
            }

        case 'SENDSTUDENTS':
            return {
                ...state,
                students: action.payload
            }

        default: return state;
    }
}