import { combineReducers } from 'redux';
import AuthorizationReducer from './AuthorizationReducer';
import StudentReducer from './StudentReducer';
import AdminReducer from './AdminReducer';

export default combineReducers({
  authorization: AuthorizationReducer,
  studentInformation: StudentReducer,
  adminInformation: AdminReducer
});
