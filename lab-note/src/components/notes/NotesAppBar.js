import React from "react";

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>31 Julio 2021</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn">Save</button>
        <button className="btn">Delete</button>
        <button className="btn">Edit</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
