import React from 'react';
import cancel from '../assests/images/cancel.png'
import {useDispatch} from 'react-redux'
import { changeTodoPriority, changeTodoStutas, deleteTodo } from '../redux/todos/todosAction';

const SingleTodo = (t) => {
  const {title, id, status, priority} = t.todo;
  const dispatch = useDispatch();

  const handlePriority = (id, priority) => {
    dispatch(changeTodoPriority(id, priority));
  }

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${status ? '' : 'border-green-500 focus-within:border-green-500'}`}>
              <input onChange={()=>dispatch(changeTodoStutas(id))}
                type="checkbox"
                className="opacity-0 absolute rounded-full cursor-pointer"
              />
              <svg
                className={`${status ? 'hidden' : ''} fill-current w-3 h-3 text-green-500 pointer-events-none`}
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>

            <div className={`select-none flex-1 ${status ? '' : 'line-through'}`}>
             <span className='cursor-pointer' onClick={()=>dispatch(changeTodoStutas(id))}>{title}</span>
            </div>

{ priority === 'red' ? <>
 
<div onClick={()=>handlePriority(id, 'green')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500`}></div>

<div onClick={()=>handlePriority(id, 'yellow')} className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"></div>

<div onClick={()=>handlePriority(id, 'red')}  className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500  bg-red-500"></div>

</> : '' }
{ priority === 'yellow' ? <>
<div onClick={()=>handlePriority(id, 'green')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500`}></div>

<div onClick={()=>handlePriority(id, 'yellow')} className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 bg-yellow-500"></div>

<div onClick={()=>handlePriority(id, 'red')}  className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"></div>
</> : '' }
{ priority === 'green' ? <>
<div onClick={()=>handlePriority(id, 'green')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500`}></div>

<div onClick={()=>handlePriority(id, 'yellow')}  className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"></div>

<div onClick={()=>handlePriority(id, 'red')}  className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"></div>
</> : '' }

            <img onClick={()=>dispatch(deleteTodo(id))}
              src={cancel}
              className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
              alt="Cancel"
            />
          </div>
  );
};

export default SingleTodo;