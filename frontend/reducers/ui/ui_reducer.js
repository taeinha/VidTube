import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import sidebarReducer from './sidebar_reducer';
import loadReducer from './load_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  load: loadReducer
});

export default uiReducer;