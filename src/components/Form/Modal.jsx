import React, { useContext, useState,useEffect } from 'react'
import { Modal, Box, Button, } from '@mui/material';
import { TaskContext } from '../../Context/TaskContext';





function ModalComponent({data}) {
    const {open,handleClose} =useContext(TaskContext)
  

 console.log(data,"dtata");
 

  const handleSubmit = () => {
    // const {editingTaskId} = useContext(TaskContext)
    //  const taskData = { title, description, dueDate, status };
    //   dispatch(createTask(taskData));
    //   handleClose()
  };
  
  // useEffect(() => {
  //   if (editingTaskId) {
      
  //     const taskToEdit = tasks.find((task) => task._id === editingTaskId);

  //     if (taskToEdit) {
      
  //       setTitle(taskToEdit.title);
  //       setDescription(taskToEdit.description);
  //      setDate(formatDate(taskToEdit.dueDate));
  //       setStatus(taskToEdit.status);
  //     }
  //   }
  // }, [editingTaskId, tasks, setTitle, setDescription, setDate, setStatus]);

  // const formatDate = (date) => {
  //   const d = new Date(date);
  //   const year = d.getFullYear();
  //   const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Adding leading zero if necessary
  //   const day = d.getDate().toString().padStart(2, '0'); // Adding leading zero if necessary
  //   return `${year}-${month}-${day}`;
  // };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
     <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          // p: 4,
          borderRadius: 1,
        }}
      >
        <div className="login_content bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {/* <h2>{editingTaskId ? "Edit Task" : "Add Task"}</h2> */}
          </h2>

         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={data.title}
            //   onChange={(e) => setTitle(e.target.value)}  
              placeholder="Enter your title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description
            </label>
            <input
              type="text"
              value={data.description}
            //   onChange={(e) => setDescription(e.target.value)}  
              placeholder="Enter your description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              value={data.dueDate}
            //   onChange={(e) => setDate(e.target.value)}  
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>


         
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
              value={data.status}
             
            //   onChange={(e) => setStatus(e.target.value)}  
            >
              <option value="">Current Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
            </select>
          </div>

       
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            {/* <Button variant="contained" color="secondary" onClick={} >
              Close
            </Button> */}
            <Button variant="contained" color="primary" onClick={handleSubmit}  >
            {/* {editingTaskId ? "Update Task" : "Add Task"} */}
            add Task
            </Button>
          </Box>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalComponent