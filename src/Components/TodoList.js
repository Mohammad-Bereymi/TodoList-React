import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const rendereTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };
  return <div>{rendereTodos()}</div>;
};

export default TodoList;
