import * as types from '../constants/ActionTypes';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = () => ({});
export const editTodo = () => ({});
export const completeTodo = () => ({});
export const completeAllTodos = () => ({});
export const clearCompleted = () => () => ({});
export const setVisibilityFilter = () => ({});
