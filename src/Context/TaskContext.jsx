

import React, { createContext, useState} from 'react';
// import { useActionData } from 'react-router';


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {

    const [open,setOpen] = useState(false);
   
  const handleOpen =(task)=> {
    setOpen(true)
    setEditingTaskId(task)
  
  }
  const handleClose =()=> {
    setOpen(false)
    setEditingTaskId(null)

  }
 
 
 
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [openEdit,setOpenEdit] = useState(false)

  


        return(
          <TaskContext.Provider value={{open,setOpen,handleClose,handleOpen,editingTaskId,setEditingTaskId,openEdit,setOpenEdit}}>
             {children}
          </TaskContext.Provider>
        )



};
