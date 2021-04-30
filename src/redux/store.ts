import { createStore } from 'redux';
import { todo } from './todo';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';


export let rootStore = combineReducers({ todo, visibilityFilter });

export let store = createStore(rootStore);
