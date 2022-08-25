import React, { useEffect } from "react";
import SingleTodo from "./SingleTodo";
import {useDispatch, useSelector} from 'react-redux'
import fetchTodos from "../redux/todos/thunk/fetchTodos";

const TodoListCompleted = () => {
  const todosList = useSelector(state => state.todos);
  const filterR = useSelector(state => state.filterR.status);
  const filterColors = useSelector(state => state.filterR.colors);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchTodos)
  },[dispatch])

  const completedTodos = todosList.filter(f => f.status === false)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
     {todosList && completedTodos.map(t =>  <SingleTodo key={t.id} todo={t} />)}
    </div>
  );
};

export default TodoListCompleted;
