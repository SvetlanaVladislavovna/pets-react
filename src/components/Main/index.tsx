import { useState } from "react";
import "./style.css";
import tasks from "../../mockData";

const Main = () => {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState();

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleBtn = () => {
    if (inputValue) {
      setTodos([{ title: inputValue, completed: false }, ...todos]);
    }
  };

  return (
    <main>
      <input value={inputValue} onChange={handleInput} />
      <button onClick={handleBtn}>Добавить</button>
      <hr />

      {todos.map(({ title, completed }, i) => {
        return (
          <div className="task" key={i}>
            <input type="checkbox" checked={completed} />
            <p>{title}</p>
            <button>Удалить</button>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
