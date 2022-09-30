import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore(reducers);
