import * as fromToDoActions from '../actions/to-do-list.actions';
import { ToDoEntity } from 'src/app/models/to-do-entity';

export interface ToDoState {
  toDos: ToDoEntity[];
  selectedToDo: ToDoEntity;
}

export const initialState: ToDoState = {
  toDos: [],
  selectedToDo: null
};

export function reducer(
  state = initialState,
  action: fromToDoActions.ToDoActions
): ToDoState {
  switch (action.type) {
    case fromToDoActions.ADD_TO_DO_ITEM: {
      action.payload.id = state.toDos.length;

      return {
        ...state,
        toDos: [...state.toDos, action.payload],
        selectedToDo: null
      };
    }
    case fromToDoActions.EDIT_TO_DO_ITEM: {
      return {
        ...state,
        selectedToDo: action.payload
      };
    }
    case fromToDoActions.UPDATE_TO_DO_ITEM: {
      const item = state.toDos.findIndex(itm => itm.id === action.payload.id);

      return {
        ...state,
        toDos: [...state.toDos.slice(0, item),
          action.payload,
        ...state.toDos.slice(item + 1)],
        selectedToDo: null
      };
    }
    case fromToDoActions.DELETE_TO_DO_ITEM: {
      const item = state.toDos.findIndex(itm => itm.id === action.payload);

      if (item !== -1) {
        return {
          ...state,
          toDos: [...state.toDos.slice(0, item),
          ...state.toDos.slice(item + 1)],
          selectedToDo: null
        };
      } else {
        return {
          ...state
        };
      }
    }
    case fromToDoActions.DELETE_ALL_TO_DO_ITEMS: {
      return {
        ...state,
        toDos: []
      };
    }
    case fromToDoActions.COMPLETE_TO_DO: {
      state.toDos.filter(itm => itm.id === action.payload)[0].isDone = !state.toDos.filter(itm => itm.id === action.payload)[0].isDone;
      const newToDos = state.toDos;

      return {
        ...state,
        toDos: newToDos,
        selectedToDo: null
      };
    }
    default:
      return state;
  }
}

export const getToDos = (state: ToDoState) => state.toDos;
export const getSelectedToDo = (state: ToDoState) => state.selectedToDo;
