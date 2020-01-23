import {createStore, combineReducers, applyMiddleware } from 'redux';
import userList from './../reducers/userList/userList';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    userDetails : userList
}),{},applyMiddleware(thunk));

export default store;