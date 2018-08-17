const initialState = {
    personalDetails: ''
}

export default function StudentReducer(state = initialState, action) {
    switch(action.type){
        case 'GETSTUDENTDETAILS':
            return {
                personalDetails: action.payload
            }

        default: return state;
    }
}