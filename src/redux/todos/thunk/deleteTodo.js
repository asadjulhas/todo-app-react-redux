import { deleteTodo } from "../todosAction";

const deleteTodoServer = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${id}`, {
      method: "DELETE",
  });
    dispatch(deleteTodo(id));
  };
};

export default deleteTodoServer;
