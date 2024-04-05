import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  return (
    <div>
      {todo.completed === false ?
        <div className="Todo">
          <div><b>{todo.title}</b> <small>({`priority: ${todo.priority}`})</small></div>
          <div><small>{todo.description}</small></div>
        </div>
        :
        <div className="Todo">
          <div><b><s>{todo.title}</s></b> <small>({`priority: ${todo.priority}`})</small></div>
          <div><small>{todo.description}</small></div>
        </div>


      }
    </div>

  );
}

export default Todo;
