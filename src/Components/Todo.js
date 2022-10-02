const Todo = ({ todo, onEdit, onDelete, onComplete }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={todo.isCompleted ? "complete" : ""}>
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className="btn">
          Edit
        </button>
        <button onClick={onDelete} className="btn remove">
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default Todo;
