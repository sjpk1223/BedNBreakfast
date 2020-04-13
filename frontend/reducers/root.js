import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducer from './errors';
import modalReducer from './modal';

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    modal: modalReducer,
});

export default rootReducer;