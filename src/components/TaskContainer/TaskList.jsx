import React ,{useContext,useEffect,useState}from 'react'
import "./TaskHeader.css"
import { fetchTasks,deleteTask } from '../../Redux/TaskSlice'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import TaskForm from '../Form/TaskForm';
import { TaskContext } from '../../Context/TaskContext';
import {useParams} from "react-router-dom"
import Imoji from '../../../public/Sad-Face-Emoji.png'


function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  const {handleOpen,setOpenEdit} = useContext(TaskContext)
  const { status } = useParams();
  console.log(status,"statusssss")
  const handleOpenEdit = (task) => {
    handleOpen(task);
    setOpenEdit(true);

  }
 
  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
     console.log(tasks,"Tasks from Redux store")
  }, [taskStatus, dispatch,tasks]);

  if (taskStatus === 'loading') return <p>Loading tasks...</p>;
  if (taskStatus === 'failed') return <p>Error: {error}</p>;


  const getHeading = () => {
    switch (status) {
      case 'pending':
        return 'Pending Tasks';
      case 'completed':
        return 'Completed Tasks';
      case 'progress':
        return 'In Progress Tasks';
      default:
        return 'All Tasks'; // Default heading
    }
  };
  

  const filteredTasks = tasks.filter(task => {

    if (status === 'pending') return task.status === 'pending';
    if (status === 'completed') return task.status === 'completed';
    if (status === 'progress') return task.status === 'in-progress';
    return true; 
  });
 console.log(filteredTasks,"filteredTasks")
  return (
    <div className='rounded-lg'>
      <div className='p-[1rem]'>
    <h2 className='text-xl font-semibold text-gray-800'>{getHeading()}</h2>
    </div>
    <div className='taskContainer p-[1rem]  grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]  rounded-lg '>
     
  {filteredTasks.length === 0 ? (
     <div>
       
     <div className=" imoji text-gray-500 mt-6 flex flex-col items-center justify-center h-full">
     <img style={{ width: "70px", height: "70px" }} src={Imoji} alt="" />
     <h2 className="">
        {status === 'pending'
          ? 'No pending tasks ..........'
          : status === 'completed'
          ? 'No completed tasks ..........'
          : status === 'progress'
          ? 'No progress tasks ..........'
          : 'No All tasks ..........'}
      </h2>
   </div>
   </div>
    ) : (
      filteredTasks.map((task) => (
        <div key={task._id} className="task-item p-4 shadow-sm bg-white rounded-lg mb-4 border">
          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
         <p className="text-gray-600 mt-2">{task.description}</p>
        <p className="text-sm text-gray-500 mt-1">Status: <span className="font-medium text-gray-700">{task.status}</span></p>
        <p className="text-sm text-gray-500 mt-1">Due Date: <span className="font-medium text-gray-700">{new Date(task.dueDate).toLocaleDateString('en-GB')}</span></p>

          <div className="icon-group mt-4 flex space-x-4">
            <FontAwesomeIcon 
              icon={faEdit} 
              className="text-blue-500 cursor-pointer"
              onClick={() => handleOpenEdit(task)}
            />
            <FontAwesomeIcon 
              icon={faTrash} 
              className="text-red-500 cursor-pointer"
              onClick={() => dispatch(deleteTask(task._id))} 
            />
          </div>
        </div>
      ))
    )}
     
    </div>
    </div>
  )
}

export default TaskList

