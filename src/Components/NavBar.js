import { useState } from "react";
import Select from "react-select";
const NavBar = ({ unCompletedTodos, selectedOption, onChange }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "UnCompleted", label: "UnCompleted" },
  ];
  if (!unCompletedTodos) return <h3 className="title">set your today Todos</h3>;
  return (
    <header>
      <span>{unCompletedTodos}</span>
      <h3>are not completed</h3>
      <Select value={selectedOption} onChange={onChange} options={options} className='filter'/>
      {/* <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;
