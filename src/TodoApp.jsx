import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const createdTodo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, createdTodo]);

  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos =>
      todos.map(t =>
        t.id === updatedTodo.id ? updatedTodo : t
      )
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(t => t.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0
            ? <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
            />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            {todos.length > 0
              ? <TopTodo todos={todos} />
              : "No todos yet!"}
          </section>

          <section>
            <div>
              <h3 className="mb-3">Add Nu</h3>
              <TodoForm handleSave={create} />
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;