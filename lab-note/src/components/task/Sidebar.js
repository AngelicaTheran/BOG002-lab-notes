import React from "react";
import TaskEntries from "./TaskEntries";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(startLogout());    
  };

  const handleNewNote =()=>{
    dispatch(startNewNote());

  }

  return (
    <aside className="task__sidebar">
      <div className="task__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          logout
        </button>
      </div>
      <div className="task__new-entry" onClick={handleNewNote}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <TaskEntries />
    </aside>
  );
};

export default Sidebar;
