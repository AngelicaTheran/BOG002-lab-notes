import React from "react";

const TaskEntry = () => {
  return (
    <div className="task__entry pointer">
      <div
        className="task__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://heroineproblem.files.wordpress.com/2015/10/four-horsemen-of-patriarchy-revolution-girl-utena-01.png)",
        }}
      ></div>
      <div className="task__entry-body">
        <p className="task__entry-title">Un nuevo dia</p>
        <p className="task__entry-content">algun dia seremos estrellas</p>
      </div>
      <div className="task__entry-date-box">
        <span>Monday</span>
        <h4>30</h4>
      </div>
    </div>
  );
};

export default TaskEntry;
