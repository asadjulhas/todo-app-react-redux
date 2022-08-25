import { changeTodoStutas } from "../todosAction";

const updateTodoStutas = (id, status) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: !status
      }),
      headers: {
        "content-type": 'application/json; charset=UTF-8'
      }
    });
    const todo = await response.json();

    dispatch(changeTodoStutas(todo.id));
  };
};

export default updateTodoStutas;
