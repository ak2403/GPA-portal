import { combineReducers } from 'redux';
import AuthorizationReducer from './AuthorizationReducer';
import StudentReducer from './StudentReducer';

export default combineReducers({
  authorization: AuthorizationReducer,
  studentInformation: StudentReducer
});
