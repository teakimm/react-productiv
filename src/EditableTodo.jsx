import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TopTodo from "./TopTodo";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State:
 * -showEditForm(true or false)
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove, complete }) {

  const [showEditForm, setShowEditForm] = useState(false);


  /** Toggle if this is being edited */
  function toggleEdit() {
    setShowEditForm(showEditForm => showEditForm = !showEditForm);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ id: todo.id, ...formData });
    toggleEdit();
  }

  function completedOrNot() {
    complete(todo);
  }

  return (



    <div className="EditableTodo">

      {showEditForm
        ? <TodoForm initialFormData={todo} handleSave={handleSave} />
        :
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={completedOrNot}>
              Completed
            </button>
          </div>
          <Todo
            todo={todo}
          />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
