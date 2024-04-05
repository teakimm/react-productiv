import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";


const currentTodos = JSON.parse(localStorage.getItem("todos"));

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

function TodoApp({ initialTodos = currentTodos || [] }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const createdTodo = { ...newTodo, id: uuid(), completed: false };
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

  function complete(todo) {
    setTodos(todos => todos.map(t => t.id === id ? [...t, t.completed = true] : t));

  }

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0
            ? <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
              complete={complete}
            />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            {todos.length > 0
              ? <div className="TodoApp-TopTodo">
                <TopTodo todos={todos} />
              </div>
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