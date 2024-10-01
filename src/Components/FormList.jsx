import React from 'react'
import TodoItem from './TodoItem'

const FormList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default FormList
