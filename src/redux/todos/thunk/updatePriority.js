import { changeTodoPriority, changeTodoStutas } from "../todosAction";

const updatePriority = (id, priority) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        priority: priority
      }),
      headers: {
        "content-type": 'application/json; charset=UTF-8'
      }
    });
    const todo = await response.json();
    dispatch(changeTodoPriority(todo.id, todo.priority));
  };
};

export default updatePriority;
