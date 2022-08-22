import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { filterByColor, filterByStatus } from '../redux/filter/filterAction';

const Footer = () => {
  const todosList = useSelector(state => state.todos);
  const filterR = useSelector(state => state.filterR.status);
  const filterColor = useSelector(state => state.filterR.colors);
  const dispatch = useDispatch();
  const leftTask = todosList.filter(todo => todo.status === true).length;

  const filterStatus = (status) => {
    dispatch(filterByStatus(status))
  }

  const handleFilterByColors = (color) => {
     const isExists = filterColor.find(f => f === color);
    if(isExists) {
      dispatch(filterByColor(color,'remove'))
    }
    else {
      dispatch(filterByColor(color,'added'))
    }
  }
  const checkByColor = (color) => {
     const isFounded = filterColor.find(f => f === color); 
      return isFounded
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
    <p>{leftTask < 1 ? <span className='text-green-500'>No task left</span> : leftTask < 2 ? `${leftTask} task left` : `${leftTask} tasks left`}</p>
    <ul className="flex space-x-1 items-center text-xs">
      <li onClick={()=>filterStatus('All')}  className={`cursor-pointer ${filterR === 'All' && 'font-bold'}`}>All</li>
      <li>|</li>
      <li onClick={()=>filterStatus('Incomplete')} className={`cursor-pointer ${filterR === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
      <li>|</li>
      <li onClick={()=>filterStatus('Complete')} className={`cursor-pointer ${filterR === 'Complete' && 'font-bold'}`}>Complete</li>
      <li></li>
      <li></li>
      <li onClick={()=>handleFilterByColors('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${checkByColor('green') ? 'bg-green-500' : ''}`}></li>
      <li onClick={()=>handleFilterByColors('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${checkByColor('red') ? 'bg-red-500' : ''}`}></li>
      <li onClick={()=>handleFilterByColors('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${checkByColor('yellow') ? 'bg-yellow-500' : ''}`}></li>
    </ul>
  </div>
  );
};

export default Footer;