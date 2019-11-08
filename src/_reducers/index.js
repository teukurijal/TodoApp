import { combineReducers } from 'redux';

import reducerTodos from '../_reducers/reducerTodos';

//The Global State
const appReducer = combineReducers({
    todos: reducerTodos
})

export default appReducer