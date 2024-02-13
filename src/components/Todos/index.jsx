

const Todos =(props)=>{
  const {todos} = props;
    return todos.map(({ title, completed }, i) => {
            return (
              <div className="task" key={i}>
                <input type="checkbox" checked={completed} />
                <p>{title}</p>
                <button>Удалить</button>
              </div>
            );
          })
    
}
export default Todos;