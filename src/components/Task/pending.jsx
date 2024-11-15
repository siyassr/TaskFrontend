import React from 'react'
import { useSelector } from 'react-redux'

function Pending() {
    const tasks = useSelector((state) => state.tasks.tasks)

    const filteredTasks = tasks.filter((task)=> task.status === "pending")
  return (
    <div>
        {filteredTasks.map((task)=> (
            <div key={task._id}>
                <h1>{task.title}</h1>
            </div>
            
        ))}
    </div>
  )
}

export default Pending