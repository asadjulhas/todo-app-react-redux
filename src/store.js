import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./redux/filter/filterReducer";
import todosReducer from "./redux/todos/todosReducer";

const rootReducer = combineReducers({
  todosR: todosReducer,
  filterR: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;