import React, { useState } from 'react';
import TodoForm from './Todo-form';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className="todo-row-text" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <AiOutlineCloseSquare
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <FiEdit3
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;