// import React, { useState } from 'react';
// import TodoForm from './components/TodoForm';
// import SearchBar from './components/SearchBar';
// import TodoList from './components/TodoList';
// import './styles.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoToEdit, setTodoToEdit] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [search, setSearch] = useState('');

//   const addOrEditTodo = text => {
//     if (todoToEdit) {
//       setTodos(todos.map(t =>
//         t.id === todoToEdit.id ? { ...t, text } : t
//       ));
//       setTodoToEdit(null);
//     } else {
//       setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
//     }
//   };

//   const toggleComplete = id =>
//     setTodos(todos.map(t =>
//       t.id === id ? { ...t, completed: !t.completed } : t
//     ));

//   const deleteTodo = id => setTodos(todos.filter(t => t.id !== id));

//   return (
//     <div className="app">
//       <h1>Todo Application</h1>
//       <TodoForm onSubmit={addOrEditTodo} todoToEdit={todoToEdit} />
//       <SearchBar
//         search={search}
//         onSearchChange={setSearch}
//         filter={filter}
//         onFilterChange={setFilter}
//       />
//       <TodoList
//         todos={todos}
//         filter={filter}
//         search={search}
//         onToggle={toggleComplete}
//         onEdit={setTodoToEdit}
//         onDelete={deleteTodo}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === 'All' ||
      (filterStatus === 'Completed' && todo.completed) ||
      (filterStatus === 'Pending' && !todo.completed);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app">
      <h1>Todo Application</h1>
      <TodoForm onAdd={addTodo} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
      />
    </div>
  );
};

export default App;
