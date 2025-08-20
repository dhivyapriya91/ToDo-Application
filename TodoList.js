// import React from 'react';
// import TodoItem from './TodoItem';

// function TodoList({ todos, filter, search, onToggle, onEdit, onDelete }) {
//   return (
//     <ul>
//       {todos
//         .filter(t => filter === 'All' ||
//           (filter === 'Completed' && t.completed) ||
//           (filter === 'Pending' && !t.completed))
//         .filter(t => t.text.toLowerCase().includes(search.toLowerCase()))
//         .map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onToggle={onToggle}
//             onEdit={onEdit}
//             onDelete={onDelete}
//           />
//         ))}
//     </ul>
//   );
// }

// export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li>No todos found.</li>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
