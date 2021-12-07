import { combineReducers } from 'redux';
import dragonReducer from './dragonReducer';
import titleReducer from './titleReducer';

export combineReducers({
    dragon: dragonReducer,
    title: titleReducer
})