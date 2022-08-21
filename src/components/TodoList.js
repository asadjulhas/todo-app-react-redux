import React from "react";
import SingleTodo from "./SingleTodo";
import {useSelector} from 'react-redux'

const TodoList = () => {
  const todosList = useSelector(state => state.todosR);
  const filterR = useSelector(state => state.filterR.status);
  const filterColors = useSelector(state => state.filterR.colors);
  const filterByStauys = () => {
    if(filterR === 'All') {
      return todosList
    } else if(filterR === 'Incomplete') {
      return todosList.filter(f => f.status === true)
    } else if(filterR === 'Complete') {
      return todosList.filter(f => f.status === false)
    }
  }
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
