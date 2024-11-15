import React from 'react'
import "./Hero.css"
import TaskHeader from '../TaskContainer/TaskHeader'
import TaskList from '../TaskContainer/TaskList'
import WithHover from '../../HOC/WithHover'

function Hero({open,handleOpen,handleClose}) {
  return (
    <div className='hero'>
        <TaskHeader open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        <TaskList/>
    </div>
  )
}

export default WithHover(Hero)