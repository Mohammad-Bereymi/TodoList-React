import { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo !");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          ref={inputRef}
          placeholder={props.edit ? "update todo..." : "add new todo..."}
        />
        <button
          type="submit"
          className={`btn ${props.edit ? "updateTodo" : "addTodo"}`}
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
