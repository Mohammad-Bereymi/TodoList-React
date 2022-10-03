const NavBar = ({ unCompletedTodos }) => {
  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span>
          <h3>are not completed</h3>
        </>
      ) : (
        <h3>set your today Todos</h3>
      )}
    </header>
  );
};

export default NavBar;
