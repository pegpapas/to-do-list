import * as fromToDoActions from '../actions/to-do-list.actions';
import { ToDoEntity } from 'src/app/models/to-do-entity';

export interface ToDoState {
  toDos: ToDoEntity[];
}

export const initialState: ToDoState = {
  toDos: []
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
        toDos: [...state.toDos, action.payload]
      };
    }
    case fromToDoActions.EDIT_TO_DO_ITEM: {
      return {
        ...state,
        toDos: [...state.toDos, action.payload]
      };
    }
    case fromToDoActions.DELETE_TO_DO_ITEM: {
      const item = state.toDos.findIndex(itm => itm.id === action.payload);

      if (item !== -1) {
        return {
          ...state,
          toDos: [...state.toDos.slice(0, item),
          ...state.toDos.slice(item + 1)]
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
        toDos: newToDos
      };
    }
    default:
      return state;
  }
}
