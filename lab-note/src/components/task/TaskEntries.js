import React from "react";
import TaskEntry from "./TaskEntry";

const TaskEntries = () => {
  const entries = [1, 2, 3, 4, 5];
  return (
    <div className="task__entries">
      {entries.map((value) => (
        <TaskEntry key={value} />
      ))}
    </div>
  );
};

export default TaskEntries;
