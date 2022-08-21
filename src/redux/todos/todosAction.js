import { ADDTODO, CHANGEPER, CHANGESTATUS, CLEARCOMPLETE, COMPLETEALL, DELETETODOS } from "./todosConstant"

export const addTodos = (title) => {
  return {
    type: ADDTODO,
    payload: title,
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