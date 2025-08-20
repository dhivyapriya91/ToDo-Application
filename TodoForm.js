// import React, { useState, useEffect } from 'react';

// function TodoForm({ onSubmit, todoToEdit }) {
//   const [text, setText] = useState('');

//   useEffect(() => {setText(todoToEdit ? todoToEdit.text : '');
//   }, [todoToEdit]);

//   const submit = e => {e.preventDefault();
//     if (!text.trim()) return;
//     onSubmit(text);
//     setText('');
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         type="text"
//         placeholder="Enter todo..."
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button type="submit">{todoToEdit ? 'Update' : 'Add'}</button>
//     </form>
//   );
// }

// export default TodoForm;

import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
