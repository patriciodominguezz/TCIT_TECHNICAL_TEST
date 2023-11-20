import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entityReducer from './entityReducer';

const rootReducer = combineReducers({
  entity: entityReducer,
  form: formReducer,
});

export default rootReducer;
