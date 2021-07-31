import React from 'react'
import Sidebar from './Sidebar'

 const TaskScreen = () => {
    return (
        <div className="task__main-content">
            
            <Sidebar/>

            <main>
               <h1> Main content</h1> 
            </main>

        </div>
    )
}

export default TaskScreen
