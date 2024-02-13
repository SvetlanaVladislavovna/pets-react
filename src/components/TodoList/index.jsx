import { useState } from "react";
import TodoInput from "../TodoInput";
import Todos from "../Todos";
import tasks from "../../mockData";


const TodoList = () => {
    const [inputValue, setInputValue] = useState();
    const [todos, setTodos] = useState(tasks);

    const handleInput = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleBtn = () => {
        if (inputValue) {
          setTodos([{ title: inputValue, completed: false }, ...todos]);
        }
      };
    
    return (
        <>
        <TodoInput inputValue={inputValue} handleInput={handleInput} handleBtn={handleBtn}/>
        <Todos todos={todos}/>
        </>
        
    )
}

export default TodoList;