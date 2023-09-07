import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  return (
    <div>
      <Header setTasks={setTasks} />

      <div className="grid grid-cols-3 gap-x-1 w-full mb-4">
        <TaskColumn
          img={todoIcon}
          title="To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          className="relative bg-gray-500 rounded-md text-gray-200 p-4"
        />

        <TaskColumn
          img={doingIcon}
          title="Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          className="relative bg-gray-500 rounded-md text-gray-200 p-4"
        />

        <TaskColumn
          img={doneIcon}
          title="Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          className="relative bg-gray-500 rounded-md text-gray-200 p-4"
        />
      </div>
    </div>
  );
};

export default App;
