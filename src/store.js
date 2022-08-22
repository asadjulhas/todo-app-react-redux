import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import filterReducer from "./redux/filter/filterReducer";
import todosReducer from "./redux/todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filterR: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;