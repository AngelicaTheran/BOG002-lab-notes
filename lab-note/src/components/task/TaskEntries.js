import React from "react";
import { useSelector } from "react-redux";
import TaskEntry from "./TaskEntry";

const TaskEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="task__entries">
      {notes.map((note) => (
        <TaskEntry key={note.id} {...note} />
      ))}
    </div>
  );
};

export default TaskEntries;
