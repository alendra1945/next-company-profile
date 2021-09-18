import { combineReducers } from 'redux';
import { errorReducer } from 'src//redux/utils/error';
import { loadingReducer } from 'src//redux/utils/loading';
import { contactUsReducer as contactUs } from './contactUs';

const rootReducer = () =>
  combineReducers({
    errorReducer,
    loadingReducer,
    contactUs,
  });

export default rootReducer;
