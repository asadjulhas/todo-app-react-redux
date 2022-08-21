import React from "react";
import notes from "../assests/images/notes.png";
import doubleTick from "../assests/images/double-tick.png";
import plus from "../assests/images/plus.png";
import {useSelector, useDispatch} from 'react-redux'
import { addTodos, clearAllCompleteTodos, todosComplete } from "../redux/todos/todosAction";

const Header = () => {
  const todosList = useSelector(state => state.todosR);
  const maxId = todosList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  const dispatch = useDispatch();
const handleSubmit = (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const id = maxId + 1;
  const status = true;
  const priority = 'red';
  const todo = {id, title, status, priority};
  if(!title) {
    alert('Please add title');
    return;
  }
  dispatch(addTodos(todo))
  e.target.reset();
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input required name="title"
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span onClick={()=>dispatch(todosComplete())}>Complete All Tasks</span>
        </li>
        <li onClick={()=>dispatch(clearAllCompleteTodos())} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
