import { useState } from 'react'

export const Todos = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id: new Date().valueOf(),
        title: todo,
      },
    ])
    setTodo('')
  }

  const handleToggle = (id) => {
    setTodos((old) => old.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h2>Todos page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            placeholder="title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button>add</button>
      </form>
      <h3>Incomplete todos</h3>
      <div data-testid="items-list">
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            // data-testId={`todo-${index}`}
            data-testid="todo"
            onClick={() => handleToggle(todo.id)}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  )
}
