import React, { useEffect } from "react";
import SingleTodo from "./SingleTodo";
import {useDispatch, useSelector} from 'react-redux'
import fetchTodos from "../redux/todos/thunk/fetchTodos";

const TodoList = () => {
  const todosList = useSelector(state => state.todos.filter(f => f.status === true));
  const filterR = useSelector(state => state.filterR.status);
  const filterColors = useSelector(state => state.filterR.colors);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchTodos)
  },[dispatch])

  const filterByStauys = () => {
    if(filterR === 'All') {
      return todosList
    } else if(filterR === 'Incomplete') {
      return todosList.filter(f => f.status === true)
    } else if(filterR === 'Complete') {
      return todosList.filter(f => f.status === false)
    }
  }
  const unCompletedTodos = todosList.filter(f => f.status === true)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
     {todosList && filterByStauys().filter(todo => {
       if (filterColors.length > 0) {
    return filterColors.includes(todo?.priority)
       }
       return todo;
     }).map(t =>  <SingleTodo key={t.id} todo={t} />)}
    </div>
  );
};

export default TodoList;
