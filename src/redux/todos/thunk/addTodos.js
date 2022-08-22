import { addTodos, getTodos } from "../todosAction";

const addTodosServer = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify(todoText),
      headers: {
        "content-type": 'application/json; charset=UTF-8'
      }
    });
    const todo = await response.json();

    dispatch(addTodos(todo));
  };
};

export default addTodosServer;
