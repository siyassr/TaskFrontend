import React from 'react'
import { useSelector } from 'react-redux';
// import Chart from '../Chart/Chart'

function Daigram() {
    const tasks = useSelector((state)=> state.tasks.tasks)
    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
    const completedTasks = tasks.filter((task) => task.status === 'completed').length;
    const inProgressTasks = tasks.filter((task) => task.status === 'in-progress').length;
  return (
    <>
    <div className='mt-6 flex flex-col gap-8'>
        <div className='grid grid-cols-2 h-4'>
        <div className='text-gray-400'>
            <p>Total Tasks:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className='absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-purple-500 rounded-[5px]'></span>
            <span className='font-medium text-4x1 text-[#333]'>{totalTasks}</span>
            </p>
        </div>
        <div className='text-gray-400'>
            <p>In Progrss :</p>
            <p className='pl-4 relative flex gap-2'>
            <span className='absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-yellow-500 rounded-[5px]'></span>
            <span className='font-medium text-4x1 text-[#333]'>{inProgressTasks}</span>
            </p>
        </div>
        <div className='text-gray-400'>
            <p>Completed:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className='absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-500 rounded-[5px]'></span>
            <span className='font-medium text-4x1 text-[#333]'>{completedTasks}</span>
            </p>
        </div>
        <div className='text-gray-400'>
            <p>Pending:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className='absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-red-500 rounded-[5px]'></span>
            <span className='font-medium text-4x1 text-[#333]'>{pendingTasks}</span>
            </p>
        </div>
    </div>
    </div>
    {/* <Chart/> */}
    </>
  )
}

export default Daigram  