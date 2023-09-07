import { useState } from "react";
import But from "./But";

const Header = ({ setTasks }) => {
  const [TaskInfo, setTaskInfo] = useState({
    task: "",
    status: "todo", // Default status value
    tag: [],
  });

  const tagnames = ["HTML", "TailwindCSS", "JavaScript", "React"];

  const selectTag = (tag) => {
    if (TaskInfo.tag.includes(tag)) {
      const filteredTag = TaskInfo.tag.filter((item) => item !== tag);
      setTaskInfo((previous) => ({ ...previous, tag: filteredTag }));
    } else {
      setTaskInfo((previous) => ({
        ...previous,
        tag: [...previous.tag, tag],
      }));
    }
  };

  const checkTag = (tag) => {
    return TaskInfo.tag.includes(tag);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskInfo((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(TaskInfo);
    setTasks((prev) => {
      return [...prev, TaskInfo];
    });
    setTaskInfo({ task: "", status: "todo", tag: [] }); // Reset input fields
  };

  return (
    <form onSubmit={handleSubmit} className="mx-8 mt-8">
      <div className="flex items-center font-poppins justify-between">
        <input
          type="text"
          onChange={handleChange}
          name="task"
          placeholder="Enter Todo"
          value={TaskInfo.task}
          className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="flex gap-4 items-center">
          {tagnames.map((tagName) => (
            <But
              tagName={tagName}
              key={tagName}
              selectTag={selectTag}
              selected={checkTag(tagName)}
            />
          ))}
          <div className="ml-2">
            <select
              name="status"
              onChange={handleChange}
              value={TaskInfo.status}
              className="px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default Header;
