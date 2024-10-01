import React, { useState } from 'react'

const TodoForms = ({ newTodo }) => {
  const [textInput, setTextInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (textInput === '') return
    newTodo(textInput)
    setTextInput('') // clear the input after adding
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  )
}

export default TodoForms
