import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */



function EditableTodoList({ todos, update, remove, complete }) {

  return (
    <div>
      {todos.map(t =>
        <EditableTodo
          todo={t}
          update={update}
          remove={remove}
          complete={complete}
          key={t.id}
        />)}
    </div>
  );
}

export default EditableTodoList;
