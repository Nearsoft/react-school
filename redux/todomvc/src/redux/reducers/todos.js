import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case DELETE_TODO:
      return state;

    case EDIT_TODO:
      return state;

    case COMPLETE_TODO:
      return state;

    case COMPLETE_ALL_TODOS:
      return state;

    case CLEAR_COMPLETED:
      return state;

    default:
      return state;
  }
}
