// import React from 'react';

// function TodoItem({ todo, onToggle, onEdit, onDelete }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => onToggle(todo.id)}
//       />
//       <span style={{
//         textDecoration: todo.completed ? 'line-through' : 'none',
//         color: todo.completed ? '#777' : '#000'
//       }}>
//         {todo.text}
//       </span>
//       <button onClick={() => onEdit(todo)}>Edit</button>
//       <button onClick={() => onDelete(todo.id)}>Delete</button>
//     </li>
//   );
// }

// export default TodoItem;

import React, { useState } from 'react';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
