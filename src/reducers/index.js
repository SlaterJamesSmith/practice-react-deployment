import memberListReducer from './member-list-reducer';
import jobListReducer from './job-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterMemberList: memberListReducer,
  masterJobList: jobListReducer
});

export default rootReducer;
