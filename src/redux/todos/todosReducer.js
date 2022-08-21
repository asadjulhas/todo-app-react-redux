import initialState  from "../initialState"
import { ADDTODO, CHANGEPER, CHANGESTATUS, CLEARCOMPLETE, COMPLETEALL, DELETETODOS } from "./todosConstant"


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          status: action.payload.status,
          priority: action.payload.priority
        }
      ]
    case CHANGESTATUS:
      return state.map(todo => {
        if(todo.id !== action.payload) {
            return todo
        }
         return {
          ...todo,
          status: !todo.status
         }
      })
    case CHANGEPER:
      return state.map(todo => {
        if(todo.id !== action.payload.id) {
            return todo
        }
         return {
          ...todo,
          priority: action.payload.priority
         }
      })
    case DELETETODOS:
      return state.filter(todo => todo.id !== action.payload);

      case COMPLETEALL:
      return state.map(todo => {
         return {
          ...todo,
          status: false
         }
      })
      case CLEARCOMPLETE:
        return state.filter(todo => todo.status === true);
  
    default:
      return state
  }
}

export default todosReducer;