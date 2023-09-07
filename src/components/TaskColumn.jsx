import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = (props) => {
  const { title, img, tasks, status, handleDelete } = props;

  return (
    <div className="bg-gray-300 mt-8 p-2 rounded-lg shadow-md mx-8">
      <div className="flex items-center mb-2">
        {img && <img src={img} alt="Task Icon" className="w-4 h-4 mr-2" />}
        <h2 className="text-lg font-poppins text-gray-900 font-semibold">{title}</h2>
      </div>
      <div>
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard
                key={index}
                title={task.task}
                tags={task.tag}
                handleDelete={handleDelete}
                index={index}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
