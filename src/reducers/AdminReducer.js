const initialState = {
    subjects: ''
}

export default function StudentReducer(state = initialState, action) {
    switch(action.type){
        case 'PASSSUBJECT':
            return {
                subjects: action.payload
            }

        default: return state;
    }
}