import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";
import NothingSelected from './NothingSelected'

const TaskScreen = () => {

const {active} = useSelector(state => state.notes)


  return (
    <div className="task__main-content">
      <Sidebar />

      <main>
        

        {
          (active)
          ? (<NoteScreen />)
          :(<NothingSelected /> )
        }
        
        
      </main>
    </div>
  );
};

export default TaskScreen;
