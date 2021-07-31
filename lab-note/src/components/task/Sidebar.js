import React from 'react'
import TaskEntries from './TaskEntries'
   

const Sidebar = () => {
    return (
        <aside className="task__sidebar">
            <div className="task__sidebar-navbar">
                <h3 className="mt-5"> 
                   <i className="far fa-moon"></i>            
                <span> Angelica</span>
                </h3>
                <button className="btn">
                    logout
                </button>               
            </div>
            <div className="task__new-entry">
              <i className="far fa-calendar-plus fa-5x"></i>
              <p className="mt-5">
                  New entry
              </p>
            </div>

            <TaskEntries/>

        </aside>
    )
}

export default Sidebar
