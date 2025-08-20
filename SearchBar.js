// // import React from 'react';

// // function SearchBar({ search, onSearchChange, filter, onFilterChange }) {
// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search todos..."
// //         value={search}
// //         onChange={e => onSearchChange(e.target.value)}
// //       />
// //       <select value={filter} onChange={e => onFilterChange(e.target.value)}>
// //         <option>All</option>
// //         <option>Completed</option>
// //         <option>Pending</option>
// //       </select>
// //     </div>
// //   );
// // }

// // export default SearchBar;

import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus }) => {
  const buttons = ['All', 'Completed', 'Pending'];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-buttons">
        {buttons.map((status) => (
          <button
            key={status}
            className={filterStatus === status ? 'active' : ''}
            onClick={() => setFilterStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
