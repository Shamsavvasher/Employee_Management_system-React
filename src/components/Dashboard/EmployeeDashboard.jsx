import React from 'react'
import { Header } from '../Other/Header'
import { TaskListNumber } from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (

        <div className='p-10 bg-[#1c1c1c] h-screen text-white text-3xl font-semibold'>
            <Header/>
            <TaskListNumber/>
            <TaskList/>
           

        </div>
  
  )
}
