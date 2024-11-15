
import React, { useState, useEffect, useContext } from 'react';
import { Modal, Box, Button } from '@mui/material';
import { TaskContext } from '../../Context/TaskContext';
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from '../../Redux/TaskSlice';

function TaskForm({ open, handleClose }) {
  const dispatch = useDispatch();
  const { editingTaskId, setEditingTaskId, openEdit, setOpenEdit } = useContext(TaskContext);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDate] = useState('');
  const [status, setStatus] = useState('pending');
  
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    if (editingTaskId) {
      setTitle(editingTaskId.title || '');
      setDescription(editingTaskId.description || '');
      setDate(formatDate(editingTaskId.dueDate));
      setStatus(editingTaskId.status || 'pending');
    } else {
      setTitle('');
      setDescription('');
      setDate('');
      setStatus('pending');
    }
  }, [editingTaskId]);

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!description) errors.description = "Description is required.";
    if (!dueDate) errors.dueDate = "Due date is required.";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const taskData = { title, description, dueDate, status };
    
    if (openEdit) {
      dispatch(updateTask({ id: editingTaskId._id, data: taskData }));
      setEditingTaskId(null);
      setOpenEdit(false);
    } else {
      dispatch(createTask(taskData));
    }
    
    setTitle('');
    setDescription('');
    setDate('');
    setStatus('pending');
    handleClose();
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
          borderRadius: 1,
        }}
      >
        <div className="login_content bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {openEdit ? "Edit Task" : "Add Task"}
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              className={`w-full px-4 py-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
            />
            {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description"
              className={`w-full px-4 py-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
            />
            {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full px-4 py-2 border ${formErrors.dueDate ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
            />
            {formErrors.dueDate && <p className="text-red-500 text-sm">{formErrors.dueDate}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              className={`w-full px-4 py-2 border ${formErrors.status ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Current Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
            </select>
          </div>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {openEdit ? "Update Task" : "Add Task"}
            </Button>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export default TaskForm;

