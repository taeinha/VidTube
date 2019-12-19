import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import sidebarReducer from './sidebar_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer
});

export default uiReducer;