import React, { useContext } from 'react'
import "./TaskHeader.css"
import TaskForm from '../Form/TaskForm'
import { TaskContext } from '../../Context/TaskContext'
// import WithHover from '../../HOC/WithHover'
function TaskHeader() {
  const{open,handleClose,handleOpen,editingTaskId} = useContext(TaskContext)
  return (
    <div style={{backgroundColor:"white"}}>
    <div className='TaskHeader'>
        <h2 className='logo_text'>task manager</h2>
        <button onClick={handleOpen}>Create New Task</button>
    </div>
    <TaskForm open={open} handleClose={handleClose}  />
    </div>
  )

}

export default TaskHeader