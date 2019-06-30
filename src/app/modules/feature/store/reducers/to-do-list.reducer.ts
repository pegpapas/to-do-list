import * as fromToDoActions from '../actions/to-do-list.actions';
import { ToDoEntity } from 'src/app/models/to-do-entity';

export interface ToDoState {
    toDos: ToDoEntity[];
}

export const initialState: ToDoState = {
    toDos: []
}

export function reducer(
    state = initialState,
    action: fromToDoActions.ToDoActions
): ToDoState {
    switch (action.type) {
        case fromToDoActions.ADD_TO_DO_ITEM: {
            return {
                ...state,
                toDos: [...state.toDos, action.payload]
            }
        }
        case fromToDoActions.EDIT_TO_DO_ITEM: {
            return {
                ...state,
                toDos: [...state.toDos, action.payload]
            }
        }
        case fromToDoActions.DELETE_TO_DO_ITEM: {
            return {
                ...state,
                toDos: [...state.toDos.slice(0, action.payload),
                    ...state.toDos.slice(action.payload + 1)]
            }
        }
        case fromToDoActions.DELETE_ALL_TO_DO_ITEMS: {
            return {
                ...state,
                toDos: []
            }
        }
        default:
            return state;
    }
}