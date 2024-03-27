import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [name, setName] = useState("Name");

  const [book, setBook] = useState({
    title: "Harry Poter",
    author: "JK Rowling",
  });

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const clickHandler = () => {
    setName(() => "Ann");
  };

  const bookChangeHandler = () => {
    setBook((book) => {
      return {
        ...book,
        author: "J. K. Rowling",
      };
    });
  };

  const addTaskHandler = () => {
    let taskTrimed = task.trim();
    if (taskTrimed === "") {
      setTask("");
      return;
    }
    setTasks([...tasks, taskTrimed]);
    setTask("");
  };

  const deleteHandler = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    // const fTasks = tasks.filter((t) => t !== task);
    // setTasks(fTasks);
  };

  return (
    <>
      <div
        className="simpleState"
        style={{
          backgroundColor: "gray",
          padding: "20px",
          marginBlock: "20px",
          color: "#fff",
        }}
      >
        <p>{name}</p>
        <button onClick={clickHandler}>Click</button>
      </div>

      <div className="objectState">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        {/* <p>book.pages</p> */}
        <button onClick={bookChangeHandler}>Change Book</button>
      </div>

      <div className="arrayState">
        <h1>Task list</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTaskHandler}>Add task!</button>
        <div className="tasksList">
          {tasks.map((task) => (
            <p key={nanoid()}>
              <span> {task}</span>
              <button
                onClick={() => {
                  deleteHandler(task);
                }}
              >
                Delete
              </button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
