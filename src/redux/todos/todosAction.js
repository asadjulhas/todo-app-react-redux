import { ADDTODO, CHANGEPER, CHANGESTATUS, CLEARCOMPLETE, COMPLETEALL, DELETETODOS, GETTODO } from "./todosConstant"

export const addTodos = (todoText) => {
  return {
    type: ADDTODO,
    payload: todoText,
  }
}

export const getTodos = (todos) => {
  return {
    type: GETTODO,
    payload: todos
  }
}

export const changeTodoStutas = (id) => {
  return {
    type: CHANGESTATUS,
    payload: id,
  }
}

export const changeTodoPriority = (id, priority) => {
  return {
    type: CHANGEPER,
    payload: {id, priority},
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETETODOS,
    payload: id,
  }
}

export const todosComplete = () => {
  return {
    type: COMPLETEALL,
  }
}

export const clearAllCompleteTodos = (ids) => {
  return {
    type: CLEARCOMPLETE,
    payload: ids,
  }
}