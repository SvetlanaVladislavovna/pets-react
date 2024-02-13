

const TodoInput = (props) => {
  const { inputValue, handleInput, handleBtn } = props;
  return (
    <>
      <input value={inputValue} onChange={handleInput} />
      <button onClick={handleBtn}>Добавить</button>
      <hr />
    </>
  );
};
export default TodoInput;
